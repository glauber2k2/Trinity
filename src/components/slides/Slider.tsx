import Image from 'next/image';
import styles from './Slider.module.css';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function Slider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className={`${'keen-slider'} ${styles.container}`}>
        <div className='keen-slider__slide number-slide1'>
          <Image
            src='/images/carousel/project1.jpg'
            width={1280}
            height={1280}
            alt=''
          />
        </div>
        <div className='keen-slider__slide number-slide2'>
          <Image
            src='/images/carousel/project2.jpg'
            width={1280}
            height={1280}
            alt=''
          />
        </div>
        <div className='keen-slider__slide number-slide3'>
          <Image
            src='/images/carousel/project3.jpg'
            width={1280}
            height={1280}
            alt=''
          />
        </div>
      </div>
    </>
  );
}
