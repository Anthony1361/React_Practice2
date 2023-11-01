import React from "react";

// This is step one, Creating the user context .../
// Default value by choice could be added which is codevolution and comment out the UserProvider at App.js, u will see codevolution displayed at the browser../
const UserContext = React.createContext('codevolution')

const UserProvider = UserContext.Provider
const UserConsumer= UserContext.Consumer

export {UserProvider, UserConsumer}

// Not necessary just for another option .., move to ComponentE//
export default UserContext