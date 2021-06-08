import cloudinary from 'cloudinary'
import { fileUpload } from "../../helpers/fileUpload";


cloudinary.config({ 
  cloud_name: 'swaggyp', 
  api_key: '994676733563621', 
  api_secret: 'GnJzKP1fC5YardWGQliGt5MYeE4' 
});

describe('tests in fileUpload', () => {
    

    test('should load a file and return url', async() => {
        
        const img = await fetch('https://pbs.twimg.com/profile_images/598915526321143808/FU7wYEwD_400x400.jpg')
        const blob = await img.blob();
        
        const file = new File([blob], 'foto.jpg') 
        const url = await fileUpload(file);

        expect( typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '')

        await cloudinary.v2.api.delete_resources(imageId, {}, () => {
            console.log('');
        });
    })

    test('should return error', async() => {
                
        const file = new File([], 'foto.jpg') 
        const url = await fileUpload(file);
        expect( url ).toBe(null)
    })
    

})
