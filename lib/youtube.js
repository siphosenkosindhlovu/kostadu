export default async function getYouTubeVideos(){

  const API_KEY = process.env.YOUTUBE_KEY;
  const playlistId = 'UUqldLtVWPYc4loYELtAacGA'
  const baseUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=6&key=${API_KEY}`

  const results = await fetch(baseUrl)

  return await results.json()

}