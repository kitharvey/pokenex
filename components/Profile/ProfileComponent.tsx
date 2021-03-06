import { deleteUser } from "@helpers/getUsers"
import { UserProps } from "@interfaces/Interfaces"
import { signOut } from "next-auth/client"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { IoClose } from "react-icons/io5"
import Favorites from "./Favorites"

interface ProfileComponentProps {
  userData: UserProps
}

const ProfileComponent: React.FC<ProfileComponentProps> = ({ userData }) => {
  const [confirm, setConfirm] = useState(false)
  const router = useRouter()

  const handleDelete = () => {
    if (userData) {
      deleteUser(userData._id)
      signOut()
    }
  }

  const handleSignOut = () => {
    signOut()
    router.push("/")
  }
  return (
    <div className="profile-wrapper">
      <div className="profile">
        <div className="profile-card">
          <div className="avatar">
            <Image
              src={userData.picture}
              alt={userData.name}
              width={100}
              height={100}
              quality={80}
              priority
            />
          </div>

          <p className="name">{userData.name}</p>
          <p className="score">High score: {userData.score}</p>
        </div>

        {!router.query.uid && (
          <div className="button-wrapper">
            <button type="button" onClick={handleSignOut} className="black-button">
              Sign Out
            </button>
            <button type="button" onClick={() => setConfirm(true)} className="delete-button">
              Delete Account
            </button>
          </div>
        )}
      </div>
      {userData.favorites.length > 0 ? (
        <Favorites favorites={userData.favorites} />
      ) : (
        <p>No Favorites</p>
      )}
      {confirm && (
        <div className="modal">
          <div className="wrapper">
            <h1 className="close-modal">
              <IoClose onClick={() => setConfirm(false)} />
            </h1>
            <h3 className="">Confirm Deletion</h3>
            <p className="">
              Are you sure you want to delete this account? You will not able to revert this
              process.
            </p>
            <div className="buttons-wrapper">
              <button type="button" className="delete-button" onClick={handleDelete}>
                confirm
              </button>
              <button type="button" className="black-button" onClick={() => setConfirm(false)}>
                cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileComponent
