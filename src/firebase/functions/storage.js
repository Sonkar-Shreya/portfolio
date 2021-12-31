/*
import app from '../index'
import {
    ref,
    getStorage,
    uploadBytesResumable,
    getDownloadURL
} from 'firebase/storage'
import { 
    images, 
    messages 
} from '../../constants'
import { 
    ErrToast, 
    setSessionStorage, 
    SuccessToast 
} from '../../utils/Common'
import { 
    pushStudentDetails, 
    registerStudent 
} from './signIn'

const storage = getStorage()

export const uploadFile = (file, setProgress = () => { }, values, setIsLoading, succeess) => {
    const storageRef = ref(storage, `/profileimage/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on('state_changed', (snapshot) => {
        const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setProgress(progress)
        // console.log('progress', progress)
    }, err => {
        // console.log('error while uploading', err)
        ErrToast(messages.error.uploadingPic)
        setIsLoading(0)
    },
        () => {
            SuccessToast(messages.success.uploadingPic)
            getDownloadURL(uploadTask.snapshot.ref)
                .then(url => {
                    // console.log('url', url)
                    values.profilePic = url
                    // console.log('user details', values)
                    registerStudent(values).then((userRecord) => {
                        // console.log('Successfully created new user:', userRecord.user);
                        pushStudentDetails(values, userRecord.user.uid)
                        setIsLoading(0)
                        setSessionStorage(userRecord.user.accessToken, values.email, userRecord.user.uid)
                        succeess()
                    }).catch((error) => {
                        // console.log('Error creating new user:', error);
                        ErrToast(messages.error.creatingNewUser)
                        setIsLoading(0)
                    });
                })
        }
    )
} 

export const directRegister = (values, setIsLoading, success) => {
    // console.log('direct register called', values)
    registerStudent(values).then((userRecord) => {
        // console.log('Successfully created new user:', userRecord.user);
        values.profilePic = images.profile
        pushStudentDetails(values, userRecord.user.uid)
        setIsLoading(0)
        setSessionStorage(userRecord.user.accessToken, values.email, userRecord.user.uid)
        success()
    }).catch((error) => {
        // console.log('Error creating new user:', error);
        if(error.code === 'auth/email-already-in-use')
            ErrToast(messages.error.emailUsed)
        else 
            ErrToast(messages.error.creatingNewUser)
        setIsLoading(0)
    });
}
*/
