import { React, useEffect, useState } from 'react'
import { getMusicsFromUser } from '../../services/musics'
import { Loading } from '../loading/Loading'
import * as Style from './Style'
import logo from '../../assets/logoHeader.png'

export const Musics = () => {
  const [musics, setMusics] = useState([])
  const [loading, setLoading] = useState(true)

  const getMusics = async () => {
    try {
      const response = await getMusicsFromUser();
      console.log(response);
      setMusics(response.data.songs);
      setLoading(false)
    } catch (error) {
      console.error("Erro ao buscar musics:", error);
      setLoading(false)
    }
  }
  useEffect(() => {
    getMusics();
  }, []);
  if (!loading) {
    return (
      <div>
        <Style.Title>My Songs</Style.Title>
        <Style.CardMusic>
            {Array.isArray(musics) &&
              musics.map((musics, index) => (
                <Style.CardContainer key={musics.id}>
                  <Style.CardImage src={logo} alt="logo" />
                  <Style.CardInfo>
                    <Style.CardTitle>{musics.title}</Style.CardTitle>
                    <Style.CardDescription>{musics.artist}</Style.CardDescription>
                  </Style.CardInfo>
                </Style.CardContainer>
              ))}
        </Style.CardMusic>
      </div>
    )
  } else {
    return (
      <>
        <Loading />
      </>
    )
  }
}

