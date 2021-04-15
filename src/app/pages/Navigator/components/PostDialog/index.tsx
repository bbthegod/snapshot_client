/**
 *
 * PostDialog
 *
 */
import React, { useState, useCallback, useEffect } from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from 'utils/canvas';
import useStyles from './styles';
import closeIcon from '../../../../../images/close.svg';
import rotationIcon from '../../../../../images/rotation.svg';

interface Props {
  onClose: any;
  file: any;
  onPost: any;
}

export default function PostDialog(props: Props) {
  const { onClose, file, onPost } = props;
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [imageSrc, setImageSrc] = useState<any>();
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [caption, setCaption] = useState('');
  const classes = useStyles();
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  useEffect(() => {
    const onFileChange = async () => {
      if (file) {
        let imageDataUrl = await readFile(file);
        setImageSrc(imageDataUrl);
      }
    };
    onFileChange();
  }, [file]);
  function readFile(file) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }
  async function posting() {
    const croped = await getCroppedImg(imageSrc, croppedAreaPixels, rotation);
    onPost({ img: croped, caption });
    onClose();
  }
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.item}>
          <div className={classes.leftIcon} onClick={() => onClose()}>
            <img src={closeIcon} alt="close" className={classes.icon} />
          </div>
          <div className={classes.centerItem}>Bài viết mới</div>
          <div className={classes.rightIcon} onClick={() => posting()}>
            Đăng
          </div>
        </div>
        <img
          src={rotationIcon}
          alt="rotation"
          className={classes.rotation}
          onClick={() => {
            setRotation(rotation + 90);
          }}
        />
        <div className={classes.inputWrapper}>
          <textarea
            className={classes.input}
            placeholder="Viết chú thích..."
            value={caption}
            onChange={e => setCaption(e.target.value)}
          />
        </div>
        <Cropper
          image={imageSrc}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          aspect={1}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          style={{
            containerStyle: {
              width: 400,
              height: 400,
              position: 'sticky',
              top: 'initial',
              left: 'initial',
              bottom: 'initial',
              right: 'initial',
            },
            mediaStyle: {
              transform: 'none',
            },
          }}
        />
      </div>
    </div>
  );
}
