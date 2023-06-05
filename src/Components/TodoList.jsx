import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const PERSON_KEY ='PersonKey'
export const TodoList = () => {

  const [todos, setTodos] = useState([]);
  const [friends, setFriends] = useState([]);
  const refInput = useRef("");
  const navigate = useNavigate();
  
  // Set up the proper usage of useQuery hook
  const usersQuery = useQuery('/', async() => await axios.get());

  useEffect(() => {
    // Load todos (if any) from localStorage

    localStorage.setItem(PERSON_KEY, JSON.stringify(todos))
    // parse through the stored to-do's and set them in state
    
  }, []);

  useEffect(() => {
    // Save todos to localStorage
    
  }, [todos]);

  const handleAddTodo = () => {
      // access the input and update the state variable "todos"
  };


  const handleFetchFriends = async () => {
    // refetch your implementation of the useQuery hook
    await usersQuery.refetch();
    
    // extract data into a new array and extract only the names from this array of objects
    
    
    //setFriends(friendsNamesArray);
  }

  const handleDeleteTodo = (index) => {
    // filter out the todo that was deleted from the array - hint: keep the rest of the todos in an array

    // update todos array
  };
  
  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.clear(PERSON_KEY, JSON.stringify(todos))
    // route user back to sign in page
    navigate("/")
        // Store token in localStorage
      
        
      

    
  };

  return (
    <div>
      <input
        type="text"
      />
      <button onClick={handleAddTodo}>Add to your list</button>
      <h3>To do:</h3>
      <input></input>
      <button id="todo-item">Add</button>

      <ul id="todo-list">
        {/* Use map to return the todos here :) */}
      </ul>
      <button id="get-friends-btn" onClick={handleFetchFriends}>Get friends list</button>
      <h3>Your active friends: </h3>
      <ul id="friends-list">
        {friends?.map((friend, index) => {
          return(
            <li key={index}>
              {friend}
            </li>
          )
        })}
      </ul>
      <button id="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
