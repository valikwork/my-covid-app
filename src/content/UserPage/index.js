import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUserInfo } from '../../redux/actions/userActions'

export default function UserPage() {
    const dispatch = useDispatch()

    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        if(localStorage.getItem('covidapp-userID')){
            dispatch(getUserInfo())
                .then(data => setUserInfo(data))
        }
    }, [])

    return (
        <div>
            {userInfo}
        </div>
    )
}
