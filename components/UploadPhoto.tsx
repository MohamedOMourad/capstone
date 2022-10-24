import { supabase } from '../lib/supabase';

const UploadPhoto = ({ setImg, img, setLoading, setCounter }:
  { setImg: Function, img: string[], setLoading: Function, setCounter: Function }) => {
  const handleUpload = async (event: any) => {
    setLoading(true)
    setCounter((counter: number) => counter + 1)
    const avatarFile = event.target.files[0]
    const { data, error } = await supabase.storage
      .from('img')
      .upload(`${Date.now()}`, avatarFile as File);
    if (data) {
      const { data: url } = await supabase.storage
        .from('img')
        .getPublicUrl(`${data?.path}`)
      setImg([...img, url.publicUrl])
      setLoading(false)
    } else if (error) {
      console.log(error);
    }
  }
  return (
    <div className="rounded-lg shadow-xl bg-gray-50 ">
      <div className="m-4">
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
            <div className="flex flex-col items-center justify-center pt-7">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                fill="currentColor">
                <path fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd" />
              </svg>
              <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                Select a photo</p>
            </div>
            <input
              onChange={handleUpload}
              type="file" className="opacity-0" />
          </label>
        </div>
      </div>
    </div>
  )
}

export default UploadPhoto;
