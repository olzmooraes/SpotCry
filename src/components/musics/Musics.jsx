import { React, useEffect, useState } from 'react'
import { getMusicsFromUser } from '../../services/musics'
import { Loading } from '../loading/Loading'
import * as Style from './Style'
import logo from '../../assets/logoHeader.png'
import { AddCircleOutline } from '@mui/icons-material';
import { goToAddMusic } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'

export const Musics = () => {
  const [musics, setMusics] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useProtectedPage()

  const getMusics = async () => {
    try {
      setLoading(true)
      const response = await getMusicsFromUser();
      setMusics(response.data.songs);
      setLoading(false)
    } catch (error) {
      console.error("Erro ao buscar musics:", error);
    }
  }
  useEffect(() => {
    getMusics();
  }, []);
  const addmusic = () => {
    goToAddMusic(navigate);
  }
  if (!loading) {
    return (
      <div>
        <Style.Title>Songs <AddCircleOutline onClick={addmusic}/> </Style.Title>
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
        <Style.Title>Songs <AddCircleOutline key={"circleAddMusic"}/> </Style.Title>
        <Loading />
      </>
    )
  }
}

