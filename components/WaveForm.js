import { useEffect, useRef } from "react";
// import WaveSurfer from "wavesurfer.js";
import dynamic from "next/dynamic";
const WaveSurfer = dynamic(() => import("wavesurfer.js").then(m => m.WaveSurfer), { ssr: false });
const WaveForm = () => {
  const waveform = useRef(null);
  useEffect(()=>{
   /*  waveform.current = WaveSurfer.create({
      container: document.querySelector('#waveform'),
      waveColor: '#D9DCFF',
      progressColor: '#4353FF',
      cursorColor: '#4353FF',
      barWidth: 3,
      barRadius: 3,
      cursorWidth: 1,
      height: 200,
      barGap: 3
    });
    wavesurfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3'); */
  })
  return (<>
    <div id="waveform" className='audio-waves' />
  </>);
}
export default WaveForm;