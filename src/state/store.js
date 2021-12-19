import { createStore, action } from "easy-peasy"

const model = {
  serverAddress: "http://127.0.0.1:8000",

  dbName: "ShopLavender",
  setDbName: action((state, newDbName) => {
    state.dbName = newDbName
  }),
  
  tableNames: [],
  
  selectedTableName: "",
  setSelectedTableName: action((state, newSelection) => {
    state.selectedTableName = newSelection
  }),

  tableColumns: [
    {
      "name": "Columnn A",
      "type": "unknown",
    },
    {
      "name": "Columnn B",
      "type": "unknown",
    },
    {
      "name": "Columnn C",
      "type": "unknown",
    }
  ],
  setTableColumns: action((state, newColumns) => {
    state.tableColumns = newColumns
  })
}

const store = createStore(model)

export default store