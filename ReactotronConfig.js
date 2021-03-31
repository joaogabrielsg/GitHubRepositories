import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.configure({host: '192.168.0.24'})
  .useReactNative()
  .connect();

console.tron = Reactotron;

export default reactotron;
