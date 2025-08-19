import { chatbotFlow } from '../components/chatbot.flow.js'
import { ChatbotEngine } from '../services/chatbot.service.js'

const chatbot = new ChatbotEngine(chatbotFlow)
const chatBox = document.getElementById('chat') as HTMLElement
const inputBox = document.getElementById('userInput') as HTMLInputElement

let expectingName = true

function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight
}

function displayMessage(message: string, className: string = 'bot-message') {
    const div = document.createElement('div');
    div.className = className;
    div.innerHTML = message;
    chatBox.appendChild(div);
    scrollToBottom()
}

function displayOptions(options: { label: string; nextStep: string }[]) {
    options.forEach(opt => {
        displayMessage(opt.label)
    })

    if (chatbot.getHistory().length > 0) {
        displayMessage('9️⃣ One Level Up')
    }

    displayMessage('0️⃣ Start Over')
}

function displayStep() {
    const step = chatbot.getCurrentStep()
    if (!step) return

    const messageWithName = step.message.replace('{name}', chatbot.getUserData().name || '')
    displayMessage(messageWithName)

    if (step.options?.length) {
        displayOptions(step.options)
    }
}

function handleInput() {
    const input = inputBox.value.trim()
    inputBox.value = ''

    if (!input) return

    displayMessage(input, 'user-message')

    if (input === '0') {
        chatbot.restart()
        expectingName = true
        displayStep()
        return
    }

    if (input === '9') {
        chatbot.goBack()
        displayStep()
        return
    }

    if (expectingName) {
        chatbot.setUserData('name', input)
        chatbot.goToStep('greet')
        expectingName = false
        displayStep()
        return
    }

    const step = chatbot.getCurrentStep()

    if (step.expectsInput) {
        chatbot.receiveUserInput(input)
        displayStep()
        return
    }

    if (!step.options?.length) {
        displayMessage("✅ Thank you! Conversation complete.")
        return
    }

    const selectedIndex = parseInt(input)
    if (isNaN(selectedIndex) || selectedIndex < 1 || selectedIndex > step.options.length) {
        displayMessage('❌ Please enter a valid number.')
        displayStep()
        return
    }

    const nextStep = step.options[selectedIndex - 1].nextStep
    chatbot.goToStep(nextStep)
    displayStep()
}


// Listen for Enter key
inputBox?.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
        handleInput()
    }
})

// Initial bot message
displayStep()
