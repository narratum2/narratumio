import { NextResponse } from 'next/server'

export async function GET() {
  const openApiSpec = {
    openapi: '3.0.0',
    info: {
      title: 'Good Hands API',
      version: '1.0.0',
      description: 'Beauty concierge booking and discovery API for Lisbon',
      contact: {
        name: 'Good Hands',
        url: 'https://goodhands.com',
        email: 'hello@goodhands.com',
      },
    },
    servers: [
      {
        url: 'https://goodhands.com/api',
        description: 'Production server',
      },
      {
        url: 'http://localhost:3000/api',
        description: 'Development server',
      },
    ],
    paths: {
      '/bookings': {
        post: {
          summary: 'Create a new booking',
          description: 'Submit a booking request for beauty services',
          operationId: 'createBooking',
          tags: ['Bookings'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['name', 'email', 'phone', 'service', 'date', 'time'],
                  properties: {
                    name: {
                      type: 'string',
                      description: 'Full name of the client',
                      example: 'Sofia Martinez',
                    },
                    email: {
                      type: 'string',
                      format: 'email',
                      description: 'Email address',
                      example: 'sofia@example.com',
                    },
                    phone: {
                      type: 'string',
                      description: 'Phone number',
                      example: '+351 912 345 678',
                    },
                    service: {
                      type: 'string',
                      description: 'Type of service requested',
                      enum: [
                        'hair',
                        'nails',
                        'skincare',
                        'makeup',
                        'wellness',
                        'wedding',
                        'retreat',
                        'corporate',
                      ],
                      example: 'hair',
                    },
                    neighborhood: {
                      type: 'string',
                      description: 'Preferred neighborhood in Lisbon',
                      enum: [
                        'chiado',
                        'principe-real',
                        'baixa',
                        'avenida',
                        'alfama',
                        'belem',
                        'sintra',
                        'cascais',
                      ],
                      example: 'chiado',
                    },
                    date: {
                      type: 'string',
                      format: 'date',
                      description: 'Preferred date for service',
                      example: '2025-10-15',
                    },
                    time: {
                      type: 'string',
                      description: 'Preferred time for service',
                      example: '14:00',
                    },
                    message: {
                      type: 'string',
                      description: 'Additional details or requests',
                      example: 'Looking for a balayage treatment',
                    },
                    utm_source: {
                      type: 'string',
                      description: 'UTM source parameter',
                    },
                    utm_medium: {
                      type: 'string',
                      description: 'UTM medium parameter',
                    },
                    utm_campaign: {
                      type: 'string',
                      description: 'UTM campaign parameter',
                    },
                  },
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Booking created successfully',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      success: {
                        type: 'boolean',
                        example: true,
                      },
                      booking: {
                        type: 'object',
                        properties: {
                          id: {
                            type: 'string',
                            example: 'abc123',
                          },
                          name: {
                            type: 'string',
                          },
                          email: {
                            type: 'string',
                          },
                          created_at: {
                            type: 'string',
                            format: 'date-time',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            '400': {
              description: 'Bad request - missing required fields',
            },
            '500': {
              description: 'Internal server error',
            },
          },
        },
        get: {
          summary: 'Get API information',
          description: 'Returns information about the bookings endpoint',
          operationId: 'getBookingsInfo',
          tags: ['Bookings'],
          responses: {
            '200': {
              description: 'API information',
            },
          },
        },
      },
    },
    components: {
      schemas: {
        Booking: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Unique booking identifier',
            },
            name: {
              type: 'string',
              description: 'Client name',
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'Client email',
            },
            phone: {
              type: 'string',
              description: 'Client phone number',
            },
            service: {
              type: 'string',
              description: 'Service type',
            },
            neighborhood: {
              type: 'string',
              description: 'Service location',
            },
            date: {
              type: 'string',
              format: 'date',
              description: 'Service date',
            },
            time: {
              type: 'string',
              description: 'Service time',
            },
            created_at: {
              type: 'string',
              format: 'date-time',
              description: 'Booking creation timestamp',
            },
          },
        },
      },
    },
  }

  return NextResponse.json(openApiSpec, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

