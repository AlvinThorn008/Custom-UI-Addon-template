const clientSystem = client.registerSystem(0, 0);

clientSystem.initialize = function () {
    // enabling debugging
    const scriptLoggerConfig = this.createEventData("minecraft:script_logger_config");
    scriptLoggerConfig.data.log_errors = true;
    scriptLoggerConfig.data.log_information = true;
    scriptLoggerConfig.data.log_warnings = true;
    this.broadcastEvent("minecraft:script_logger_config", scriptLoggerConfig);
    this.listenForEvent("minecraft:client_entered_world", e => this.onClientEnteredWorld(e));
};

// Runs 20 times a second
clientSystem.update = function () {};

// Utility function
/**
 * @param {string} message 
 */
clientSystem.sendMessage = function (message) {
    const messageData = this.createEventData("minecraft:display_chat_event");
    messageData.data.message = message;
    this.broadcastEvent("minecraft:display_chat_event", messageData);
};

// Executed when the client enters the world. See Line 10.
clientSystem.onClientEnteredWorld = function (e) {
    this.sendMessage("A player has entered the world");

    // Loading UI
    let uiEventData = this.createEventData("minecraft:load_ui");
    uiEventData.data.path = "views/index.html";
    uiEventData.data.options = {
        absorbs_input: true,
        render_game_behind: true,
        always_accepts_input: true,
        force_render_below: false,
        is_showing_menu: false,
        render_only_when_topmost: false,
        should_steal_mouse: true
    }
    this.broadcastEvent("minecraft:load_ui", uiEventData);
};