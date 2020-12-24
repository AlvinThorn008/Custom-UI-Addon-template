const serverSystem = server.registerSystem(0, 0);

// System Initalization
serverSystem.initialize = function () {
    // enabling debugging
    const scriptLoggerConfig = this.createEventData("minecraft:script_logger_config");

    scriptLoggerConfig.data.log_errors = true;
    scriptLoggerConfig.data.log_information = true;
    scriptLoggerConfig.data.log_warnings = true;
    this.broadcastEvent("minecraft:script_logger_config", scriptLoggerConfig);
};

// Runs 20 times a second. 
serverSystem.update = function () {};

// Utility for sending messages
serverSystem.sendMessage = function (message) {
    this.executeCommand(`/tellraw @a {"rawtext":[{"text":"${message}"}]}`, (cmd, data) => {
        this.commandLog(cmd, data);
    });
};