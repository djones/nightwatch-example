
const PercyAgent = require('@percy/agent').default;

module.exports.command = function(name, options) {
  this
    .injectScript('http://localhost:5338/percy-agent.js')
    .pause(500)
    .execute(
      function(name, options) {
        var percyAgentClient = new PercyAgent({
          clientInfo: 'community-nightwatchjs/0.1.0',
        });
    
        percyAgentClient.snapshot(name, options);
      }, [name, options]
    );

  return this;
};
