let users = {
  rhunter: {
    id: 'rhunter',
    name: 'Russell Hunter',
    projects: ['project_id_1'],
  }
}

let projects = {
  "project_id_1": {
    id: "project_id_1",
    project_name: "Project 1",
    timestamp: 1573254199589,
    user_id: "rhunter",
    transactions: ["0", "2"]
  }
}

let transactions = {
  "0" : {
      "id" : "0",
      "acquirer_name": "August Equity",
      "target_id": "04220636",
      "target_name": "Wax Digital",
      "value": "15000000"
  },
  "1" : {
      "id" : "1",
      "acquirer_name": "AB Inbev",
      "target_id": "03528416",
      "target_name": "SAB Miller PLC",
      "value": "100000000000"
  },
  "2" : {
      "id" : "2",
      "acquirer_name": "Royal Dutch Shell",
      "target_id": "03690065",
      "target_name": "BG Group Ltd",
      "value": "47000000000"
  },
  "3" : {
      "id" : "3",
      "acquirer_name": "Comcast Corp",
      "target_id": "02247735",
      "target_name": "Sky PLC",
      "value": "38000000000"
  },
  "4" : {
      "id" : "4",
      "acquirer_name": "Softbank Corp",
      "target_id": "02548782",
      "target_name": "ARM Holidings PLC",
      "value": "24000000000"
  },
  "5" : {
      "id" : "5",
      "acquirer_name": "BT Group",
      "target_id": "02382161",
      "target_name": "EE Limited",
      "value": "13000000000"
  },
  "6" : {
      "id" : "6",
      "acquirer_name": "GKN PLC",
      "target_id": "04191106",
      "target_name": "Melrose Industries PLC",
      "value": "10000000000"
  },
  "7" : {
      "id" : "7",
      "acquirer_name": "Vantiv Inc",
      "target_id": "08762327",
      "target_name": "Worldpay Group PLC",
      "value": "9900000000"
  },
  "8" : {
      "id" : "8",
      "acquirer_name": "Phoenix Group",
      "target_id": "SC286833",
      "target_name": "Standard Life Asssurance",
      "value": "8200000000"
  },
  "9" : {
      "id" : "9",
      "acquirer_name": "August Equity",
      "target_id": "06489716",
      "target_name": "BetFair Group PLC",
      "value": "8100000000"
  },
  "10" : {
      "id" : "10",
      "acquirer_name": "Star Groups Inc",
      "target_id": "02247735",
      "target_name": "Sky Bet",
      "value": "2100000000",
      "partial": true
  },
  "11" : {
      "id" : "11",
      "acquirer_name": "Patron Capital",
      "target_id": "03752645",
      "target_name": "Punch Taverns PLC",
      "value": "1800000000"
  },
  "12": {
      "id" : "12",
      "acquirer_name": "Verisk Analytics",
      "target_id": "SC427101",
      "target_name": "Wood Mackenzie",
      "value": "1900000000"
  },
  "13": {
      "id" : "13",
      "acquirer_name": "CYBG",
      "target_id": "03087587",
      "target_name": "Virgin Money Holdings",
      "value": "1000000000"
  },
  "14": {
      "id" : "14",
      "acquirer_name": "Greene King PLC",
      "target_id": "00024511",
      "target_name": "Spirit Pub Company PLC",
      "value": "1600000000"
  },
  "15": {
      "id" : "15",
      "acquirer_name": "Generation investment",
      "target_id": "05435760",
      "target_name": "FNZ",
      "value": "1600000000"
  },
  "16": {
      "id" : "16",
      "acquirer_name": "Access Technology",
      "target_id": "03283704",
      "target_name": "VRD Group",
      "value": "unknown"
  },
  "17": {
      "id" : "17",
      "acquirer_name": "Chess Telecom",
      "target_id": "02839614",
      "target_name": "Avenir Telecom",
      "value": "4320000000"
  },
  "18": {
      "id" : "18",
      "acquirer_name": "Chess Telecom",
      "target_id": "04613699",
      "target_name": "Pinnacle CDT",
      "value": "2800000000"
  },
  "19": {
      "id" : "19",
      "acquirer_name": "Fairfax Financial",
      "target_id": "08821629",
      "target_name": "Brit PLC",
      "value": "1200000000"
  },
  "20": {
      "id" : "20",
      "acquirer_name": "Brother Industries",
      "target_id": "01363137",
      "target_name": "Domino Printing Services",
      "value": "1000000000"
  },
  "21": {
      "id" : "21",
      "acquirer_name": "Midlothian Capital Partners",
      "target_id": "SC010975",
      "target_name": "Dobbies Garden Centres",
      "value": "210000000"
  },
  "22": {
      "id" : "22",
      "acquirer_name": "Dave Whelan Sports Ltd",
      "target_id": "03207791",
      "target_name": "Fitness First Clubs",
      "value": "190000000"
  },
  "23": {
      "id" : "23",
      "acquirer_name": "Deutsche Post AG",
      "target_id": "02800218",
      "target_name": "UK Mail Group PLC",
      "value": "240000000"
  },
  "24": {
      "id" : "24",
      "acquirer_name": "Wesfarmers Ltd",
      "target_id": "04071533",
      "target_name": "Homebase Group Ltd",
      "value": "340000000"
  },
  "25": {
      "id" : "25",
      "acquirer_name": "RPC Group PLC",
      "target_id": "00108191",
      "target_name": "British Polythene Industries PLC",
      "value": "350000000"
  },
  "26": {
      "id" : "26",
      "acquirer_name": "Visa Inc",
      "target_id": "05139966",
      "target_name": "Visa Europe Ltd",
      "value": "11000000000"
  },
  "27": {
      "id" : "27",
      "acquirer_name": "Just Retirement Group",
      "target_id": "08419490",
      "target_name": "Partnership Assurance",
      "value": "3100000000"
  },
  "28": {
      "id" : "28",
      "acquirer_name": "AB Inbev",
      "target_id": "03528416",
      "target_name": "SAB Miller PLC",
      "value": "101000000"
  },
  "29": {
      "id" : "29",
      "acquirer_name": "Arris International PLC",
      "target_id": "01672847",
      "target_name": "Pace PLC",
      "value": "1400000000"
  },
  "30": {
      "id" : "30",
      "acquirer_name": "AMC Entertainment Inc",
      "target_id": "06170611",
      "target_name": "Odeon",
      "value": "1200000000"
  }
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getProjects() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...projects}), 1000)
  })
}

export function _getTransactions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...transactions}), 1000)
  })
}

function formatProject ({ user_id, project_name }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    project_name: project_name,
    user_id: user_id,
    transactions: []
  }
}

export function _saveProject ({ user_id, project_name }) {
  return new Promise((res, rej) => {
    const formattedProject = formatProject({ user_id, project_name })
    setTimeout(() => {
      projects = {
        ...projects,
        [formattedProject.id]: formattedProject
      }
      res(formattedProject)
    }, 1000)
  })
}

export function _saveRemoveTransaction ({ transaction_id, projectId}) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      projects = {
        ...projects,
        [projectId]: {
          ...projects[projectId],
          transactions: projects[projectId].transactions.filter((transactionsId) => {
            return transactionsId !== transaction_id
          })
        }
      }
      res(projects)
    }, 1000)
  })
}

export function _saveAddTransaction ({ transaction_id, projectId }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      projects = {
        ...projects,
        [projectId]: {
          ...projects[projectId],
          transactions: projects[projectId].transactions.concat([transaction_id])
        }
      }
      res(projects)
    }, 1000)
  })
}

