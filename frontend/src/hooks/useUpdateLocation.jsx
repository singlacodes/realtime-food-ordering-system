import axios from 'axios'
import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import {  setCurrentAddress, setCurrentCity, setCurrentState, setUserData } from '../redux/userSlice'
import { setAddress, setLocation } from '../redux/mapSlice'

function useUpdateLocation() {
    const dispatch=useDispatch()
    const {userData}=useSelector(state=>state.user)
 
    useEffect(()=>{
const updateLocation=async (lat,lon) => {
    try {
        const result=await axios.post(`${serverUrl}/api/user/update-location`,{lat,lon},{withCredentials:true})
    } catch (error) {
        console.error('Error updating location:', error)
    }
}

let watchId
if(navigator.geolocation) {
    watchId = navigator.geolocation.watchPosition(
        (pos)=>{
            updateLocation(pos.coords.latitude,pos.coords.longitude)
        },
        (error)=>{
            console.error('Geolocation error:', error.message)
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
    )
} else {
    console.error('Geolocation is not supported by this browser.')
}

return ()=>{
    if(watchId) navigator.geolocation.clearWatch(watchId)
}
    },[userData])
}

export default useUpdateLocation
