
import CommandState from "./CommandState.js";

export default class BaseCommand {
    constructor(phaserApp, highlightCallback) {
        this.PhaserApp = phaserApp;
        this.Game = phaserApp.game;
        this.HighlightCallback = highlightCallback;
        this.state = CommandState.NOT_STARTED;
    }

    tick() {
    }
    
    begin() {
        if (this.HighlightCallback != null) {
            this.HighlightCallback();
        }
        this.state = CommandState.WORKING;
    }

    /**
     * Whether the command has started working.
     * @returns {boolean}
     */
    isStarted() {
        return this.state != CommandState.NOT_STARTED;
    }

    /**
     * Whether the command has succeeded or failed, and is
     * finished with its work.
     * @returns {boolean}
     */
    isFinished() {
        return this.isSucceeded() || this.isFailed();
    }
    
    /**
     * Whether the command has finished with its work and reported success.
     * @returns {boolean}
     */
   isSucceeded() {
        return (this.state === CommandState.SUCCESS);
    }

    /**
     * Whether the command has finished with its work and reported failure.
     * @returns {boolean}
     */
   isFailed() {
        return this.state === CommandState.FAILURE;
   }

   succeeded() {
       this.state = CommandState.SUCCESS;
   }
    
   failed() {
       this.state = CommandState.FAILURE;
   }
}

