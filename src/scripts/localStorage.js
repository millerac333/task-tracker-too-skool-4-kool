let saveDatabase = (localStorageKey, databaseObject) => {
    const stringData = JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, stringData)
}

module.exports = saveDatabase
