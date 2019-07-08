export default function (device = {}, action) {
  if(action.type === 'updateDevice') {
    let deviceCopy = {
      ...device,
      id: action.id,
      location: action.location,
      manufacturer: action.manufacturer,
      manufactureDate: action.manufactureDate,
      expiredDate: action.expiredDate,
    }
      return deviceCopy;
    } else {
      return device;
    }
};
