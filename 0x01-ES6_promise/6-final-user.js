import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfilesSignup(firstname, lastname, filename) {
    return Promise
    .allSettled([signUpUser(firstname, lastname), uploadPhoto(filename)])
    .then((res) => (
        res.map((0) => ({
            status: onabort.status,
            value: onabort.status === 'fulfiled' ? onabort.value : String(o.reason),
        }))
    ));
}