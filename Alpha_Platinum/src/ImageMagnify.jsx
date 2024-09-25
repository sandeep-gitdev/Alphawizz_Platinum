import ReactImageMagnify from 'react-image-magnify';

const ImageMagnify = () => {
          
      return (
          <>
           <div style={{ width: '300px', margin: 'auto' }}>
            <ReactImageMagnify
                {...{
                    smallImage: {
                        alt: 'Rice',
                        isFluidWidth: true,
                        src: 'Rice.jpg', // Path to your small image
                    },
                    largeImage: {
                        src: 'Rice.jpg', // Path to your large image
                        width: 800,
                        height: 500,
                    },
                    enlargedImageContainerDimensions: {
                        width: '200%', // Adjust as needed
                        height: '200%', // Adjust as needed
                    },
                    enlargedImagePosition: 'over', // or 'beside'
                }}
            />
        </div>
          </>
      )

}

export default ImageMagnify