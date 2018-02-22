export default class {
  static getShortName (fullname) {
    if (!fullname) {
      return '?'
    }
    const fullnameSplit = fullname.split(' ')
    const nameLength = fullnameSplit.length
    if (nameLength === 1) {
      return fullnameSplit[0].charAt(0).toUpperCase()
    }
    return (fullnameSplit[0].charAt(0) + fullnameSplit[nameLength - 1].charAt(0)).toUpperCase()
  }
}
