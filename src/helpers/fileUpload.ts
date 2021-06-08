export const fileUpload = async (file) => {
    
    const cloudUrl = 'https://api.cloudinary.com/v1_1/swaggyp/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try{

        const res = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });
        
        if(res.ok){
            const cloudRes = await res.json();
            return cloudRes.secure_url;
        } else{
            return null;
        }
        
    } catch(e){
        throw(e)
    }

}
