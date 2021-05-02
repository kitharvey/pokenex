import React from "react"
import { UserFavoritesProps } from "@interfaces/Interfaces"
import Image from "next/image"
import { findColor, getTypeIcon } from "@helpers/getTypeIconsAndColor"
import { getStringIDfromID } from "@helpers/GlobalFunctions"
import { useAppDispatch, useAppSelector } from "@lib/reduxHooks"
import { updateFavorites } from "@lib/userSlice"
import { FaInfoCircle, FaRegStar, FaStar } from "react-icons/fa"
import { useSession } from "next-auth/client"
import { useRouter } from "next/router"

export interface CardProps {
  pokemon: UserFavoritesProps
}

const Card: React.FC<CardProps> = ({ pokemon }) => {
  const { id, types, sprite, name } = pokemon
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [session] = useSession()
  const { userData } = useAppSelector((state) => state.user)
  return (
    <div className="card-container">
      <div
        className="card"
        style={{
          background: `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${
            findColor(types[0])[1]
          } 100%)`,
        }}
      >
        {session && !router.query.uid && (
          <button
            className="star-wrapper"
            type="button"
            onClick={() => dispatch(updateFavorites({ id, name, types, sprite }))}
          >
            {userData && userData.favorites.filter((fav) => fav.id === id).length > 0 ? (
              <p className="icon-wrapper">
                <FaStar color="#ffc300" />
                <span className="tooltip">remove from favorites</span>
              </p>
            ) : (
              <p className="icon-wrapper">
                <FaRegStar />
                <span className="tooltip">add to favorites</span>
              </p>
            )}
          </button>
        )}

        {!router.query.pid && (
          <button
            className="info-wrapper"
            type="button"
            onClick={() => router.push(`/pokemon/${id}`)}
          >
            <p className="icon-wrapper">
              <FaInfoCircle />
              <span className="tooltip">view more info</span>
            </p>
          </button>
        )}

        <p className="id-number">#{getStringIDfromID(id)}</p>
        <Image src={sprite} alt={name} width={260} height={260} quality={50} priority />
        <div className="types-container">
          {types.map((type) => (
            <img
              src={getTypeIcon(type)[1]}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                margin: types.length > 1 ? "-2.5px" : "0",
              }}
              key={type}
              alt={getTypeIcon(type)[0]}
            />
          ))}
        </div>
        <p className="name">{name}</p>
      </div>
    </div>
  )
}

export default Card
