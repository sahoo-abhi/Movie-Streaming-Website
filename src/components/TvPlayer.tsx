import { useParams } from 'react-router'

const TvPlayer = () => {
    const {player1Id} = useParams();
    const tvUrl = `https://vidsrc.xyz/embed/tv/${player1Id}`
  return (
    <div>
         <iframe className="w-full h-screen"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture "
        allowFullScreen
        src={tvUrl} >
            
        </iframe>
    </div>
  )
}

export default TvPlayer