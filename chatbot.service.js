export class ChatbotEngine {
    constructor(flow) {
        this.history = [];
        this.userData = {};
        this.flow = flow;
        this.currentStepId = 'start';
    }
    getCurrentStep() {
        const step = this.flow[this.currentStepId];
        if (this.currentStepId === 'pusaka_estate_check_status') {
            this.goToStep('retrieve_page1');
        }
        // Replace placeholders like {name}
        const parsedMessage = step.message.replace(/\{(\w+)\}/g, (_, key) => this.userData[key] || '');
        return Object.assign(Object.assign({}, step), { message: parsedMessage });
    }
    receiveUserInput(input) {
        if (this.currentStepId === 'start') {
            // Save user's name
            this.userData['name'] = input;
            this.goToStep('greet');
        }
        switch (this.currentStepId) {
            case 'retrieve_page1':
                this.userData['name'] = input;
                this.goToStep('retrieve_page1_nric');
                break;
            case 'retrieve_page1_nric':
                this.userData['nric'] = input;
                this.goToStep('retrieve_page1_contact');
                break;
            case 'retrieve_page1_contact':
                this.userData['contact'] = input;
                this.goToStep('retrieve_page1_done');
                break;
            case 'retrieve_page1_my':
                this.userData['name'] = input;
                this.goToStep('retrieve_page1_nric_my');
                break;
            case 'retrieve_page1_nric_my':
                this.userData['nric'] = input;
                this.goToStep('retrieve_page1_contact_my');
                break;
            case 'retrieve_page1_contact_my':
                this.userData['contact'] = input;
                this.goToStep('retrieve_page1_done_my');
                break;
            default:
                break;
        }
    }
    goToStep(stepId) {
        this.history.push(this.currentStepId);
        this.currentStepId = stepId;
    }
    selectOption(index) {
        const step = this.getCurrentStep();
        const selected = step.options[index];
        if (selected) {
            this.goToStep(selected.nextStep);
        }
    }
    setUserData(key, value) {
        this.userData[key] = value;
    }
    goBack() {
        if (this.history.length > 1) {
            this.currentStepId = this.history.pop();
        }
    }
    restart() {
        this.currentStepId = 'start';
        this.history = [];
        this.userData = {};
    }
    getHistory() {
        return this.history;
    }
    getUserData() {
        return this.userData;
    }
}
