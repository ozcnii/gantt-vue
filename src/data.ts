import type { Organization } from './types'

const mockData: Organization[] = [
  {
    name: 'someOrg1',
    // TODO: false
    isOpen: true,
    progress: [
      {
        week: 1,
        value: 20
      },
      {
        week: 2,
        value: 40
      },
      {
        week: 3,
        value: 95
      }
    ],
    positions: [
      {
        name: 'Backend',
        employees: [
          {
            id: 1,
            name: 'John Doe',
            // TODO: maybe use date ???
            dismissWeek: "2023-26",
            progress: [
              {
                week: 1,
                value: 20
              },
              {
                week: 2,
                value: 50
              },
              {
                week: 3,
                value: 100
              }
            ]
          },
          {
            id: 2,
            name: 'Santa Klaus',
            progress: [
              {
                week: 1,
                value: 100
              },
              {
                week: 2,
                value: 100
              },
              {
                week: 3,
                value: 2
              }
            ]
          }
        ]
      },
      {
        name: 'Devops',
        employees: [
          {
            id: 3,
            name: 'Name Surname',
            progress: [
              {
                week: 1,
                value: null
              },
              {
                week: 2,
                value: 50
              },
              {
                week: 3,
                value: 100
              }
            ]
          },
          {
            id: 4,
            name: 'Name2 Surname2',
            progress: [
              {
                week: 1,
                value: null
              },
              {
                week: 2,
                value: 50
              },
              {
                week: 3,
                value: 100
              }
            ]
          },
          {
            id: 5,
            name: 'Santa Klaus',
            progress: [
              {
                week: 1,
                value: 100
              },
              {
                week: 2,
                value: 100
              },
              {
                week: 3,
                value: 2
              }
            ]
          }
        ]
      }
    ]
  },

  {
    name: 'someOrg2',
    isOpen: true,
    progress: [
      {
        week: 1,
        value: 20
      },
      {
        week: 2,
        value: 60
      },
      {
        week: 3,
        value: null
      }
    ],
    positions: [
      {
        name: 'Frontend',
        employees: [
          {
            id: 5,
            name: 'John Doe',
            progress: [
              {
                week: 1,
                value: null
              },
              {
                week: 2,
                value: 50
              },
              {
                week: 3,
                value: 100
              }
            ]
          },
          {
            id: 6,
            name: 'Santa Klaus',
            progress: [
              {
                week: 1,
                value: 100
              },
              {
                week: 2,
                value: 100
              },
              {
                week: 3,
                value: 2
              }
            ]
          }
        ]
      },
      {
        name: 'SomeJobName',
        employees: [
          {
            id: 7,
            name: 'John2 Doe2',
            progress: [
              {
                week: 1,
                value: 100
              },
              {
                week: 2,
                value: 50
              },
              {
                week: 3,
                value: 100
              },
              {
                week: 4,
                value: 20
              }
            ]
          }
        ]
      },
      {
        name: 'Team Lead',
        employees: []
      }
    ]
  },

  {
    name: 'someOrg3',
    isOpen: true,
    progress: [
      {
        week: 1,
        value: 10
      },
      {
        week: 2,
        value: null
      },
      {
        week: 3,
        value: 100
      }
    ],
    positions: [
      {
        name: 'Backend',
        employees: []
      },
      {
        name: 'Devops',
        employees: [
          {
            id: 8,
            name: 'Name Surname',
            progress: [
              {
                week: 1,
                value: 11
              },
              {
                week: 2,
                value: 11
              },
              {
                week: 3,
                value: 11
              }
            ]
          },
          {
            id: 9,
            name: 'Name2 Surname2',
            progress: [
              {
                week: 1,
                value: null
              },
              {
                week: 2,
                value: 50
              },
              {
                week: 3,
                value: 100
              }
            ]
          },
          {
            id: 10,
            name: 'Santa Klaus',
            progress: [
              {
                week: 1,
                value: 100
              },
              {
                week: 2,
                value: 100
              },
              {
                week: 3,
                value: 2
              }
            ]
          },
          {
            id: 12,
            name: 'Santa Klaus',
            progress: []
          },
          {
            id: 13,
            name: 'Santa Klaus',
            progress: []
          }
        ]
      }
    ]
  },

  {
    name: 'someOrg4',
    isOpen: false,
    progress: [
      {
        week: 1,
        value: 10
      },
      {
        week: 2,
        value: null
      },
      {
        week: 3,
        value: 100
      }
    ],
    positions: [
      {
        name: 'Backend',
        employees: []
      },
      {
        name: 'Devops',
        employees: [
          {
            id: 15,
            name: 'Name Surname',
            progress: [
              {
                week: 1,
                value: 11
              },
              {
                week: 2,
                value: 11
              },
              {
                week: 3,
                value: 11
              }
            ]
          },
          {
            id: 16,
            name: 'Name2 Surname2',
            progress: [
              {
                week: 1,
                value: null
              },
              {
                week: 2,
                value: 50
              },
              {
                week: 3,
                value: 100
              }
            ]
          },
          {
            id: 17,
            name: 'Santa Klaus',
            progress: [
              {
                week: 1,
                value: 100
              },
              {
                week: 2,
                value: 100
              },
              {
                week: 3,
                value: 2
              }
            ]
          },
          {
            id: 19,
            name: 'Santa Klaus',
            progress: []
          },
          {
            id: 20,
            name: 'Santa Klaus',
            progress: []
          }
        ]
      }
    ]
  }
]

function generateRandomProgress(weeksStart: number, weeksEnd: number) {
  const progress = []
  for (let week = weeksStart; week <= weeksEnd; week++) {
    const value = Math.floor(Math.random() * 101) // Генерация случайного числа от 0 до 100
    progress.push({ week: week - 1, value })
  }
  return progress
}

function addYearToProgress(progress, year) {
  return progress.map((entry) => ({ ...entry, year }))
}

function generateSimilarCode(organizations, weeksStart, weeksEnd, year) {
  const newOrganizations = organizations.map((org) => {
    const newOrg = { ...org }
    newOrg.progress = addYearToProgress(generateRandomProgress(weeksStart, weeksEnd), year)
    newOrg.positions = newOrg.positions.map((position) => {
      const newPosition = { ...position }
      newPosition.employees = newPosition.employees.map((employee) => {
        const newEmployee = { ...employee }
        newEmployee.progress = addYearToProgress(generateRandomProgress(weeksStart, weeksEnd), year)
        return newEmployee
      })
      return newPosition
    })

    return newOrg
  })

  return newOrganizations
}

const weeksStart = 21
const weeksEnd = 39

const weeksStart2 = 45
const weeksEnd2 = 50

export const organizations = [
  {
    name: 'planned',
    progress: [],
    startDate: {
      week: 20,
      year: 2023
    },
  },
  {
    name: 'ended_planned',
    progress: [],
    startDate: {
      week: 43,
      year: 2023
    },
    endDate: {
      week: 5,
      year: 2024
    },
  },
  {
    name: 'ended_with_progress',
    progress: [
      {
        week: 1,
        year: 2024,
        value: 10,
      },
      {
        week: 2,
        year: 2024,
        value: 30,
      }, {
        week: 3,
        year: 2024,
        value: 40,
      }, {
        week: 4,
        year: 2024,
        value: 50,
      },
      {
        week: 5,
        year: 2024,
        value: 70,
      },
      {
        week: 6,
        year: 2024,
        value: 90,
      }
    ],
    endDate: {
      week: 4,
      year: 2024
    },
  },
  {
    name: 'planned_ended_ne_skoro',
    progress: [],

    startDate: {
      week: 40,
      year: 2023
    },
    endDate: {
      week: 33,
      year: 2024
    },
  },
  {
    name: 'GGGGGGGGGGGGGGGGGG',
    isOpen: true,
    progress: [
      {
        week: 25,
        year: 2023,
        value: 10
      },
      {
        week: 26,

        year: 2023,
        value: 10
      },
      {
        week: 27,
        year: 2023,
        value: 100
      }
    ],
    positions: [
      {
        name: 'Devops',
        employees: [
          {
            id: 15,
            name: 'Name Surname',
            progress: [
              {
                week: 25,
                year: 2023,
                value: 10
              },
              {
                week: 26,
                year: 2023,
                value: null
              },
              {
                week: 27,
                year: 2023,
                value: 100
              }
            ]
          }
        ]
      }
    ]
  },
  ...generateSimilarCode(mockData, weeksStart, weeksEnd, 2023),
  ...generateSimilarCode(mockData, weeksStart2, weeksEnd2, 2023)
]

export const months = [
  'Май 2023',
  'Июнь 2023',
  'Июль 2023',
  'Август 2023',
  'Сентябрь 2023',
  'Октябрь 2023',
  'Ноябрь 2023',
  'Декабрь 2023',
  'Январь 2024',
  'Февраль 2024'
]

export const weeks = [
  {
    week: 18,
    year: 2023
  },
  {
    week: 19,
    year: 2023
  },
  {
    week: 20,
    year: 2023
  },
  {
    week: 21,
    year: 2023
  },
  {
    week: 22,
    year: 2023
  },
  {
    week: 23,
    year: 2023
  },
  {
    week: 24,
    year: 2023
  },
  {
    week: 25,
    year: 2023
  },
  {
    week: 26,
    year: 2023
  },
  {
    week: 27,
    year: 2023
  },
  {
    week: 28,
    year: 2023
  },
  {
    week: 29,
    year: 2023
  },
  {
    week: 31,
    year: 2023
  },
  {
    week: 32,
    year: 2023
  },
  {
    week: 33,
    year: 2023
  },
  {
    week: 34,
    year: 2023
  },
  {
    week: 35,
    year: 2023
  },
  {
    week: 36,
    year: 2023
  },
  {
    week: 37,
    year: 2023
  },
  {
    week: 38,
    year: 2023
  },
  {
    week: 40,
    year: 2023
  },
  {
    week: 41,
    year: 2023
  },
  {
    week: 42,
    year: 2023
  },
  {
    week: 43,
    year: 2023
  },
  {
    week: 44,
    year: 2023
  },
  {
    week: 45,
    year: 2023
  },
  {
    week: 46,
    year: 2023
  },
  {
    week: 47,
    year: 2023
  },
  {
    week: 48,
    year: 2023
  },
  {
    week: 49,
    year: 2023
  },
  {
    week: 50,
    year: 2023
  },
  {
    week: 51,
    year: 2023
  },
  {
    week: 0,
    year: 2024
  },
  {
    week: 1,
    year: 2024
  },
  {
    week: 2,
    year: 2024
  },
  {
    week: 3,
    year: 2024
  },
  {
    week: 4,
    year: 2024
  },
  {
    week: 5,
    year: 2024
  },
  {
    week: 6,
    year: 2024
  },
  {
    week: 7,
    year: 2024
  }
]