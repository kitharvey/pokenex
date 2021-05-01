import { useAppSelector } from "@lib/reduxHooks"
import { signOut } from "next-auth/client"
import Image from "next/image"
import { useState } from "react"
import { IoClose } from "react-icons/io5"
import { deleteUser } from "@helpers/getUsers"

const ProfilePage = () => {
  const { userData } = useAppSelector((state) => state.user)
  const [confirm, setConfirm] = useState(false)

  const handleDelete = async () => {
    if (userData) {
      deleteUser(userData._id)
      signOut()
    }
  }

  return (
    <div className="profile">
      {userData && (
        <div>
          <div>
            <Image
              className="avatar"
              src={userData.picture}
              alt={userData.name}
              width={60}
              height={60}
              quality={80}
              priority
            />
            <p>{userData.name}</p>
          </div>

          <button type="button" onClick={() => setConfirm(true)} className="delete-button">
            Delete Account
          </button>
        </div>
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
              <button
                type="button"
                className="black-button"
                onClick={() => setConfirm(false)}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfilePage
