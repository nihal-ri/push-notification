import OneSignal from 'react-onesignal';

export default async function runOneSignal() {
    await OneSignal.init({ appId: `${process.env.REACT_APP_ONESIGNAL_API_KEY}` });
    OneSignal.showSlidedownPrompt();
}