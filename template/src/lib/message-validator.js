const AsyncApiValidator = require('asyncapi-validator');

// Try to parse the payload, and increment nValidated if parsing was successful.
module.exports.validateMessage = async (payload, channelName, messageName, operation, nValidated=0) => {
  try {
    const va = await AsyncApiValidator.fromSource('./asyncapi.yaml', {msgIdentifier: 'name'});
    va.validate(messageName, payload, channelName, operation);
    nValidated++;
  } catch (e) {
    return nValidated;
  }
  return nValidated;
};
