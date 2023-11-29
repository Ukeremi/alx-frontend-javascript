import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

<<<<<<< HEAD
export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((o) => ({
        status: o.status,
        value: o.status === 'fulfilled' ? o.value : String(o.reason),
      }))
    ));
}
=======
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
>>>>>>> f9baf3573d8d9d01989e07da53784f793624255c
