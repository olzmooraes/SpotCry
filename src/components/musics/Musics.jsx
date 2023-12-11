import { React, useEffect, useState } from 'react'
import { getMusicsFromUser } from '../../services/musics'
import { Loading } from '../loading/Loading'
import * as Style from './Style'
import logo from '../../assets/logoHeader.png'
import { AddCircleOutline } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { goToAddMusic } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { ThumbNail } from '../ThumbNail/ThumbNail'

export const Musics = () => {
  const [musics, setMusics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const navigate = useNavigate();

  useProtectedPage();

  const getMusics = async () => {
    try {
      setLoading(true);
      const response = await getMusicsFromUser();
      setMusics(response.data.songs);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar músicas:", error);
    }
  };

  useEffect(() => {
    getMusics();
  }, []);

  const addmusic = () => {
    goToAddMusic(navigate);
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const sortedMusics = [...musics].sort((a, b) => {
    if (sortColumn) {
      const columnA = a[sortColumn].toLowerCase();
      const columnB = b[sortColumn].toLowerCase();

      if (sortOrder === 'asc') {
        return columnA.localeCompare(columnB);
      } else {
        return columnB.localeCompare(columnA);
      }
    } else {
      return 0;
    }
  });

  const renderTableHeaders = () => {
    return (
      <Style.TableHeaders>
        <Style.TableHeader onClick={() => handleSort('title')}>
          Título {sortColumn === 'title' && sortOrder === 'asc' && '▲'}
          {sortColumn === 'title' && sortOrder === 'desc' && '▼'}
        </Style.TableHeader>
        <Style.TableHeader onClick={() => handleSort('artist')}>
          Artista {sortColumn === 'artist' && sortOrder === 'asc' && '▲'}
          {sortColumn === 'artist' && sortOrder === 'desc' && '▼'}
        </Style.TableHeader>
      </Style.TableHeaders>
    );
  };

    if (!loading) {
    return (
      <Style.AllSongs>
        <Style.Title>Músicas <AddCircleOutline onClick={addmusic} /> </Style.Title>
        {renderTableHeaders()}
        <Style.CardMusic>
          {Array.isArray(sortedMusics) &&
            sortedMusics.map((music, index) => (
              <Style.CardContainer key={music.id}>
                <ThumbNail url={music.url} name={music.title}/>
                <Style.CardInfo>
                  <Style.CardTitle>{music.title}</Style.CardTitle>
                  <Style.CardDescription>{music.artist}</Style.CardDescription>
                </Style.CardInfo>
                <Style.CardAdd>
                  <AddIcon />
                </Style.CardAdd>
              </Style.CardContainer>
            ))}
        </Style.CardMusic>
      </Style.AllSongs>
    );
  } else {
    return (
      <>
        <Style.Title>Songs <AddCircleOutline key={"circleAddMusic"} /> </Style.Title>
        <Loading />
      </>
    );
  }
};