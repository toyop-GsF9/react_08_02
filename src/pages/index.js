import Image from 'next/image'
import { Inter } from 'next/font/google'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className='text-5xl underline'>TOP画面</h1>



      <h2>React Slick Example</h2>
      <Slider {...settings}>
        <div>
          <h3>Slide 1</h3>
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3>Slide 3</h3>
        </div>
        {/* 他のスライドをここに追加 */}
      </Slider>
    </div>

  )
}



// const MySlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1
//   };

//   return (
//     <div>
//       <h2>React Slick Example</h2>
//       <Slider {...settings}>
//         <div>
//           <h3>Slide 1</h3>
//         </div>
//         <div>
//           <h3>Slide 2</h3>
//         </div>
//         <div>
//           <h3>Slide 3</h3>
//         </div>
//         {/* 他のスライドをここに追加 */}
//       </Slider>
//     </div>
//   );
// };


