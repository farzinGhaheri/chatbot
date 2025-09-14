import { BotFlow } from '../models/chatbot';

export const chatbotFlow: BotFlow = {
    start: {
        id: 'start',
        message: `Salam sejahtera, saya ARIA. Boleh saya tahu nama anda?\n\n Hi, I’m ARIA. May I know your name?`,
        options: [],
    },
    greet: {
        id: 'greet',
        message: `**{name}**, selesa berinteraksi dalam Bahasa Malaysia atau English?\n\n are you more comfortable communicating in Bahasa Malaysia or English?`,
        options: [
            { label: '1️⃣ Bahasa Malaysia', nextStep: 'bahasa_melayu' },
            { label: '2️⃣ English', nextStep: 'english_main' },
        ],
    },
    english_main: {
        id: 'english_main',
        message: 'Is **{name}** our existing customer?',
        options: [
            { label: '1️⃣ No, I would like to make an inquiry', nextStep: 'no_page1' },
            { label: '2️⃣ Yes, I already have a registered file with ARB.', nextStep: 'yes_page1' },
            { label: '3️⃣ I would like to know about promotion', nextStep: 'i_would_like' },
        ]
    },
    no_page1: {
        id: 'no_page1',
        message: 'What can ARIA assist **{name}** with?',
        options: [
            { label: "1️⃣ I would like to administer the deceased's estate", nextStep: 'pusaka' },
            { label: '2️⃣ I would like to allocate my assets according to my wishes', nextStep: 'allocate_page1' },
            { label: "3️⃣ I would like to pay the beneficiary's /deceased's share to ARB", nextStep: 'pay_page1' },
            { label: "4️⃣ I would like to retrieve my unclaimed portion at ARB", nextStep: 'retrieve_page1' },
            { label: "5️⃣ I have an order from the Land Office / High Court", nextStep: 'order_page1' },
            { label: "6️⃣ I would like to know about the establishment of rightful beneficiaries", nextStep: 'establishment_rightful_beneficiaries' }

        ]
    },
    // these below steps are belong to page 1
    pusaka: {
        id: 'pusaka',
        message: `May ARIA know what **{name}** would like to inquire about?`,
        options: [
            { label: '1️⃣ Estate application for vehicles only', nextStep: 'estate_application_vehicle' },
            { label: '2️⃣ Estate application', nextStep: 'estate_application' },
            { label: '3️⃣ General inquiry', nextStep: 'general_inquiry' }, // this needs to discuss with Sanjay
            { label: '4️⃣ Obtain form', nextStep: 'obtain_form' }
        ]
    },
    i_would_like: {
        id: 'i_would_like',
        message: `[Promotion](https://drive.google.com/file/d/1fw8S2Mvia-Lc4-U7KMtzhxEDEPF-teXV/view)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    allocate_page1: {
        id: 'allocate_page1',
        message: 'Does **{name}** intend to give it as a trust, hibah or will wasiat?',
        options: [
            { label: '1️⃣ During lifetime ', nextStep: 'during_lifeitime' },
            { label: '2️⃣ After Death', nextStep: 'after_death' }
        ]
    },
    during_lifeitime: {
        id: 'during_lifeitime',
        message: 'Please choose',
        options: [
            {
                label: '1️⃣ Hibah', nextStep: 'hibah'
            },
            {
                label: '2️⃣ Trust', nextStep: 'amanah_eng'
            },
        ]
    },
    after_death: {
        id: 'after_death',
        message: 'Please choose',
        options: [
            {
                label: '1️⃣ Will', nextStep: 'will'
            },
            {
                label: '2️⃣ HibahKu', nextStep: 'hibah_ku'
            },
        ]
    },
    pay_page1: {
        id: 'pay_page1',
        message: `Whose share does **{name}** intend to pay for?`,
        options: [
            {
                label: `1️⃣ Minor / Disabled (OKU) beneficiary`, nextStep: 'minor_disabled'
            },
            {
                label: `2️⃣ Untraceable / Uncooperative Beneficiary (Redeem Share)`, nextStep: 'untraceable'
            },
            {
                label: `3️⃣ Deceased’s Share (Compensation)`, nextStep: 'compensation'
            },
            {
                label: `4️⃣ Deceased’s Share (Other than compensation)`, nextStep: 'other_than_compensation'
            }
        ]
    },
    minor_disabled: {
        id: 'minor_disabled',
        message: `Please attach the following documents:\n\n 1. 1 copy of the Deceased's Death Certificate\n 2. 1 copy of the Guardian's Identity Card\n 3. 1 copy of the Identity Card and Birth Certificate of the minor / disabled beneficiary (OKU)\n 4. Original order from the High Court / Land Office appointing ARB as trustee for the minor / disabled beneficiary (OKU)\n\n Please visit any of our nearest branch counters to make the payment by bringing along the required documents.\n Payment can be made by cash (limited to RM5,000), cheque, debit/credit card, or online transfer.\n\n **{name}** may [Schedule An Appointment](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)\n Branch information can be found [here](https://www.amanahraya.my/contact-us/branch-locator/)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: 'exit' },
        ]
    },
    untraceable: {
        id: 'untraceable',
        message: `Please attach the following documents:\n 1. 1 copy of the Deceased’s Death Certificate.\n 2. 1 copy of the Identity Card of the heir who is untraceable / uncooperative.\n 3. Letter / Order from the High Court / Land Office instructing payment to be made to ARB.\n Please visit any of our nearest branch counters to make the payment by bringing along the required documents.\n Payment can be made by cash (limited to RM5,000), cheque, debit/credit card, or online transfer.\n\n **{name}** may [Schedule An Appointment](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)\n Branch information can be found at: [Branch Information](https://www.amanahraya.my/contact-us/branch-locator/)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: 'exit' },
        ]
    },
    compensation: {
        id: 'compensation',
        message: `Please attach the following documents:\n 1. 1 copy of the Deceased’s Death Certificate\n 2. 1 copy of Form G and H (Notice of Award and Compensation Offer).\n Please submit the above documents to the email address crmd@arb.com.my. Payment information will be provided once the documents are received by **{name}**.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: 'exit' },
        ]
    },
    other_than_compensation: {
        id: 'other_than_compensation',
        message: `Please attach the following documents:\n 1. 1 copy of the Deceased’s Death Certificate\n 2. Payment notification letter regarding the Deceased’s share to ARB\n Please submit the above documents to the email address crmd@arb.com.my. Payment information will be provided once the documents are received by **{name}**.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: 'exit' },
        ]
    },
    retrieve_page1: {
        id: 'retrieve_page1',
        message: `Kindly provide your name.`,
        options: [],
        expectsInput: true
    },
    retrieve_page1_nric: {
        id: 'retrieve_page1_nric',
        message: `Thanks **{name}**. Now please provide your NRIC.`,
        options: [],
        expectsInput: true
    },
    retrieve_page1_contact: {
        id: 'retrieve_page1_contact',
        message: `Got it. Please provide your contact number.`,
        options: [],
        expectsInput: true
    },
    retrieve_page1_done: {
        id: 'retrieve_page1_done',
        message: `**{name}**, thank you. You will be contacted on the next working day.`,
        options: [{
            label: 'Thank you. Feel free to return anytime!', nextStep: ''
        }],
    },
    order_page1: {
        id: 'order_page1',
        message: 'What is the order about?',
        options: [
            {
                label: `1️⃣ ARB will act as Trustee for the minor/OKU (person with disabilities) beneficiary.`,
                nextStep: 'order_page1_details'
            },
            {
                label: `2️⃣ ARB is appointed as the Trustee for untraceable / uncooperative beneficiary`,
                nextStep: 'order_page1_details'
            }
        ]
    },
    order_page1_details: {
        id: 'order_page1_details',
        message: `Please provide the following documents:\n 1. 1 copy of the deceased’s Death Certificate.\n 2. 1 copy of the guardian’s Identification Card.\n 3. Copies of the Identification Card and Birth Certificate of the minor heir / person with disabilities (OKU).\n 4. Original order from the High Court / Land Office appointing ARB as the Trustee for the minor / OKU / untraceable /uncooperative beneficiary.\n Please visit any of our nearest branch counters with the required documents. **{name}** may also schedule an appointment at: [Appointment Form](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)\n You can find the nearest AmanahRaya branch here: [Branch Information](https://www.amanahraya.my/contact-us/branch-locator/)`,
        options: [
            {
                label: 'Thank you. Feel free to return anytime!', nextStep: ''
            }
        ]
    },
    yes_page1: {
        id: 'yes_page1',
        message: `Great! **{name}**, you are a valued customer to us.\n Please state your existing product with us.`,
        options: [
            { label: '1️⃣ Estate', nextStep: 'pusaka_estate' },
            { label: '2️⃣ Will', nextStep: 'will_one' },
            { label: '3️⃣ Trust', nextStep: 'amanah_eng' },
            { label: '4️⃣ Hibah', nextStep: 'retrieve_page1' },
            { label: '5️⃣ HibahKu', nextStep: 'retrieve_page1' },
        ]
    },
    // these below steps are belong to Pusaka
    estate_application_vehicle: {
        id: 'estate_application_vehicle',
        message: `The estate administration for this vehicle only applies to administration in Peninsular Malaysia. For administration in Sarawak or Sabah, **{name}** may click the estate application option above.\n For your information, estate administration is required for the transfer of ownership of the deceased’s vehicle. A Letter of Administration will be issued for this process.\n\n To **{name}**’s knowledge, has the deceased’s estate ever been administered before?`,
        options: [
            { label: '1️⃣ No, it has never been done before', nextStep: 'estate_no_1' },
            { label: '2️⃣ Yes, it has been done before', nextStep: 'estate_yes' }
        ]
    },

    estate_no_1: {
        id: 'estate_no_1',
        message: `Is there any remaining loan on the deceased’s vehicle?`,
        options: [
            { label: '1️⃣ No', nextStep: 'estate_no' },
            { label: '2️⃣ Yes', nextStep: 'estate_yes_1' }
        ]
    },
    estate_no: {
        id: 'estate_no',
        message: `The estate administration procedure can only be applied under the following conditions:\n 1. Land vehicles only.\n 2. Fully settled (no outstanding loan).\n 3. Total vehicle value must not exceed RM10,000.\n 4. Does not involve uncooperated / untraceable beneficiary.\n 5. Does not involve Baitulmal (for Muslims only).\n Does the deceased’s vehicle meet the stated criteria?`,
        options: [
            { label: '1️⃣ No', nextStep: 'estate_no_no' },
            { label: '2️⃣ Yes', nextStep: 'estate_no_yes' }
        ]
    },
    estate_no_no: {
        id: 'estate_no_no',
        message: `1. DECEASED (SIMATI)\n a. Original Death Certificate of the deceased & 1 copy.\n b. 1 copy of the Deceased’s Birth Certificate.\n c. Original Will of the deceased & 1 copy.\n d. 1 copy of Marriage/Divorce Certificate (if the deceased was married/divorced).\n\n 2. DECEASED'S BENEFICIARIES\n a. 1 copy of the Identity Card and Birth Certificate of the beneficiaries.\n b. 1 copy of Death Certificate (for any beneficiary who passed away before/after the deceased).\n\n 3. STATUTORY DECLARATION (PROVIDE ONLY IF RELEVANT)\n To be signed by an independent witness in front of a Commissioner for Oaths and stamped via the Inland Revenue Board (LHDN) website. A copy of the witness’s identity card must be included.\n a. Statutory Declaration of Single Status (if the deceased was unmarried).\n b. Statutory Declaration of No Children (if the deceased had no children).\n c. Statutory Declaration of Sole Beneficiary (if there is only one surviving beneficiary).\n\n 4. MOVABLE PROPERTY – VEHICLE a. New Grant – 1 copy of the vehicle grant (front page only) * Must include e-ownership search / proof of loan settlement / proof of cash purchase.\n b. Old Grant – 1 copy of the vehicle grant (front and back) * If ownership is still under claim and loan has been settled, include e-ownership search / proof of loan settlement.\n\n 5. MINIMUM DEPOSIT\n RM50\n\n 6. ADMINISTRATION PERIOD\n 4 months from the date of file opening\n\n 7. RELATED FORMS\n a. Application Form For Estate Administration.\n b. Document Checklist to be Attached.\n c. Statutory Declaration (Married / Divorced / No Children / Sole Beneficiary / Single).\n d. Sample – Estate Administration Application Form.\n e. Sample – Statutory Declaration (Married / Divorced / No Children / Sole Beneficiary / Single).\n\n An administration fee will be charged for the administration of the estate, as follows:\n 5% on the first RM25,000.\n 4% on the next RM225,000.\n 3% on the next RM250,000.\n 2% on the next RM500,000.\n 1% on the remaining balance.\n\n The completed form along with the required documents can be submitted to any of our nearest branches for the estate file opening process. **{name}** may schedule an appointment at [Appointment Form](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }

        ]
    },
    estate_no_yes: {
        id: 'estate_no_yes',
        message: `1. DECEASED (SIMATI)\n a. Original Death Certificate & 1 copy.\n b. 1 copy of the Deceased’s Birth Certificate (required if the beneficiary is a parent or sibling).\n\n 2. BENEFICIARY'S REPRESENTATIVE\n a. 1 copy of Identity Card / Passport.\n b. 1 copy of supporting document proving relationship to the deceased.\n i. Birth Certificate (if the beneficiary is a child or sibling).\n ii. Marriage Certificate (if the beneficiary is a spouse).\n\n 3. BUYER (IF THE VEHICLE IS BEING TRANSFERRED TO A BUYER)\n a. 1 copy of Identity Card / Passport.\n b. Proof of vehicle purchase\n\n 4. MOVABLE PROPERTY – VEHICLE\n a. New Grant – 1 copy of the vehicle grant (front only) * Must include vehicle e-ownership search / proof of loan settlement / proof of cash purchase.\n b. Old Grant – 1 copy of the vehicle grant (front and back) * If ownership is still under claim and the loan has been settled, include e-ownership search / proof of loan settlement.\n\n 5. MINIMUM DEPOSIT\n RM50<br\n 6. ADMINISTRATION PERIOD\n 30 days from the date of file opening and all completed documents sumbitted\n\n 7. RELATED FORMS\n a. Application Form For Estate Administration.\n b. Document Checklist to be Attached.\n c. Statutory Declaration of Vehicle Ownership Transfer.\n d. Sample – Estate Administration Application Form.\n e. Sample – Statutory Declaration of Vehicle Ownership Transfer.\n\n An administration fee will be charged for the administration of this estate:\n a. For total value of RM3,000 and below : RM50.\n b. For total value between RM3,000.01 and RM5,000 : RM150.\n c. For total value between RM5,000.01 and RM10,000 : 5.00% of the vehicle's value.\n\n The completed form along with the required documents can be submitted to any of our nearest branches for the estate file opening process. **{name}** may schedule an appointment at [Appointment Form](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    estate_yes_1: {
        id: 'estate_yes_1',
        message: `For vehicles with an outstanding loan, the beneficiary must first settle the loan before the ownership transfer process can be carried out.\n\n Below are some of the methods that can be used to settle the deceased’s vehicle loan:\n a. Make a lump sum payment to the financial institution.\n b. Make monthly instalment payments until the loan is fully settled.\n c. Apply for refinancing to settle the deceased’s outstanding vehicle loan.\n\n Is there anything else ARIA can assist you with?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    estate_yes: {
        id: 'estate_yes',
        message: `May ARIA know where the previous estate administration was carried out?`,
        options: [
            { label: '1️⃣ Civil High Court', nextStep: 'admin_high_court' },
            { label: '2️⃣ Estate Distribution Office', nextStep: 'admin_office' },
            { label: '3️⃣ AmanahRaya Berhad', nextStep: 'admin_arb' },
        ]
    },
    admin_high_court: {
        id: 'admin_high_court',
        message: `As the deceased’s estate has previously been administered, the application for additional assets must be proceeded with at the High Court.\n\n Would **{name}** like a more detailed explanation?`,
        options: [
            { label: '1️⃣ No', nextStep: 'exit' },
            { label: '2️⃣ Yes', nextStep: 'retrieve_page1' }
        ]
    },
    admin_office: {
        id: 'admin_office',
        message: `As the deceased’s estate has previously been administered, the application for additional assets must be submitted to the Estate Distribution Office.\n\n Would **{name}** like a more detailed explanation?`,
        options: [
            { label: '1️⃣ No', nextStep: 'exit' },
            { label: '2️⃣ Yes', nextStep: 'retrieve_page1' }
        ]
    },
    admin_arb: {
        id: 'admin_arb',
        message: `As the deceased’s estate has previously been administered here, **{name}** is required to submit an application for additional assets to be administered.`,
        options: [
            { label: '1️⃣ Proceed to additional asset', nextStep: 'pukasa_add_asset' }
        ]
    },
    estate_application: {
        id: 'estate_application',
        message: `For your information, **{name}**, estate administration is required for the deceased’s assets that do not have a nominee or were not given through hibah (gift). A Letter of Administration will be issued to administer the deceased’s assets.\n\n May ARIA know the location of the deceased’s assets`,
        options: [
            { label: '1️⃣ Peninsular', nextStep: 'peninsular' },
            { label: '2️⃣ Sabah', nextStep: 'sabah' },
            { label: '3️⃣ Serawak', nextStep: 'serawak' }
        ]
    },
    peninsular: {
        id: 'peninsular',
        message: `To **{name}**’s knowledge, has the deceased’s estate ever been administered before?`,
        options: [
            { label: '1️⃣ Yes, it has been done before', nextStep: 'peninsular_yes' },
            { label: '2️⃣ No it has never been done before', nextStep: 'peninsular_no' }
        ]
    },
    peninsular_yes: {
        id: 'peninsular_yes',
        message: `May ARIA know where the previous estate administration was carried out?`,
        options: [
            { label: '1️⃣ Civil High Court', nextStep: 'admin_high_court' },
            { label: '2️⃣ Estate Distribution Office', nextStep: 'admin_office' },
            { label: '3️⃣ AmanahRaya Berhad', nextStep: 'admin_arb' },
        ]
    },
    peninsular_no: {
        id: 'peninsular_no',
        message: `May ARIA know the religion practiced by the deceased?`,
        options: [
            { label: '1️⃣ Muslim', nextStep: 'malaysian_muslim' },
            { label: '2️⃣ Non-Muslim', nextStep: 'malaysian_nonmuslim' }
        ]
    },
    malaysian_muslim: {
        id: 'malaysian_muslim',
        message: 'Is there a Will left by the deceased?',
        options: [
            { label: '1️⃣ Yes', nextStep: 'muslim_yes' },
            { label: '2️⃣ No', nextStep: 'muslim_no' }
        ]
    },
    muslim_yes: {
        id: 'muslim-yes',
        message: `What are the assets left by the deceased?`,
        options: [
            { label: '1️⃣ Movable assets only (not exceeding RM100,000)', nextStep: 'muslim_yes_movable_assets_less_than' },
            { label: '2️⃣ Movable assets only (exceeding RM100,000)', nextStep: 'muslim_yes_movable_assets_greater_than' },
            { label: '3️⃣ Movable and immovable assets / Immovable assets only', nextStep: 'muslim_yes_movable_assets' },
        ]
    },
    muslim_yes_movable_assets_less_than: {
        id: 'muslim_yes_movable_assets_less_than',
        message: `1. DECEASED (SIMATI)\n a. Original Death Certificate of the deceased & 1 copy.\n b. 1 copy of the Deceased’s Birth Certificate.\n c. Original Will of the deceased & 1 copy.\n d. 1 copy of Marriage / Divorce Certificate (if the deceased was married / divorced).\n\n 2. DECEASED'S BENEFICIARIES\n a. 1 copy of Identity Card and Birth Certificate of the beneficiaries.\n b. 1 copy of Death Certificate (for any beneficiary who passed away before / after the deceased).\n\n 3. STATUTORY DECLARATION (PROVIDE ONLY IF APPLICABLE)\n Must be signed by an independent witness before a Commissioner for Oaths and stamped through the Inland Revenue Board (LHDN) website. A copy of the witness’s Identity Card must be included.\n a. Statutory Declaration of Single Status (if the deceased was unmarried).\n b. Statutory Declaration of No Children (if the deceased had no children).\n c. Statutory Declaration of Sole Beneficiary (if the deceased left only one beneficiary)\n\n 4. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)\n a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership (front and back) and no outstanding loan / loan fully settled.\n b. 1 copy of the deceased’s account statement / savings book (ASB / Bank / Tabung Haji).\n c. 1 copy of current account statement\n d. 1 copy of joint account statement / savings book.\n e. 1 copy of Bursa Malaysia share statement.\n f. 1 copy of Fixed Deposit statement.\n g. 1 copy of Safe Deposit Box slip.\n h. 1 copy of Company Share Certificate.\n i. 1 copy of EPF (KWSP) statement.\n j. 1 copy of Insurance Policy.\n k. 1 copy of Vessel Licence.\n\n 5. MINIMUM DEPOSIT\n RM50\n\n 6. ADMINISTRATION PERIOD\n 4 – 6 months from the date of file opening.\n\n 7. RELATED FORMS\n a. Application Form For Estate Administration.\n b. Document Checklist to be Attached.\n c. Statutory Declaration (Married / Divorced / No Children / Sole Beneficiary / Single).\n d. Sample – Estate Administration Application Form.\n e. Sample – Statutory Declaration (Married / Divorced / No Children / Sole Beneficiary / Single)\n\n An administration fee will be charged for the estate administration, as follows:\n 5% on the first RM25,000.\n 4% on the next RM225,000.\n 3% on the next RM250,000.\n 2% on the next RM500,000.\n 1% on the remaining balance\n\n The completed form along with the required documents can be submitted to any of our nearest branches for the estate file opening process. **{name}** may schedule an appointment at [Appointment Form](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    muslim_yes_movable_assets_greater_than: {
        id: 'muslim_yes_movable_assets_greater_than',
        message: `1. DECEASED (SIMATI)\n a. Original Death Certificate of the deceased & 1 copy.\n b. Original Will of the deceased & 1 copy.\n c. Original Faraid Certificate & 1 copy (can be applied for at the Syariah Court).\n\n 2. DECEASED'S BENEFICIARIES\n a. 1 copy of the beneficiary's Identity Card.\n\n 3. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE).\n a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership (front and back) and no outstanding loan / loan fully settled.\n b. 1 copy of the deceased’s account statement / savings book (ASB / Bank / Tabung Haji).\n c. 1 copy of current account statement.\n d. 1 copy of joint account statement / savings book.\n e. 1 copy of Bursa Malaysia share statement.\n f. 1 copy of Fixed Deposit statement.\n g. 1 copy of Safe Deposit Box slip.\n h. 1 copy of Company Share Certificate.\n i. 1 copy of EPF (KWSP) statement.\n j. 1 copy of Insurance Policy.\n k. 1 copy of Vessel Licence.\n\n 4. MINIMUM DEPOSIT a. RM50.\n b. RM1000 (if the total value of assets exceeds RM600,000).\n\n 5. ADMINISTRATION PERIOD\n a. 6 months from the date of file opening.\n b. 12 months from the date of file opening (if the total value of assets exceeds RM600,000).\n\n 6. RELATED FORMS a. Application Form For Estate Administration.\n b. Document Checklist to be Attached.\n c. Sample – Estate Administration Application Form.\n\n An administration fee will be charged for the estate administration, as follows:\n 5% on the first RM25,000.\n 4% on the next RM225,000.\n 3% on the next RM250,000.\n 2% on the next RM500,000.\n 1% on the remaining balance\n\n The completed form along with the required documents can be submitted to any of our nearest branches for the estate file opening process. **{name}** may schedule an appointment at [Appointment Form](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    muslim_yes_movable_assets: {
        id: 'muslim_yes_movable_assets',
        message: `1. DECEASED (SIMATI)\n a. Original Death Certificate of the deceased & 1 copy.\n b. Original Will of the deceased & 1 copy.\n c. Original Faraid Certificate & 1 copy (can be applied for at the Syariah Court).\n\n 2. DECEASED'S BENEFICIARIES\n a. 1 copy of the beneficiary's Identity Card.\n\n 3. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)\n a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership (front and back) and no outstanding loan / loan fully settled.\n b. 1 copy of the deceased’s account statement / savings book (ASB / Bank / Tabung Haji).\n c. 1 copy of current account statement.\n d. 1 copy of joint account statement / savings book.\n e. 1 copy of Bursa Malaysia share statement.\n f. 1 copy of Fixed Deposit statement.\n g. 1 copy of Safe Deposit Box slip.\n h. 1 copy of Company Share Certificate.\n i. 1 copy of EPF (KWSP) statement.\n j. 1 copy of Insurance Policy.\n k. 1 copy of Vessel Licence.\n\n 4. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE)\n a. 1 copy of the Sale and Purchase Agreement (S&P) for a house without strata title OR.\n b. 1 copy of the house strata title.\n c. 1 copy of the house title deed (geran).\n d. 1 copy of the land title deed (geran).\n e. Original and 1 copy of the latest quit rent receipt.\n f. Original and 1 copy of the latest assessment/tax bill.\n\n 5. MINIMUM DEPOSIT\n RM1000/property.\n\n 6. ADMINISTRATION PERIOD\n 12 months from the date of file opening.\n\n 7. RELATED FORMS\n a. Application Form For Estate Administration.\n b. Document Checklist to be Attached.\n c. Sample – Estate Administration Application Form.\n\n An administration fee will be charged for the estate administration, as follows:\n 5% on the first RM25,000.\n 4% on the next RM225,000.\n 3% on the next RM250,000.\n 2% on the next RM500,000.\n 1% on the remaining balance\n\n The completed form along with the required documents can be submitted to any of our nearest branches for the estate file opening process. **{name}** may schedule an appointment at [Appointment Form](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    muslim_no: {
        id: 'muslim_no',
        message: `What are the assets left by the deceased?`,
        options: [
            { label: '1️⃣ Movable assets only (not exceeding RM100,000)', nextStep: 'muslim_yes_movable_assets_less_than' },
            { label: '2️⃣ Movable assets only (exceeding RM100,000)', nextStep: 'muslim_yes_movable_assets_greater_than' },
            { label: '3️⃣ Movable and immovable assets / Immovable assets only', nextStep: 'muslim_yes_movable_assets' },
            { label: '4️⃣ Movable and immovable assets / Immovable assets only (not exceeding RM5 million)', nextStep: 'muslim_yes_movable_assets_not_exceed' },
        ]
    },
    muslim_yes_movable_assets_not_exceed: {
        id: 'muslim_yes_movable_assets_not_exceed',
        message: `1. DECEASED (SIMATI)\n a. Original Death Certificate of the deceased & 1 copy.\n b. 1 copy of the Deceased’s Birth Certificate.\n c. Original Will of the deceased & 1 copy.\n d. 1 copy of Marriage/Divorce Certificate (if the deceased was married/divorced).\n\n 2. DECEASED'S BENEFICIARIES\n a. 1 copy of the Identity Card and Birth Certificate of the beneficiaries.\n b. 1 copy of Death Certificate (for any beneficiary who passed away before/after the deceased).\n\n 3. STATUTORY DECLARATION (PROVIDE ONLY IF RELEVANT)\n To be signed by an independent witness in front of a Commissioner for Oaths and stamped via the Inland Revenue Board (LHDN) website. A copy of the witness’s Identity Card must be included.\n a. Statutory Declaration of Single Status (if the deceased was unmarried).\n b. Statutory Declaration of No Children (if the deceased had no children).\n c. Statutory Declaration of Sole Beneficiary (if there is only one surviving beneficiary).\n\n 4. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)\n a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership (front and back) and no outstanding loan / loan fully settled.\n b. 1 copy of the deceased’s account statement / savings book (ASB / Bank / Tabung Haji).\n c. 1 copy of current account statement.\n d. 1 copy of joint account statement / savings book.\n e. 1 copy of Bursa Malaysia share statement.\n f. 1 copy of Fixed Deposit statement.\n g. 1 copy of Safe Deposit Box slip.\n h. 1 copy of Company Share Certificate.\n i. 1 copy of EPF (KWSP) statement.\n j. 1 copy of Insurance Policy.\n k. 1 copy of Vessel Licence.\n\n 5. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE)\n a. 1 copy of the Sale and Purchase Agreement (S&P) for a house without strata title.\n b. 1 copy of the house strata title.\n c. 1 copy of the house title deed (geran).\n d. 1 copy of the land title deed (geran).\n e. Original and 1 copy of the latest quit rent receipt.\n f. Original and 1 copy of the latest assessment/tax bill.\n\n 6. MINIMUM DEPOSIT\n RM300/property\n\n 7. ADMINISTRATION PERIOD\n 12 months from the date of file opening.\n\n 8. RELATED FORMS\n a. Application Form For Estate Administration.\n b. Document Checklist to be Attached.\n c. Statutory Declaration (Married / Divorced / No Children / Sole Beneficiary / Single).\n d. Sample – Estate Administration Application Form.\n e. Sample – Statutory Declaration (Married / Divorced / No Children / Sole Beneficiary / Single).\n\n An administration fee will be charged for the estate administration, as follows:\n 2% from the total asset value The completed form along with the required documents can be submitted to any of our nearest branches for the estate file opening process. **{name}** may schedule an appointment at [Appointment Form](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    malaysian_nonmuslim: {
        id: 'malaysian_nonmuslim',
        message: 'Is there a Will left by the deceased?',
        options: [
            { label: '1️⃣ Yes', nextStep: 'nonmuslim_yes' },
            { label: '2️⃣ No', nextStep: 'nonmuslim_no' }
        ]
    },
    nonmuslim_yes: {
        id: 'nonmuslim_yes',
        message: `What are the assets left by the deceased?`,
        options: [
            { label: '1️⃣ Movable assets only', nextStep: 'nonmuslim_yes_movable_assets' },
            { label: '2️⃣ Movable and immovable assets / Immovable assets only', nextStep: 'nonmuslim_yes_immovable_assets' },
        ]
    },
    nonmuslim_yes_movable_assets: {
        id: 'nonmuslim_yes_movable_assets',
        message: `1. DECEASED (SIMATI)\n a. Original Death Certificate of the deceased & 1 copy.\n b. Original Will of the deceased & 1 copy.\n\n 2. DECEASED'S BENEFICIARIES\n a. 1 copy of the beneficiary's Identity Card.\n\n 3. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)\n a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership (front and back) and no outstanding loan / loan fully settled.\n b. 1 copy of the deceased’s account statement / savings book (ASB / Bank / Tabung Haji).\n c. 1 copy of current account statement.\n d. 1 copy of joint account statement / savings book.\n e. 1 copy of Bursa Malaysia share statement.\n f. 1 copy of Fixed Deposit statement.\n g. 1 copy of Safe Deposit Box slip.\n h. 1 copy of Company Share Certificate.\n i. 1 copy of EPF statement.\n j. 1 copy of Insurance Policy.\n k. 1 copy of Vessel Licence.\n\n 4. MINIMUM DEPOSIT\n a. RM50.\n b. RM1000 (if the total value of assets exceeds RM600,000).\n\n 5. ADMINISTRATION PERIOD\n a. 6 months from the date of file opening.\n b. 12 months from the date of file opening (if the total value of assets exceeds RM600,000).\n\n 7. RELATED FORMS\n a. Application Form For Estate Administration.\n b. Document Checklist to be Attached.\n c. Sample – Estate Administration Application Form\n\n An administration fee will be charged for the estate administration, as follows:\n 5% on the first RM25,000.\n 4% on the next RM225,000.\n 3% on the next RM250,000.\n 2% on the next RM500,000.\n 1% on the remaining balance\n\n The completed form along with the required documents can be submitted to any of our nearest branches for the estate file opening process. **{name}** may schedule an appointment at [Appointment Form](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    nonmuslim_yes_immovable_assets: {
        id: 'nonmuslim_yes_immovable_assets',
        message: `1. DECEASED (SIMATI)\n a. Original Death Certificate of the deceased & 1 copy.\n b. Original Will of the deceased & 1 copy.\n\n 2. DECEASED'S BENEFICIARIES\n a. 1 copy of the beneficiary's Identity Card.\n\n 3. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE).\n a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership (front and back) and no outstanding loan / loan fully settled.\n b. 1 copy of the deceased’s account statement / savings book (ASB / Bank / Tabung Haji).\n c. 1 copy of current account statement.\n d. 1 copy of joint account statement / savings book.\n e. 1 copy of Bursa Malaysia share statement.\n f. 1 copy of Fixed Deposit statement.\n g. 1 copy of Safe Deposit Box slip.\n h. 1 copy of Company Share Certificate.\n i. 1 copy of EPF (KWSP) statement.\n j. 1 copy of Insurance Policy.\n k. 1 copy of Vessel Licence.\n\n 4. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE)\n a. 1 copy of the Sale and Purchase Agreement (S&P) for a house without strata title.\n b. 1 copy of the house strata title.\n c. 1 copy of the house title deed (geran).\n d. 1 copy of the land title deed (geran).\n e. Original and 1 copy of the latest quit rent receipt.\n f. Original and 1 copy of the latest assessment/tax bill.\n\n 5. MINIMUM DEPOSIT\n RM1000/property.\n\n 7. ADMINISTRATION PERIOD\n 12 months from the date of file opening.\n 8. RELATED FORMS.\n a. Application Form For Estate Administration.\n b. Document Checklist to be Attached.\n c. Sample – Estate Administration Application Form\n An administration fee will be charged for the estate administration, as follows:\n 5% on the first RM25,000.\n 4% on the next RM225,000.\n 3% on the next RM250,000.\n 2% on the next RM500,000.\n 1% on the remaining balance\n\n The completed form along with the required documents can be submitted to any of our nearest branches for the estate file opening process. **{name}** may schedule an appointment at [Appointment Form](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    nonmuslim_no: {
        id: 'nonmuslim_no',
        message: `What are the assets left by the deceased?`,
        options: [
            { label: '1️⃣ Movable assets only', nextStep: 'nonmuslim_no_movable_assets' },
            { label: '2️⃣ Movable and immovable assets / Immovable assets only (exceeding RM5 million)', nextStep: 'nonmuslim_no_immovable_assets_greater_than' },
            { label: '3️⃣ Movable and immovable assets / Immovable assets only (not exceeding RM5 million)', nextStep: 'nonmuslim_no_movable_assets_not_exceed' },
        ]
    },
    nonmuslim_no_movable_assets: {
        id: 'nonmuslim_no_movable_assets',
        message: `1. DECEASED (SIMATI)\n a. Original Death Certificate of the deceased & 1 copy.\n b. 1 copy of the Deceased’s Birth Certificate.\n c. 1 copy of Marriage / Divorce Certificate (if the deceased was married / divorced).\n\n 2. DECEASED'S BENEFICIARIES\n a. 1 copy of the Identity Card and Birth Certificate of the beneficiaries.\n b. 1 copy of Death Certificate (for any beneficiary who passed away before / after the deceased).\n\n 3. STATUTORY DECLARATION (PROVIDE ONLY IF RELEVANT)\n To be signed by an independent witness in front of a Commissioner for Oaths and stamped via the Inland Revenue Board (LHDN) website. A copy of the witness’s Identity Card must be included.\n a. Statutory Declaration of Single Status (if the deceased was unmarried).\n b. Statutory Declaration of Marriage (if the marriage was not registered).\n c. Statutory Declaration of No Children (if the deceased had no children).\n d. Statutory Declaration of Sole Beneficiary (if there is only one surviving beneficiary).\n\n 4. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)\n a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership (front and back) and no outstanding loan / loan fully settled.\n b. 1 copy of the deceased’s account statement / savings book (ASB / Bank / Tabung Haji).\n c. 1 copy of current account statement.\n d. 1 copy of joint account statement / savings book.\n e. 1 copy of Bursa Malaysia share statement.\n f. 1 copy of Fixed Deposit statement.\n g. 1 copy of Safe Deposit Box slip.\n h. 1 copy of Company Share Certificate.\n i. 1 copy of EPF (KWSP) statement.\n j. 1 copy of Insurance Policy.\n k. 1 copy of Vessel Licence.\n\n 5. MINIMUM DEPOSIT\n RM50.\n 6. ADMINISTRATION PERIOD\n 4 - 6 months from the date of file opening.\n\n 7. RELATED FORMS.\n a. Application Form For Estate Administration.\n b. Document Checklist to be Attached.\n c. Statutory Declaration (Married / Divorced / No Children / Sole Beneficiary / Single).\n d. Sample – Estate Administration Application Form.\n e. Sample – Statutory Declaration (Married / Divorced / No Children / Sole Beneficiary / Single).\n\n An administration fee will be charged for the estate administration, as follows:\n 5% on the first RM25,000.\n 4% on the next RM225,000.\n 3% on the next RM250,000.\n 2% on the next RM500,000.\n 1% on the remaining balance\n\n The completed form along with the required documents can be submitted to any of our nearest branches for the estate file opening process. **{name}** may schedule an appointment at [Appointment Form](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    nonmuslim_no_immovable_assets_greater_than: {
        id: 'nonmuslim_no_immovable_assets_greater_than',
        message: `1. DECEASED (SIMATI) a. Original Death Certificate of the deceased & 1 copy.\n b. 1 copy of the Deceased’s Birth Certificate.\n c. 1 copy of Marriage / Divorce Certificate (if the deceased was married / divorced).\n\n 2. DECEASED'S BENEFICIARIES\n a. 1 copy of the Identity Card and Birth Certificate of the beneficiaries.\n b. 1 copy of Death Certificate (for any beneficiary who passed away before / after the deceased).\n\n 3. STATUTORY DECLARATION (PROVIDE ONLY IF RELEVANT)\n To be signed by an independent witness in front of a Commissioner for Oaths and stamped via the Inland Revenue Board (LHDN) website. A copy of the witness’s Identity Card must be included..\n a. Statutory Declaration of Single Status (if the deceased was unmarried).\n b. Statutory Declaration of Marriage (if the marriage was not registered).\n c. Statutory Declaration of No Children (if the deceased had no children).\n d. Statutory Declaration of Sole Beneficiary (if there is only one surviving beneficiary).\n\n 4. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)\n a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership (front and back) and no outstanding loan / loan fully settled.\n b. 1 copy of the deceased’s account statement / savings book (ASB / Bank / Tabung Haji).\n c. 1 copy of current account statement.\n d. 1 copy of joint account statement / savings book.\n e. 1 copy of Bursa Malaysia share statement.\n f. 1 copy of Fixed Deposit statement.\n g. 1 copy of Safe Deposit Box slip.\n h. 1 copy of Company Share Certificate.\n i. 1 copy of EPF (KWSP) statement.\n j. 1 copy of Insurance Policy.\n k. 1 copy of Vessel Licence.\n\n 5. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE).\n a. 1 copy of the Sale and Purchase Agreement (S&P) for a house without strata title.\n b. 1 copy of the house strata title.\n c. 1 copy of the house title deed (geran).\n d. 1 copy of the land title deed (geran).\n e. Original and 1 copy of the latest quit rent receipt.\n f. Original and 1 copy of the latest assessment/tax bill.\n\n 6. MINIMUM DEPOSIT\n RM1000/property.\n\n 7. ADMINISTRATION PERIOD\n 12 months from the date of file opening.\n\n 8. RELATED FORMS\n a. Application Form For Estate Administration.\n b. Document Checklist to be Attached.\n c. Statutory Declaration (Married / Divorced / No Children / Sole Beneficiary / Single).\n d. Sample – Estate Administration Application Form.\n e. Sample – Statutory Decl.\n\n An administration fee will be charged for the estate administration, as follows:\n 5% on the first RM25,000.\n 4% on the next RM225,000.\n 3% on the next RM250,000.\n 2% on the next RM500,000.\n 1% on the remaining balance\n\n The completed form along with the required documents can be submitted to any of our nearest branches for the estate file opening process. **{name}** may schedule an appointment at [Appointment Form](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    nonmuslim_no_movable_assets_not_exceed: {
        id: 'nonmuslim_no_movable_assets_not_exceed',
        message: `1. DECEASED (SIMATI)\n a. Original Death Certificate of the deceased & 1 copy.\n b. 1 copy of the Deceased’s Birth Certificate.\n c. 1 copy of Marriage / Divorce Certificate (if the deceased was married / divorced).\n\n 2. DECEASED'S BENEFICIARIES\n a. 1 copy of the Identity Card and Birth Certificate of the beneficiaries.\n b. 1 copy of Death Certificate (for any beneficiary who passed away before / after the deceased).\n\n 3. STATUTORY DECLARATION (PROVIDE ONLY IF RELEVANT)\n To be signed by an independent witness in front of a Commissioner for Oaths and stamped via the Inland Revenue Board (LHDN) website. A copy of the witness’s Identity Card must be included..\n a. Statutory Declaration of Single Status (if the deceased was unmarried).\n b. Statutory Declaration of Marriage (if the marriage was not registered).\n c. Statutory Declaration of No Children (if the deceased had no children).\n d. Statutory Declaration of Sole Beneficiary (if there is only one surviving beneficiary).\n\n 4. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE).\n a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership (front and back) and no outstanding loan / loan fully settled.\n b. 1 copy of the deceased’s account statement / savings book (ASB / Bank / Tabung Haji).\n c. 1 copy of current account statement.\n d. 1 copy of joint account statement / savings book.\n e. 1 copy of Bursa Malaysia share statement.\n f. 1 copy of Fixed Deposit statement.\n g. 1 copy of Safe Deposit Box slip.\n h. 1 copy of Company Share Certificate.\n i. 1 copy of EPF (KWSP) statement.\n j. 1 copy of Insurance Policy.\n k. 1 copy of Vessel Licence.\n\n 5. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE)\n a. 1 copy of the Sale and Purchase Agreement (S&P) for a house without strata title.\n b. 1 copy of the house strata title.\n c. 1 copy of the house title deed (geran).\n d. 1 copy of the land title deed (geran).\n e. Original and 1 copy of the latest quit rent receipt.\n f. Original and 1 copy of the latest assessment/tax bill.\n\n 6. MINIMUM DEPOSIT\n RM300/property.\n\n 7. ADMINISTRATION PERIOD\n 12 months from the date of file opening.\n\n 8. RELATED FORMS\n a. Application Form For Estate Administration.\n b. Document Checklist to be Attached.\n c. Statutory Declaration (Married / Divorced / No Children / Sole Beneficiary / Single).\n d. Sample – Estate Administration Application Form.\n e. Sample – Statutory Declaration (Married / Divorced / No Children / Sole Beneficiary / Single).\n\n An administration fee will be charged for the estate administration, as follows:\n 2% from the total asset value The completed form along with the required documents can be submitted to any of our nearest branches for the estate file opening process. **{name}** may schedule an appointment at [Appointment Form](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    obtain_form: {
        id: 'obtain_form',
        message: `Please select the required form.\n\n 1. [Application Form for Estate Administration](https://drive.google.com/file/d/1m0RX6iV98j44J59aWvRUVpwExVQT2LYS/view)\n 2. [Checklist of Documents To Be Attached](https://drive.google.com/file/d/1HedU88RKdbxcU3fjtU8nUQUxxvi7xIoR/view)\n 3. [Deed of Renunciation](https://drive.google.com/file/d/1Iw5PPCU704RCX55T7_fNZ7iPFh1McT08/view)\n 4. [Statutory Declaration of Death](https://drive.google.com/file/d/14vpHwW7ifhdYAXTkaF0dvOqch-pDvkvb/view)\n 5. [Statutory Declaration(Married / Divorced / No Children / SoleHeir / Single)](https://drive.google.com/file/d/1sq7N2VPONYdnATA-Fm8_UC8mQ-beMr5H/view)\n 6. [Letter of Undertaking and Indemnity for Vehicle Ownership Transfer](https://drive.google.com/file/d/1TYJJ-O_mkuioqCmnCkper8vQuqTYA7Zl/view)\n 7. [Confirmation of Bank Account Details Form](https://drive.google.com/file/d/1wGZeu1tu3kUgscM6XVOWS5dmjRFfmQNv/view)\n 8. [Declaration of Vehicle Ownership Transfer](https://drive.google.com/file/d/1Nwhv0lP2pCcNgKMbUkRQ3e4ZrmHfPZUp/view)\n 9. [Application Form for Additional Assets / Liabilities](https://drive.google.com/file/d/1sMYoAe-0iOpgoTc-U50FwTi9-zsbshOO/view)\n 10. [Letter of Vehicle Valuation](https://drive.google.com/file/d/1P3Ur3CKLcQXVNs9bjhpCkP17vnmzydt6/view)\n`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    // Below steps are belong to Sabah

    sabah: {
        id: 'sabah',
        message: `Estate administration in Sabah is only applicable if all of the deceased's assets (both movable and immovable) are located in Sabah. If the assets are located in Peninsular Malaysia, Sarawak, or Labuan, the estate administration must be filed and carried out in the respective region based on the location of the assets.\n\n To **{name}**’s knowledge, has the deceased’s estate ever been administered before?`,
        options: [
            { label: '1️⃣ Yes, it has been done before', nextStep: 'sabah_main_yes' },
            { label: '2️⃣ No, it has never been done before', nextStep: 'sabah_main_no' },
        ]
    },
    sabah_main_yes: {
        id: 'sabah_main_yes',
        message: `May ARIA know where the previous estate administration was carried out?`,
        options: [
            { label: '1️⃣ Civil High Court (Peninsular) ', nextStep: 'sabah_main_yes_peninsular_court' },
            { label: '2️⃣ Civil High Court (Kota Kinabalu / Tawau / Sandakan)', nextStep: 'sabah_main_yes_kota_kinabalu' },
            { label: '3️⃣ Syariah Court (Kota Kinabalu / Tawau / Sandakan)', nextStep: 'sabah_main_yes_syriah_court' },
            { label: '4️⃣ District Office / Amanah Raya Berhad (Sarawak)', nextStep: 'sabah_main_yes_district_office' },
            { label: '5️⃣ Amanah Raya Berhad (Peninsular)', nextStep: 'sabah_main_yes_district_office' },
            { label: '6️⃣ Land Office (Peninsular / Labuan)', nextStep: 'sabah_main_yes_district_office' },
            { label: '7️⃣ Native Court (Sabah)', nextStep: 'sabah_main_yes_native_court' },
            { label: '8️⃣ Amanah Raya Berhad (Sabah)', nextStep: 'sabah_main_yes_amanah_raya_sabah' },
        ]
    },
    sabah_main_yes_peninsular_court: {
        id: 'sabah_main_yes_peninsular_court',
        message: `Has the property in Sabah been included in the previous estate administration that was carried out?`,
        options: [
            { label: '1️⃣ Yes ', nextStep: 'sabah_main_yes_peninsular_court_yes' },
            { label: '2️⃣ No', nextStep: 'sabah_main_yes_peninsular_court_no' },
        ]
    },
    sabah_main_yes_peninsular_court_yes: {
        id: '',
        message: `For non-Muslims, the transfer of ownership can only be done if **{name}** submits the Court Order to ARB Kota Kinabalu for the purpose of resealing at the Sabah High Court.\n\n For Muslims, **{name}** must submit a new estate application at ARB Kota Kinabalu to be filed through the Syariah Court.\n\n Would **{name}** like to proceed?`,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_district_office: {
        id: 'sabah_main_yes_district_office',
        message: ` **{name}** may submit a new estate application at ARB Kota Kinabalu to be filed through the Civil High Court (for Non-Muslims) or the Syariah Court (for Muslims).\n\n Would **{name}** like to proceed?`,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_native_court: {
        id: "sabah_main_yes_native_court",
        message: `For the deceased's estate that cannot be administered through the Native Court, **{name}** may submit a new estate application at ARB Kota Kinabalu to be filed through the Civil High Court.\n\n Would **{name}** like to proceed?`,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_peninsular_court_no: {
        id: 'sabah_main_yes_peninsular_court_no',
        message: `**{name}** may submit a new estate application at ARB Kota Kinabalu to be filed through the Civil High Court (for non-Muslims) or the Syariah Court (for Muslims).\n\n Would **{name}** like to proceed?`,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_syriah_court: {
        id: 'sabah_main_yes_syriah_court',
        message: `if an Executor (Wasi) or Guardian (Wali Harta) has been appointed by the Syariah  Court, **{name}** may proceed with the administration granted by the Syariah Court.\n\n However, if the appointed Executor or Guardian fails to carry out their duties, **{name}** ay appoint Amanah Raya Berhad (ARB) Kota Kinabalu as the new Executor or Guardian by submitting an application to ARB Kota Kinabalu.\n\n Would **{name}** like to proceed?
                `,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_kota_kinabalu: {
        id: 'sabah_main_yes_kota_kinabalu',
        message: `If an Administrator has been appointed by the High Court, **{name}** may proceed with the estate administration as ordered by the Court.\n\n However, if the appointed Administrator fails to carry out their duties, **{name}** may apply to appoint Amanah Raya Berhad (ARB) Kota Kinabalu as a substitute Administrator by submitting an official application to ARB Kota Kinabalu.\n\n Would **{name}** like to proceed?`,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_amanah_raya_sabah: {
        id: 'sabah_main_yes_amanah_raya_sabah',
        message: `**{name}** may complete the additional asset form below and submit the form along with the complete documents to ARB Kota Kinabalu.\n\n [BORANG PERMOHONAN ASET TAMBAHAN](https://drive.google.com/file/d/1sMYoAe-0iOpgoTc-U50FwTi9-zsbshOO/view)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    sabah_main_no: {
        id: 'sabah_main_no',
        message: `Before ARIA provides further explanation, **{name}** is advised to first review the following information regarding estate administration at ARB Kota Kinabalu:\n\n 1. Estate Administration\n a. If the deceased was Muslim, the application will be filed through the Syariah Court.\n b. If the deceased was non-Muslim (Non-Bumiputera), the application will be filed through the Civil High Court.\n\n 2. Property Status\n a. For properties with Native Title (NT) status, the beneficiary must be a Native (Bumiputera/ Indigenous of Sabah).\n b. For properties other than NT, there are no specific conditions imposed on the beneficiary.\n c. If the property is located outside the Kota Kinabalu area, the transfer of ownership will be handled by the relevant District Land Office.\n\n 3. Property Ownership Status\n a. If the deceased was Muslim, the property must:\n i) Be free from debt; and\n ii) Have the original individual title at the time of application to the Syariah Court.\n b. If the deceased was non-Muslim, the application may still be filed with the Civil High Court even if the property is under debt. However, the transfer process will only be carried out once:\n i) All debts are fully settled; and\n ii) The original individual title is available.\n The information above applies only to immovable assets such as house and land in Sabah.\n For movable assets such as bank accounts, insurance, vehicles etc located in Sabah, the case may be filed anywhere (it is not required to be filed in Sabah).\n\n Further explanation only applies if **{name}**'s information meets the specified criteria.\n\n What was the religion of the deceased?`,
        options: [
            { label: '1️⃣ Muslim', nextStep: 'sabah_muslim' },
            { label: '2️⃣ Non-muslim', nextStep: 'sabah_non_muslim' },
        ]
    },
    sabah_muslim: {
        id: 'sabah_muslim',
        message: `1. DECEASED (SIMATI)\n a. Deceased’s Original Death Certificate & 3 certified true copies by JPN (If death occurred overseas, submit the Laporan Kematian Luar Negara issued by JPN).\n b. 3 certified true copies of the Deceased’s Birth Certificate by JPN.\n c. Original Will of the Deceased & 1 copy (if any).\n\n 2. DECEASED'S BENEFICIARIES\n a. 3 certified true copies of Identity Card of each beneficiary by JPN.\n b. Proof of relationship with the Deceased:\n i. Spouse – Original Marriage Certificate & 3 certified true copies by the Department of Islamic Religious Affairs of the State of Sabah (JHEAINS) / Sabah Islamic Religious Council (MUIS)\n ii. Children – 3 certified true copies of Birth Certificate of each the  beneficiary by JPN.\n c. 3 certified true copies of Death Certificate (for beneficiary who passed away before / after the Deceased) by JPN.\n\n * If documents such as Birth Certificate / Death Certificate cannot be produced, please obtain them from JPN.\n * For Marriage Certificate, the spouse must obtain it from JHEAINS / MUIS.\n\n 3. STATUTORY DECLARATION (PROVIDE ONLY IF RELEVANT)\n To be signed by an independent witness in front of a Commissioner for Oaths and stamped via the Inland Revenue Board (LHDN) website. A copy of the witness’s Identity Card must be included.\n a. Statutory Declaration of Single Status (if the deceased was unmarried).\n b. Statutory Declaration of No Children (if the deceased had no children).\n c. Statutory Declaration of Sole Beneficiary (if there is only one surviving beneficiary).\n\n 4. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)\n a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership (front and back) and no outstanding loan / loan fully settled.\n b. 1 copy of the deceased’s account statement / savings book (ASB / Bank / Tabung Haji).\n c. 1 copy of current account statement.\n d. 1 copy of joint account statement / savings book.\n e. 1 copy of Bursa Malaysia share statement.\n f. 1 copy of Fixed Deposit statement.\n g. 1 copy of Safe Deposit Box slip.\n h. 1 copy of Company Share Certificate.\n i. 1 copy of EPF (KWSP) statement.\n j. 1 copy of Insurance Policy.\n k. 1 copy of Vessel Licence.\n\n 5. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE)\n a. Original land title under the Deceased’s name & 1 copy of land title\n b. Native status confirmation (for Native Title land) if beneficiary is not 100% Sabah bumiputera\n\n 6. MINIMUM DEPOSIT\n a. RM1,500.00 for movable assets only.\n b. RM2,000.00 for each immovable asset.\n\n 7. ADMINISTRATION PERIOD\n Minimum 1 year 6 months from the date of file opening.\n\n 8. RELATED FORMS\n a. Application Form For Estate Administration.\n b. Document Checklist to be Attached.\n c. Statutory Declaration (Married / Divorced / No Children / Sole Beneficiary / Single).\n d. Sample – Estate Administration Application Form.\n e. Sample – Statutory Declaration (Married / Divorced / No Children / Sole Beneficiary / Single).\n\n The Application Form must be completed and signed by the Applicant before a Commissioner for Oaths. The completed form must be stamped with RM10.00 online through the Inland Revenue Board (LHDN) [website](https://stamps.hasil.gov.my/stamps) \n\n An administration fee will be charged for the estate administration, as follows:\n 5% on the first RM25,000.\n 4% on the next RM225,000.\n 3% on the next RM250,000.\n 2% on the next RM500,000.\n 1% on the remaining balance.\n\n * Excluding legal fees & third-party charges (e.g., Court, Inland Revenue Board (LHDN), Valuation and Property Services Department (JPPH), etc.).\n\n The completed form along with the required documents may be submitted to ARB Kota Kinabalu for the estate file opening process.\n **{name}** may schedule an appointment at [AmanahRaya](https://www.amanahraya.my)\n\n For our branches location, please click [here](https://www.amanahraya.my/contact-us/branch-locator/)\n\n 1. On the appointment date, consultation and advisory services can be conducted with our officer.\n 2. Document submission and payment can be completed on the same day.\n\n Is there anything else ARIA can assist you with?
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    sabah_non_muslim: {
        id: 'sabah_non_muslim',
        message: `1. DECEASED (SIMATI) a. Deceased’s Original Death Certificate & 3 certified true copies by JPN (If death occurred overseas, submit the Laporan Kematian Luar Negara issued by JPN).\n b. Original Will of the Deceased & 1 copy (if any).\n\n 2. DECEASED'S BENEFICIARIES\n a. 3 certified true copies of Identity Card of each beneficiary by JPN.\n b. Proof of relationship with the Deceased:\n i. Spouse – Original Marriage Certificate & 3 certified true copies by JPN).\n ii. Children – 3 certified true copies of Birth Certificate of each the beneficiary by JPN.\n c. 3 certified true copies of Death Certificate (for beneficiary who passed away before / after the Deceased) by JPN.\n\n * If documents such as Birth Certificate / Death Certificate / MArriage Certificate cannot be produced, please obtain them from JPN.\n\n 3. STATUTORY DECLARATION (PROVIDE ONLY IF RELEVANT)\n To be signed by an independent witness in front of a Commissioner or Oaths and stamped via the Inland Revenue Board (LHDN) website. A copy of the witness’s Identity Card must be included.\n a. Statutory Declaration of Single Status (if the deceased was unmarried).\n b. Statutory Declaration of No Children (if the deceased had no children).\n c. Statutory Declaration of Sole Beneficiary (if there is only one surviving beneficiary).\n\n 4. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)\n a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership (front and back) and no outstanding loan / loan fully settled.\n b. 1 copy of the deceased’s account statement / savings book (ASB / Bank / Tabung Haji).\n c. 1 copy of current account statement.\n d. 1 copy of joint account statement / savings book.\n e. 1 copy of Bursa Malaysia share statement.\n f. 1 copy of Fixed Deposit statement.\n g. 1 copy of Safe Deposit Box slip.\n h. 1 copy of Company Share Certificate.\n i. 1 copy of EPF (KWSP) statement.\n j. 1 copy of Insurance Policy.\n k. 1 copy of Vessel Licence.\n\n 5. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE)\n a. Original land title under the Deceased’s name & 1 copy of land title\n b. Native status confirmation (for Native Title land) if beneficiary is not 100% Sabah bumiputera\n\n 6. MINIMUM DEPOSIT\n a. RM1,500.00 for movable assets only\n b. RM2,000.00 for each immovable asset\n\n 7. ADMINISTRATION PERIOD\n Minimum 1 year 6 months from the date of file opening\n 8. RELATED FORMS\n a. Application Form For Estate Administration.\n b. Document Checklist to be Attached.\n c. Sample – Estate Administration Application Form.\n\n The Application Form must be completed and signed by the Applicant before a Commissioner for Oaths. The completed form must be stamped with RM10.00 online through the Inland Revenue Board (LHDN) [website](https://stamps.hasil.gov.my/stamps) \n\n An administration fee will be charged for the estate administration, as follows:\n 5% on the first RM25,000.\n 4% on the next RM225,000.\n 3% on the next RM250,000.\n 2% on the next RM500,000.\n 1% on the remaining balance.\n\n * Excluding legal fees & third-party charges (e.g., Court, Inland Revenue Board (LHDN), Valuation and Property Services Department (JPPH), etc.).\n\n The completed form along with the required documents may be submitted to ARB Kota Kinabalu for the estate file opening process.\n **{name}** may schedule an appointment at [AmanahRaya](https://www.amanahraya.my)\n\n For our branches location, please click [here](https://www.amanahraya.my/contact-us/branch-locator/)\n\n 1. On the appointment date, consultation and advisory services can be conducted with our officer.\n 2. Document submission and payment can be completed on the same day.\n\n Is there anything else ARIA can assist you with?`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    // The below steps are belong to Serawak
    serawak: {
        id: 'serawak',
        message: `To **{name}**’s knowledge, has the deceased’s estate ever been administered before?`,
        options: [
            { label: '1️⃣ Yes, it has been done before', nextStep: 'serawak_main_yes' },
            { label: '2️⃣ No, it has never been done before', nextStep: 'serawak_main_no' },
        ]
    },
    serawak_main_yes: {
        id: 'serawak_main_yes',
        message: `May ARIA know where the previous estate administration was carried out?`,
        options: [
            { label: '1️⃣ District Office(Sarawak) ', nextStep: 'serawak_main_yes_district_office' },
            { label: '2️⃣ Amanah Raya Berhad(Sarawak)', nextStep: 'serawak_main_yes_amanah_raya' },
            { label: '3️⃣ Civil High Court(Peninsular / Sabah)', nextStep: 'serawak_main_yes_civil_court' },
            { label: '4️⃣ Land Office (Peninsular / Labuan)', nextStep: 'serawak_main_no' },
            { label: '5️⃣ Syariah Court / Native Court (Sabah)', nextStep: 'serawak_main_no' },
            { label: '6️⃣ Amanah Raya Berhad (Peninsular / Sabah)', nextStep: 'serawak_main_no' },
        ]
    },
    serawak_main_yes_district_office: {
        id: 'serawak_main_yes_district_office',
        message: `**{name}** may refer to the District Office for the administration of the deceased’s additional assets.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    serawak_main_yes_amanah_raya: {
        id: 'serawak_main_yes_amanah_raya',
        message: `**{name}** may complete the additional assets form below and submit the form along with the required documents to the Kuching branch for the issuance of the [Supplementary Letter of Administration](https://drive.google.com/file/d/187OrybkH0m6xPbS65gU6aj3L5lP5XZXZ/view)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    serawak_main_yes_civil_court: {
        id: 'serawak_main_yes_civil_court',
        message: `Has the property in Sarawak been included in the previous estate administration that was carried out?`,
        options: [
            { label: '1️⃣ Yes ', nextStep: 'serawak_main_yes_civil_court_yes' },
            { label: '2️⃣ No', nextStep: 'serawak_main_no' },
        ]
    },
    serawak_main_yes_civil_court_yes: {
        id: 'serawak_main_yes_civil_court_yes',
        message: `For the transfer of ownership of the property, **{name}** will need to undergo the resealing process at Amanah Raya Berhad Kuching.\n\n **{name}** may visit our Kuching branch for further expalanation.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    serawak_main_no: {
        id: 'serawak_main_no',
        message: `For your information, ARB Kuching can only issue the Letter of Administration / Grant of Probate for the following:\n\n 1. Location of Property\n a. The deceased's property is located within Kuching area only or if the beneficiary resides in Kuching.\n b. For properties outside of Kuching area, the administration must be done at the District Office.\n\n 2. Beneficiary / Heir\n a. Must be a Malaysian citizen.\n b. If not a Malaysian citizen, a Power of Attorney order must be submitted to Amanah Raya Berhad Kuching (only applicable for property located in Kuching).\n 3. The Deceased\n\n a. If the deceased is non-Malay / non-Bumiputera, administration must be done at Amanah Raya Berhad Kuching.\n b. If the deceased is Malay / Bumiputera, administration must be done at the District Office.\n\n Disclaimer:\n The explanation above applies only to immovable property such as house or land in Sarawak. For movable assets such as bank accounts, insurance, vehicles etc located in Sarawak, the case may be filed anywhere (it is not required to be filed in Sarawak).\n\n Further explanation only applies if **{name}**'s information meets the specified criteria.\n\n Did the deceased leave a will, and who is the Executor named in the will?`,
        options: [
            { label: '1️⃣ No will left by the deceased ', nextStep: 'sabah_main_no_deceased' },
            { label: '2️⃣ Have a will, and the executor is other than ARB', nextStep: 'sabah_main_no_have_will' },
            { label: '3️⃣ Have a will, and the executor is ARB', nextStep: 'sabah_main_no_have_will' },
        ]
    },
    abah_main_no_deceased: {
        id: 'abah_main_no_deceased',
        message: `1. DECEASED (SIMATI)\n a. Deceased's Original Death Certificate & 1 copy (If death occurred overseas, submit the Death Certificate issued by the relevant country together with confirmation of death from the Malaysian Embassy, or Overseas Death Report issued by JPN) OR\n b. Presumption of Death Order from the High Court (Civil) & 1 copy.\n c. Copy of Marriage / Divorce Certificate / Decree Nisi Absolute.\n\n 2. DECEASED'S BENEFICIARY\n a. 1 copy of Identity Card of beneficiary / applicant.\n b. 1 copy of proof of relationship to the Deceased (e.g.: Birth Certificate, Marriage Certificate).\n c. 1 copy of Death Certificate (for heirs who passed away before / after the Deceased).\n\n 3. STATUTORY DECLARATION\n a. Statutory Declaration by applicant (if beneficiary’s Death Certificate cannot be produced) – LA 1 (Swk. 1/2017).\n b. Statutory Declaration by applicant and 2 independent witnesses (if Marriage Certificate cannot be produced) – LA 2 (Swk. 1/2017) & LA 3 (Swk. 1/2017).\n c. Statutory Declaration by applicant (for application of Letter of Administration) – LA 5 (Swk. 1/2017).\n d. Statutory Declaration by an independent witness who knew the Deceased to confirm the marital status of the Deceased OR confirmation by Clan Association / Village Head / Community  Leader / Religious Leader (if the Deceased was single).\n\n * The declarations must be signed by the applicant / independent witness before a Commissioner for Oaths and stamped  online at the Inland Revenue Board (LHDN) website. Copies of applicant’s / witness’s identity card must be attached.\n\n 4. OTHER DOCUMENTS\n a. Letter of confirmation by next-of-kin from Clan Association / Temenggong / Penghulu – LA 4 (Swk. 1/2017).\n b. Letter of consent by beneficiaries / next-of-kin of the Deceased – LA 6 (Swk. 1/2017).\n c. Police Report / Complete Police Investigation Report (if death was caused by accident), together with a letter from the applicant stating intention to pursue related legal action.\n d. Letter from applicant stating there is no requirement for valuation of the Deceased’s assets such as land, shares, vehicles, etc. – LA 7 (Swk. 1/2017).\n e. Trust Undertaking Form – TU (Swk. 1/2017) (if applicable).\n\n 5. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)\n a. 1 copy of Savings Account Book / Current Account Statement (latest) / Fixed Deposit Statement / Fixed Deposit Receipt / Security Deposit Receipt.\n b. 1 copy of Bursa Malaysia Share Certificate / CDS Account Statement.\n c. 1 copy of EPF Statement or confirmation letter from EPF stating total balance.\n d. 1 copy of Insurance Policy or confirmation letter from the insurance company stating the payable amount.\n e. For business: 3 copies of Trading Account, Profit & Loss Account, and Balance Sheet as of the date of death.\n i. If sole proprietorship – must be confirmed by next-of-kin and attached with company stamp.\n ii. If holding company shares – must submit a search from SSM.\n iii. If partnership – must be confirmed by surviving partner(s) and attached with company stamp & copy of business registration from LHDN / District Office.\n f. 1 copy of Grant / Vehicle Ownership Certificate (front and back).\n g. 1 copy of Firearm License.\n h. Letter from employer confirming salary/bonus of the Deceased (if any).\n\n 6. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE)\n a. Copy of Land Title and Official Search from Land Office / Memorandum of Transfer / Sale & Purchase Agreement / Tenancy Agreement / Power of Attorney.\n\n 7. ADMINISTRATION FEES\n a. RM300.00 (No valuation of movable and immovable assets).\n b. RM150.00 (If valuation of movable and immovable assets is less than RM100,000).\n c. RM300.00 (If movable and immovable assets valued between RM100,000 and RM1 million).\n d. RM500.00 (If movable and immovable assets valued at RM1 million and above).\n e. RM350.00 (For applications by foreign citizens).\n\n 8. ADMINISTRATION PERIOD\n 30 working days.\n\n 9. RELATED FORMS\n a. Application for Letter of Administration.\n b. Statutory Declaratin – LA 1 (Swk. 1/2017).\n c. Letter of Next-of-Kin – LA 4 (Swk. 1/2017).\n d. Statutory Declaration (by applicant) – LA 5 (1/2017).\n e. Consent to Grant of Letter of Administration – LA 6 (1/2017).\n f. No valuation letter – LA 7 (Swk.1/2017).\n\n The completed form along with the required documents may be submitted to ARB Kota Kinabalu for the estate file opening process.\n **{name}** may schedule an appointment at [AmanahRaya](https://www.amanahraya.my)\n\n For our branches location, please click [here](https://www.amanahraya.my/contact-us/branch-locator/)\n\n 1. On the appointment date, consultation and advisory services can be conducted with our officer.\n 2. Document submission and payment can be completed on the same day.\n\n Is there anything else ARIA can assist you with?
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    sabah_main_no_have_will: {
        id: 'sabah_main_no_have_will',
        message: `1. DECEASED (SIMATI)\n a. Deceased's Original Death Certificate & 1 copy (If death occurred overseas, submit the Death Certificate issued by the relevant country together with confirmation of death from the Malaysian Embassy, or Overseas Death Report issued by JPN) OR\n b. Presumption of Death Order from the High Court (Civil) & 1 copy.\n c. Original Will of the Deceased & 2 copies (certified true copies are not required)\n\n 2. WASI / EXECUTOR\n a. 1 copy of Identity Card of Wasi / Executor.\n\n 3. STATUTORY DECLARATION\n a. Statutory Declaration by 2 witnesses of the Deceased’s Will (for the purpose of witness confirmation).\n b. Statutory Declaration by Wasi / Executor (for application of Grant of Probate for administration of the Deceased’s estate) – P1 (Swk. 1/2005).\n\n * The declarations must be signed by the witness / Executor before a Commissioner for Oaths and stamped online at the Inland Revenue Board (LHDN) website.  Copies of applicant’s / witness’s identity card must be attached.\n\n 4. OTHER DOCUMENTS\n a. Letter from applicant stating there is no requirement for valuation of the Deceased’s assets such as land, shares, vehicles, etc. - P2 (Swk. 1/2005).\n\n 5. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)\n a. 1 copy of Savings Account Book / Current Account Statement (latest) / Fixed Deposit Statement / Fixed Deposit Receipt / Security Deposit Receipt.\n b. 1 copy of Bursa Malaysia Share Certificate / CDS Account Statement.\n c. 1 copy of EPF Statement or confirmation letter from EPF stating total balance.\n d. 1 copy of Insurance Policy or confirmation letter from the insurance company stating the payable amount.\n e. For business: 3 copies of Trading Account, Profit & Loss Account, and Balance Sheet as of the date of death.\n i. If sole proprietorship – must be confirmed by next-of-kin and attached with company stamp.\n ii. If holding company shares – must submit a search from SSM.\n iii. If partnership – must be confirmed by surviving partner(s) and attached with company stamp & copy of business registration from LHDN / District Office.\n f. 1 copy of Grant / Vehicle Ownership Certificate (front and back).\n g. 1 copy of Firearm License.\n h. Letter fr.\n\n 6. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE)\n a. Copy of Land Title and Official Search from Land Office / Memorandum of Transfer / Sale & Purchase Agreement / Tenancy Agreement / Power of Attorney.\n\n 7. ADMINISTRATION FEES\n a. RM300.00 (No valuation of movable and immovable assets).\n b. RM150.00 (If valuation of movable and immovable assets is less than RM100,000).\n c. RM300.00 (If movable and immovable assets valued between RM100,000 and RM1 million).\n d. RM500.00 (If movable and immovable assets valued at RM1 million and above).\n e. RM350.00 (For applications by foreign citizens).\n\n 8. ADMINISTRATION PERIOD\n 30 working days.\n\n 9. RELATED FORMS\n a. Application for Probate of the Will.\n b. Statutory Declaration – P1 (Swk. 1/2005).\n c. No valuation letter – P2 (Swk. 1/2005).\n\n The completed form along with the required documents may be submitted to ARB Kota Kinabalu for the estate file opening process.\n **{name}** may schedule an appointment at [AmanahRaya](https://www.amanahraya.my)\n\n For our branches location, please click [here](https://www.amanahraya.my/contact-us/branch-locator/) \n\n 1. On the appointment date, consultation and advisory services can be conducted with our officer.\n 2. Document submission and payment can be completed on the same day.\n\n Is there anything else ARIA can assist you with?`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    // The below steps are belong to Pusaka(Add Assets)
    pukasa_add_asset: {
        id: 'pukasa_add_asset',
        message: `May ARIA know what additional assets are to be administered?`,
        options: [
            { label: '1️⃣ Vehicle only (current value less than RM10,000) ', nextStep: 'pukasa_add_asset_vehicle' },
            { label: '2️⃣ Movable asset only', nextStep: 'pukasa_add_asset_movable' },
            { label: '3️⃣ Vehicle only (current value more than RM10,000)', nextStep: 'pukasa_add_asset_movable' },
            { label: '4️⃣ Movable and Immovable asset ', nextStep: 'pukasa_add_asset_movable' },
            { label: '5️⃣ Immovable asset only', nextStep: 'pukasa_add_asset_movable' },
        ]
    },
    pukasa_add_asset_movable: {
        id: 'pukasa_add_asset_movable',
        message: `Okay. ARIA will list down the required documents.\n\n 1. DECEASED (SIMATI)\n a. Original Death Certificate & 1 copy.\n\n 2. DECEASED'S BENEFICIARY\n a. 1 copy of Death Certificate (if 1 salinan Sijil Kematian (if there is a beneficiary who passed away after the previous administration was completed).\n\n 3. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)\n a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership (front and back) and no outstanding loan / loan fully settled.\n b. 1 copy of the deceased’s account statement / savings book (ASB / Bank / Tabung Haji).\n c. 1 copy of current account statement.\n d. 1 copy of joint account statement / savings book.\n e. 1 copy of Bursa Malaysia share statement.\n f. 1 copy of Fixed Deposit statement.\n g. 1 copy of Safe Deposit Box slip.\n h. 1 copy of Company Share Certificate.\n i. 1 copy of EPF (KWSP) statement.\n j. 1 copy of Insurance Policy.\n k. 1 copy of Vessel Licence.\n\n 4. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE)\n a. 1 copy of the Sale and Purchase Agreement (S&P) for a house without strata title OR.\n b. 1 copy of the house strata title.\n c. 1 copy of the house title deed (geran).\n d. 1 copy of the land title deed (geran).\n e. Original and 1 copy of the latest quit rent receipt.\n f. Original and 1 copy of the latest assessment/tax bill.\n 5. DEPOSIT\n a. RM50 - RM1000 (actual amount will be informed after the document is reviewed).\n\n 6. RELATED FORMS\n a. Additional Assets / Liabilities Application Form.\n b. Sample - Additional Assets / Liabilities Application Form.\n\n The completed form along with the required documents must be submitted to the same AmanahRaya branch as in the previous administration.\n\n Which delivery method is more convenient for **{name}**?
            `,
        options: [
            { label: '1️⃣ Counter ', nextStep: 'pukasa_add_asset_movable_counter' },
            { label: '2️⃣ Post', nextStep: 'pukasa_add_asset_movable_post' },
            { label: '3️⃣ Email / WhatsApp', nextStep: 'pukasa_add_asset_movable_email' },
        ]
    },
    pukasa_add_asset_movable_counter: {
        id: 'pukasa_add_asset_movable_counter',
        message: `Branch information can be found [here](https://www.amanahraya.my/contact-us/branch-locator/)\n\n Is there anything else ARIA can assist you with?`,
        options: [
            { label: "1️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    pukasa_add_asset_vehicle: {
        id: 'pukasa_add_asset_vehicle',
        message: `ARIA would like to inform that this administration can be done through the Fast Lane procedure, in which the Letter of Administration will be issued within 30 days from the date of complete document submission. This procedure is only applicable for LA issued by ARB only.\n\n ARIA will list down the required documents.\n\n 1. DECEASED (SIMATI)\n a. Original Death Certificate & 1 copy b. 1 copy of the Deceased’s Birth Certificate (required if the beneficiary is a parent or sibling).\n\n 2. BENEFICIARY'S REPRESENTATIVE\n a. 1 copy of Identity Card / Passport.\n b. 1 copy of supporting document proving relationship to the deceased.\n i. Birth Certificate (if the beneficiary is a child or sibling).\n ii. Marriage Certificate (if the beneficiary is a spouse).\n 3. BUYER (IF THE VEHICLE IS BEING TRANSFERRED TO A BUYER).\n a. 1 copy of Identity Card / Passport.\n b. Proof of vehicle purchase.\n 4. MOVABLE PROPERTY – VEHICLE.\n a. New Grant – 1 copy of the vehicle grant (front only) * Must include vehicle e-ownership search / proof of loan settlement / proof of cash purchase.\n b. Old Grant – 1 copy of the vehicle grant (front and back) * If ownership is still under claim and the loan has been settled, include e-ownership search / proof of loan settlement.\n\n 5. MINIMUM DEPOSIT\n RM50.\n\n 6. ADMINISTRATION PERIOD\n 30 days from the date of file opening and all completed documents sumbitted.\n\n 7. RELATED FORMS\n a. Application Form For Estate Administration.\n b. Document Checklist to be Attached.\n c. Statutory Declaration of Vehicle Ownership Transfer.\n d. Sample – Estate Administration Application Form.\n e. Sample – Statutory Declaration of Vehicle Ownership Transfer.\n\n An administration fee will be charged for the administration of this estate:\n\n a. For total value of RM3,000 and below : RM50.\n b. For total value between RM3,000.01 and RM5,000 : RM150.\n c. For total value between RM5,000.01 and RM10,000 : 5.00% of the vehicle's value.\n\n For your information, the vehicle valuation will be conducted via the website at the branch counter during the file opening process. **{name}** will be required to sign as confirmation of agreement with the issued valuation.\n\n The completed form along with the required documents must be submitted to the same AmanahRaya branch as in the previous administration.\n\n Which delivery method is more convenient for {name]?`,
        options: [
            { label: '1️⃣ Counter ', nextStep: 'pukasa_add_asset_movable_counter' },
            { label: '2️⃣ Post', nextStep: 'pukasa_add_asset_movable_post' },
            { label: '3️⃣ Email / WhatsApp', nextStep: 'pukasa_add_asset_movable_email' },
        ]
    },
    pukasa_add_asset_movable_post: {
        id: 'pukasa_add_asset_movable_post',
        message: `Please post it to the branch where the file was registered.\n\n Branch information can be found [here](https://www.amanahraya.my/contact-us/branch-locator/)\n\n **{name}** will be contacted for online payment once the documents have been received.\n\n Is there anything else ARIA can assist you with?
                `,
        options: [
            { label: "1️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    pukasa_add_asset_movable_email: {
        id: 'pukasa_add_asset_movable_email',
        message: `Clear documents can be sent via email to crmd@arb.com.my or WhatsApp to us at 03-20557557.\n\n **{name}** will be contacted for online payment once the documents have been received.\n\n Is there anything else ARIA can assist you with?`,
        options: [
            { label: "1️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    // The below steps are belong to Pusaka Eng 1
    pusaka_estate: {
        id: 'pusaka_estate',
        message: `Alright, how can ARIA assist you today, **{name}**?`,
        options: [
            { label: '1️⃣ Check current status ', nextStep: 'pusaka_estate_check_status' },
            { label: '2️⃣ Obtaining a copy of the Letter of Administration (LOA)', nextStep: 'pusaka_estate_admin' },
            { label: '3️⃣ Registering additional assets of the deceased', nextStep: 'pukasa_add_asset' },
        ]
    },

    pusaka_estate_check_status: {
        id: 'pusaka_estate_check_status',
        message: `File status can also be checked at [Status](https://online.amanahraya.my/estate_online/)\n\n Kindly provide your name.`,
        options: [],
        expectsInput: true
    },
    pusaka_estate_admin: {
        id: 'pusaka_estate_admin',
        message: `Is **{name}** a deceased's beneficiary?`,
        options: [
            { label: '1️⃣ Yes ', nextStep: 'pusaka_estate_admin_yes' },
            { label: '2️⃣ No', nextStep: 'pusaka_estate_admin_no' },
        ]
    },
    pusaka_estate_admin_yes: {
        id: 'pusaka_estate_admin_yes',
        message: `List of documents required from beneficiary to apply for LA copy : (1) Personal Data Access and Change Form (to be completed by the Applicant) (2) A copy of the Identity Card of theApplicant (3) A copy of the letter from the Small Estates Unit (if applicable).\n\n RELATED FORMS\n a) Personal Data Access and Change Form.\n b) Sample - Personal Data Access and Change Form.\n\n Which delivery method is more convenient for **{name}**?`,
        options: [
            { label: '1️⃣ Counter ', nextStep: 'pusaka_estate_admin_counter' },
            { label: '2️⃣ Post', nextStep: 'pusaka_estate_admin_post' },
            { label: '3️⃣ Email / WhatsApp', nextStep: 'pusaka_estate_register_email' },
        ]
    },
    pusaka_estate_admin_counter: {
        id: 'pusaka_estate_admin_counter',
        message: `Please visit our nearest branch for submission.\n\n Branch information can be found [here](https://www.amanahraya.my/contact-us/branch-locator/)\n\n There will be charges imposed, and the amount will be determined by the branch upon receipt of the documents.\n\n Payment can be made via cash, QR code, or debit/credit card.\n\n A copy of the LA will be handed over to **{name}** within 7 working days.\n\n May ARIA know how this document will be delivered to **{name}**?
        `,
        options: [
            { label: '1️⃣ Collection at the counter ', nextStep: 'collection_counter' },
            { label: '2️⃣ Registered post', nextStep: 'registered_post' },
        ]
    },
    collection_counter: {
        id: 'collection_counter',
        message: `Please [Schedule Appointment](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)\n\n Is there anything else ARIA can assist you with?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    registered_post: {
        id: 'registered_post',
        message: `The documents will be posted to the address stated in the application form. An additional RM10 will be charged.\n\n Is there anything else ARIA can assist you with?
                `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    pusaka_estate_admin_post: {
        id: 'pusaka_estate_admin_post',
        message: `You may post the documents to the branch where the file was registered.\n\n Branch information can be found [here](https://www.amanahraya.my/contact-us/branch-locator/)\n\n There will be charges imposed, and the amount will be determined by the branch upon receipt of the documents.\n\n **{name}** will be contacted by the branch for online payment once the documents are received.\n\n A copy of the LA will be handed over to **{name}** within 7 working days.\n\n May ARIA know how this document will be delivered to **{name}**?
        `,
        options: [
            { label: '1️⃣ Collection at the counter ', nextStep: 'collection_counter' },
            { label: '2️⃣ Registered post', nextStep: 'registered_post' },
        ]
    },
    pusaka_estate_register_email: {
        id: 'pusaka_estate_register_email',
        message: `Clear documents can be sent via email to crmd@arb.com.my or WhatsApp us at 03-2055 7557.\n\n There will be charges imposed, and the amount will be determined by the branch upon receipt of the documents.\n\n **{name}** will be contacted by the branch for online payment once the documents are received.\n\n A copy of the LA will be handed over to **{name}** within 7 working days.\n\n May ARIA know how this document will be delivered to **{name}**?
        `,
        options: [
            { label: '1️⃣ Collection at the counter ', nextStep: 'collection_counter' },
            { label: '2️⃣ Registered post', nextStep: 'registered_post' },
        ]
    },
    pusaka_estate_admin_no: {
        id: 'pusaka_estate_admin_no',
        message: `What is <b>{name}'s</b> relationship with the deceased?`,
        options: [
            { label: "1️⃣ Beneficiary's representative", nextStep: 'pusaka_estate_admin_no_beneficiary' },
            { label: '2️⃣ Lawyer appointed by the beneficiary', nextStep: 'pusaka_estate_admin_no_lawyer_beneficiary' },
        ]
    },
    pusaka_estate_admin_no_beneficiary: {
        id: 'pusaka_estate_admin_no_beneficiary',
        message: `List of documents required from beneficiary's representative to apply for LA copy:\n\n (1) Appointment letter from the beneficiary.\n (2) Personal Data Access and Change Form (to be completed by the same beneficiary as stated in the appointment letter).\n (3) A copy of the Identity Card of both the representative and the appointing beneficiary.\n (4) A copy of the letter from the Small Estate Unit (if applicable)\n\n RELATED FORMS\n a) Personal Data Access and Change Form.\n b) Sample - Personal Data Access and Change Form.\n\n Which delivery method is more convenient for **{name}**?`,
        options: [
            { label: '1️⃣ Counter ', nextStep: 'pusaka_estate_admin_counter' },
            { label: '2️⃣ Post', nextStep: 'pusaka_estate_admin_post' },
            { label: '3️⃣ Email / WhatsApp', nextStep: 'pusaka_estate_register_email' },
        ]
    },
    pusaka_estate_admin_no_lawyer_beneficiary: {
        id: 'pusaka_estate_admin_no_lawyer_beneficiary',
        message: `List of documents required from lawyer to apply for LA copy:\n\n (1) Lawyer's Appointment Notice\n (2) Official Letter from lawyer firm\n (3) Personal Data Access and Change Form (to be completed by the Applicant)\n (4) A copy of the Identity Card of the client\n\n RELATED FORMS\n a) Personal Data Access and Change Form.\n b) Sample - Personal Data Access and Change Form.\n\n Which delivery method is more convenient for **{name}**?`,
        options: [
            { label: '1️⃣ Counter ', nextStep: 'pusaka_estate_admin_counter' },
            { label: '2️⃣ Post', nextStep: 'pusaka_estate_admin_post' },
            { label: '3️⃣ Email / WhatsApp', nextStep: 'pusaka_estate_register_email' },
        ]
    },
    //below steps are for the Will
    will: {
        id: 'will',
        message: `
        Can ARIA know what **{name}** wants to know about?
        `,
        options: [
            { label: '1️⃣ General Inquiry', nextStep: 'will_general_inquiry' },
            { label: '2️⃣ Will Application', nextStep: 'will_application' },
            { label: '3️⃣ Custody of External Wills at ARB', nextStep: 'will_custody' },
        ]
    },
    will_custody: {
        id: 'will_general_inquiry',
        message: `ARIA wishes to inform that an external will refers to a will prepared by a party other than ARB, which can nonetheless be securely stored with ARB.\n\n Advantages of Storing a Will with ARB:\n 1. Guaranteed Security.\n 2. Easy and Organized Access.\n 3. Confidentiality is Preserved.\n 4. Simplifies the Process for Heirs.\n\n **{name}** Whose will would you like to store?`,
        options: [
            { label: '1️⃣ My will ', nextStep: 'will_custody_common' },
            { label: "2️⃣ My client's will ", nextStep: 'will_custody_common' },
            { label: '3️⃣ The will of my customer', nextStep: 'will_custody_common' },
        ]
    },
    will_custody_common: {
        id: 'will_custody_common',
        message: ` May ARIA know who has been appointed as the executor in the will?\n\n An executor refers to the individual appointed in the will to manage the estate after the death of the testator.`,
        options: [
            { label: '1️⃣ Amanah Raya Berhad ', nextStep: 'will_custody_amanah_raya_berhad' },
            { label: "2️⃣ Other than Amanah Raya Berhad ", nextStep: 'other_than_amanah_rayah_berhad' },
        ]
    },
    will_custody_amanah_raya_berhad: {
        id: 'will_custody_amanah_raya_berhad',
        message: `Excellent!!! **{name}** has chosen the right executor.\n\n Please visit any of our nearby branches and bring along the following documents:\n 1. [Will Application Form](https://drive.google.com/file/d/13si6oc13MdvQDy7WYzFWbvz7MTHVYb_9/view)\n 2. Original will.\n 3. Copies of the identification cards of the testator and the will’s witnesses.\n 4. Storage fee: RM400 (payment can be made via cash, debit/credit card, or QR code).\n\n Branch information can be found [here](https://www.amanahraya.my/contact-us/branch-locator/)\n\n **{name}** will receive a confirmation email once the will storage process is completed.\n\n Is there anything else that ARIA can help you with?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    other_than_amanah_rayah_berhad: {
        id: 'other_than_amanah_rayah_berhad',
        message: `Excellent!!! **{name}** has chosen the right executor.\n\n Please visit any of our nearby branches and bring along the following documents:\n 1. [Will Application Form](https://drive.google.com/file/d/13si6oc13MdvQDy7WYzFWbvz7MTHVYb_9/view)\n 2. Original will.\n 3. Copies of the identification card.\n 4. Storage fee: RM600 (payment can be made via cash, debit/credit card, or QR code).\n\n Branch information can be found [here](https://www.amanahraya.my/contact-us/branch-locator/)\n\n **{name}** will receive a confirmation email once the will storage process is completed.\n\n Is there anything else that ARIA can help you with?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    will_application: {
        id: 'will_application',
        message: `Have you previously prepared a will with another party, **{name}**?`,
        options: [
            { label: '1️⃣ Yes ', nextStep: 'will_application_yes' },
            { label: "2️⃣ No ", nextStep: 'will_application_no' },
        ]
    },
    will_application_yes: {
        id: 'will_application',
        message: `Congratulations on taking the step to plan your estate.\n\n Please be informed that any previous will shall be revoked if you create a new will with AmanahRaya, **{name}**.\n\n Would you like ARIA to continue?`,
        options: [
            { label: '1️⃣ Yes ', nextStep: 'will_application_no' },
            { label: "2️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    will_application_no: {
        id: 'will_application_no',
        message: `Would you like to know moreabout Islamic Wills or Non-Islamic Wills,**{name}**?`,
        options: [
            { label: '1️⃣ Muslim Will ', nextStep: 'muslim_wills' },
            { label: "2️⃣ Non-Islamic Wills", nextStep: 'none_muslim_wills' }
        ]
    },
    muslim_wills: {
        id: 'muslim_wills',
        message: `AmanahRaya offers two types of wills:\n\n Basic Will:\n A document that appoints an executor to manage the estate, including the settlement of debts and distribution of the remaining assets in accordance with the faraid (Islamic inheritance law). Additionally, it allows the testator to allocate up to one-third of their total assets to non-beneficiaries.\n\n Comprehensive Will:\n A directive made by an individual prior to death to distribute a portion of their assets to specific recipients, whether beneficiaries or non-beneficiaries, in accordance with Islamic principles. This will aims to ensure fair estate management, including the  settlement of debts and the distribution of up to one-third of the estate to beneficiaries (subject to the respective State Will Enactments and Shariah rulings) and non-beneficiaries, without infringing upon the rightful entitlements of beneficiaries as determined by faraid. It may also include specific instructions such as the guardianship of minor children, fulfillment of financial obligations, donations to charitable organisations, and personal messages to beneficiaries. The comprehensive will ensures clearer estate planning, prevents disputes among beneficiaries, and facilitates a smoother estate administration process after the testator's death.\n\n For a detailed comparison between the Basic and Comprehensive Will, please click: [Will's Services](https://www.amanahraya.my/ms/perkhidmatan-wasiat/)\n\n Which type of will are you interested in, **{name}**?`,
        options: [
            { label: '1️⃣ Basic Will  ', nextStep: 'muslim_wills_basic' },
            { label: "2️⃣ Comprehensive Will", nextStep: 'muslim_wills_comprehensive' }
        ]
    },
    muslim_wills_basic: {
        id: 'muslim_wills_basic',
        message: `Congratulations on taking the step to plan your estate.\n\n Will Executor: AmanahRaya.\n Preparation Time: 1 working day.\n Will Fee: RM500 (includes consultation, preparation, and custodian services).\n\n Shall Aria proceed with the application process?`,
        options: [
            { label: '1️⃣ Please, proceed ', nextStep: 'muslim_wills_basic_proceed' },
            { label: "2️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    muslim_wills_basic_proceed: {
        id: 'muslim_wills_basic_proceed',
        message: `The application can be made in several ways. Which one would you prefer,**{name}**?`,
        options: [
            { label: '1️⃣ MyAmanahRaya Apps ', nextStep: 'muslim_wills_basic_proceed_amanah_raya_app' },
            { label: "2️⃣ Online Will Application ", nextStep: 'muslim_wills_basic_proceed_amanah_raya_app_online' },
            { label: '3️⃣ Counter', nextStep: 'muslim_wills_basic_proceed_counter' },
        ]
    },
    muslim_wills_basic_proceed_amanah_raya_app: {
        id: 'muslim_wills_basic_proceed_amanah_raya_app',
        message: `1. Download the MyAmanahRaya app from Google Play or Apple App Store.\n 2.Register for access.\n 3.Select “Will”.\n 4. Choose a nearby agent for a face-to-face session or proceed directly within the app.\n\n Would **{name}** like to do it through an agent or online?`,
        options: [
            { label: '1️⃣ Agent ', nextStep: 'muslim_wills_basic_proceed_amanah_raya_app_agent' },
            { label: "2️⃣ Online", nextStep: 'muslim_wills_basic_proceed_amanah_raya_app_online' },
        ]
    },
    muslim_wills_basic_proceed_amanah_raya_app_agent: {
        id: 'muslim_wills_basic_proceed_amanah_raya_app_agent',
        message: `1.Select a nearby agent.\n 2.The agent will contact you to schedule an appointment.\n 3.Consultation will be conducted on the agreed date.\n 4.The agent will assist with the application and online payment.\n 5.Print and sign the Basic Will with the agent present.\n 6.The original will is submitted by the agent to the nearest branch.\n 7.A duplicate copy of the will is handed over to you, **{name}**, for safekeeping.\n\n Upon successful receipt and storage of your Original Will by AmanahRaya, you will be sent a confirmation email and a Will e-card.\n\n If you’ve reached this stage, ARIA congratulates you on successfully planning your future.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    muslim_wills_basic_proceed_amanah_raya_app_online: {
        id: 'muslim_wills_basic_proceed_amanah_raya_app_online',
        message: `1. Please visit [Will Writing](https://willwriting.amanahraya.com.my/)\n 2. Register for access.\n 3. Proceed with writing your will and making payment by following the on-screen instructions.\n\n 1. The Basic Will can be printed either by yourself or at our branch.\n 2. If self-printing, please follow the provided online instructions.\n 3. If printing at a branch, please call Talian Mesra 03-2723 7273 to schedule an appointment.\n 4. The signing will take place with our officer on the scheduled date.\n 5. The original will is kept by AmanahRaya, while the duplicate will is given to **{name}** forsafekeeping.\n Upon successful receipt and storage of your Original Will by AmanahRaya, you will be sent a confirmation email and a Will e-card.\n\n If you’ve reached this stage, ARIA congratulates you on successfully planning your future.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    muslim_wills_basic_proceed_counter: {
        id: '',
        message: `Please submit the application form together with the following documents:\n 1. [Basic Will Application Form](https://drive.google.com/file/d/191q6_ZU-Lfr-MkUUexR0OEsrKRh47Pdq/view) \n 2. Copy of the testator’s Identification Card.\n 3. Copy of the beneficiary’s Identification Card.\n 4. Basic Will Fee: RM500 (Payment can be made via cash, debit/credit card, or QR code\n\n Please visit any of our nearest branch. You may schedule an appointment via this link:\n [Schedule Appointment](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)\n\n Branch information can be found [here](https://www.amanahraya.my/contact-us/branch-locator/) \n\n On the Appointment Date:\n 1. You can have a consultation with our officer.\n 2. Submission of documents and payment can be completed on thesame day.\n 3. Signing will take place in the presence of our officer.\n 4. The Original Will will be securely kept by AmanahRaya.\n 5. A Duplicate Will will be handed to you, **{name}**, for safekeeping.\n\n Upon successful receipt and storage of your Original Will by AmanahRaya, you will be sent a confirmation email and a Will e-card.\n\n If you’ve reached this stage, ARIA congratulates you on successfully planning your future.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    muslim_wills_comprehensive: {
        id: 'muslim_wills_comprehensive',
        message: `Congratulations on taking the step to plan your estate.\n\n Will Executor: AmanahRaya Preparation Time: 7 working days Will Fee: RM1,200 (This includes consulltation, preparation, and custodian services).\n\n Shall Aria proceed with the application process?`,
        options: [
            { label: '1️⃣ Please, proceed ', nextStep: 'muslim_wills_comprehensive_proceed' },
            { label: "2️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    muslim_wills_comprehensive_proceed: {
        id: 'muslim_wills_comprehensive_proceed',
        message: `The application can be made in several ways. Which one would you prefer,**{name}**?`,
        options: [
            { label: '1️⃣ MyAmanahRaya Apps ', nextStep: 'muslim_wills_comprehensive_proceed_amanah_raya_app' },
            { label: "2️⃣ Online Will Application ", nextStep: 'muslim_wills_comprehensive_proceed_amanah_raya_app_online' },
            { label: '3️⃣ Counter', nextStep: 'muslim_wills_comprehensive_proceed_counter' },
        ]
    },
    muslim_wills_comprehensive_proceed_amanah_raya_app: {
        id: 'muslim_wills_comprehensive_proceed_amanah_raya_app',
        message: `1. Download the MyAmanahRaya app from Google Play or Apple App Store.\n 2. Register for access.\n 3. Select “Will”.\n 4. Choose a nearby agent for a face-to-face session or proceed directly within the app.\n\n Would **{name}** like to do it through an agent or online?`,
        options: [
            { label: '1️⃣ Agent ', nextStep: 'muslim_wills_comprehensive_proceed_amanah_raya_app_agent' },
            { label: "2️⃣ Online", nextStep: 'muslim_wills_comprehensive_proceed_amanah_raya_app_online' },
        ]
    },
    muslim_wills_comprehensive_proceed_amanah_raya_app_agent: {
        id: 'muslim_wills_comprehensive_proceed_amanah_raya_app_agent',
        message: `1. Our drafter will prepare the draft within 7 working days from the date of application registration and will email it to you.\n 2. Please provide feedback on whether you agree with the draft or require any amendments.\n 3. If you agree, set an appointment at your preferred branch for signing.\n 4. The signing will be done together with our officer on the appointment date.\n 5. The Original Will will be securely kept by AmanahRaya. A Duplicate Will will be handed to you, **{name}**, for safekeeping.\n\n Upon successful receipt and storage of your Original Will by AmanahRaya, you will be sent a confirmation email and a Will e-card.\n\n If you’ve reached this stage, ARIA congratulates you on successfully planning your future.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    muslim_wills_comprehensive_proceed_amanah_raya_app_online: {
        id: 'muslim_wills_comprehensive_proceed_amanah_raya_app_online',
        message: `1. Please visit [Will Writing](https://willwriting.amanahraya.com.my/)\n 2. Register for access.\n 3. Proceed with writing your will and making payment by following the on-screen instructions.\n\n 1. Our drafer will prepare the draft within 7 working days from the date of application registration and will email it to you.\n 2. Please provide feedback on whether you agree with the draft or require anyamendments.\n 3. If you agree, set an appointment at your preferred branch for signing.\n 4. The signing will be done together with our officer on the appointment date.\n 5. The Original Will will be securely kept by AmanahRaya. A Duplicate Will will be handed to you, **{name}**, for safekeeping.\n\n Upon successful receipt and storage of your Original Will by AmanahRaya, you will be sent a confirmation email and a Will e-card.\n\n If you’ve reached this stage, ARIA congratulates you on successfully planning your future.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    muslim_wills_comprehensive_proceed_counter: {
        id: 'muslim_wills_comprehensive_proceed_counter',
        message: `Please submit the application form along with the following documents:\n 1. [Will Application Form](https://drive.google.com/file/d/13si6oc13MdvQDy7WYzFWbvz7MTHVYb_9/view)\n 2. Copy of the testator’s Identification Card.\n 3. Copy of the beneficiary’s Identification Card.\n 4. Copy of the guardian’s Identification Card (if applicable).\n 5. Copies of documents related to assets/liabilities mentioned in the will.\n 6. Comprehensive Will Fee: RM1,200 (Payment can be made via cash, debit/credit card, or QR code).\n.\n Please visit any of our nearest branch. You may schedule an appointment via this link:\n [Schedule Appointment](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)\n\n Branch information can be found [here](https://www.amanahraya.my/contact-us/branch-locator/)\n\n  On the Appointment Date:\n 1. You can have a consultation with our officer.\n 2. Submission of documents and payment can be done on the same day.\n 3. Our drafter will prepare the draft within 7 working days from the date of registration and email it to you.\n 4. Please confirm whether you agree with the content or request amendments.\n 5. If you agree, set an appointment at a nearby branch for the signing process.\n 6. The signing will be done together with our officer on the appointment date.\n 7. The Original Will will be securely kept by AmanahRaya. A Duplicate Will will be handed to you, **{name}**, for safekeeping.\n Upon successful receipt and storage of your Original Will by AmanahRaya, you will be sent a confirmation email and a Will e-card.\n\n If you’ve reached this stage, ARIA congratulates you on successfully planning your future.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    none_muslim_wills: {
        id: 'none_muslim_wills',
        message: `AmanahRaya Offers Two Types of Wills:\n\n Basic Will:\n A document that appoints Amanah Raya Berhad to manage the estate, including debt settlement, in accordance with the Wills Act 1959. This will states only the name of the beneficiary and the share to be received, without detailing the types of assets involved.\n\n Comprehensive Will:\n A more detailed and complete legal document that outlines the testator’s wishes for the management and distribution of their assets after death. It not only includes the appointment of an executor and the distribution of assets to chosen beneficiaries, but may also contain specific instructions such as guardianship of minor children, fulfillment of financial obligations, charitable donations, and personal messages to beneficiaries. A Comprehensive Will ensures clearer estate planning, reduces the likelihood of disputes among beneficiaries, and facilitates the estate administration process after the testator’s passing. For a detailed comparison between the Basic and Comprehensive Will, please click: [Will's Services](https://www.amanahraya.my/ms/perkhidmatan-wasiat/)\n\n Which type of will are you interested in, **{name}**?`,
        options: [
            { label: '1️⃣ Basic Will  ', nextStep: 'muslim_wills_basic' },
            { label: "2️⃣ Comprehensive Will", nextStep: 'muslim_wills_comprehensive' }
        ]
    },
    // The below steps are for will one 
    will_one: {
        id: 'will_one',
        message: `Alright, how can ARIA assist you, **{name}**?`,
        options: [
            { label: '1️⃣ Checking the status of the will ', nextStep: 'retrieve_page1' },
            { label: "2️⃣ Amending a will  ", nextStep: 'will_one_amending_will' },
            { label: '3️⃣ Obtaining a copy of the will', nextStep: 'will_one_will_copy' },
        ]
    },
    will_one_amending_will: {
        id: 'will_one_amending_will',
        message: `May ARIA know the type of will registered at ARB?`,
        options: [
            { label: '1️⃣ Basis ', nextStep: 'will_one_amending_will_basis' },
            { label: "2️⃣ Comprehensive  ", nextStep: 'will_one_amending_will_comprehensive' },
            { label: '3️⃣ Uncertain', nextStep: 'retrieve_page1' },
        ]
    },
    will_one_amending_will_basis: {
        id: 'will_one_amending_will_basis',
        message: ` **{name}** can switch to a Comprehensive Will to specify the types of assets to be distributed to heirs or non-heirs who are entitled to receive assets after death.\n\n 1. [Will Application Form](https://drive.google.com/file/d/13si6oc13MdvQDy7WYzFWbvz7MTHVYb_9/view)\n 2. Copy of the testator’s identification card.\n 3. Copy of the recipient’s identification card.\n 4. Copy of the guardian’s identification card (if applicable).\n 5. Copies of documents for assets mentioned in the will.\n\n Which delivery method is more convenient for **{name}**?`,
        options: [
            { label: '1️⃣ Counter ', nextStep: 'will_one_amending_will_basis_counter' },
            { label: "2️⃣ Via Post  ", nextStep: 'will_one_amending_will_basis_via_post' },
            { label: '3️⃣ Email/ WhatsApp', nextStep: 'will_one_amending_will_basis_via_post_email' },
        ]
    },
    will_one_amending_will_basis_counter: {
        id: 'will_one_amending_will_basis_counter',
        message: `Please visit any of our nearest branch counters. **{name}** may [Schedule an Appointment](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)\n\n Branch information can be found [here](https://www.amanahraya.my/contact-us/branch-locator/)\n\ Is there anything else ARIA can assist you with?\n
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    will_one_amending_will_basis_via_post: {
        id: 'will_one_amending_will_basis_via_post',
        message: `Please post it to the branch where the file was registered.\n\n Branch information can be found at: [Branch Information](https://www.amanahraya.my/contact-us/branch-locator/)\n\n <b>{name}<b> will be contacted for online payment once the documents are received.\n\n Is there anything else ARIA can assist you with?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    will_one_amending_will_basis_via_post_email: {
        id: 'will_one_amending_will_basis_via_post_email',
        message: `Clear documents can be sent via email to crmd@arb.com.my or WhatsApp us at 03-20557557.\n\n <b>{name}<b> will be contacted for online payment once the documents are received.\n\n Is there anything else ARIA can assist you with?`,
        options: []
    },
    will_one_amending_will_comprehensive: {
        id: 'will_one_amending_will_comprehensive',
        message: `**{name}** can make changes to the existing will.\n\n 1. [Will Application Form](https://drive.google.com/file/d/13si6oc13MdvQDy7WYzFWbvz7MTHVYb_9/view)\n 2. Copy of the testator’s identification card.\n 3. Copy of the recipient’s identification card.\n 4. Copy of the guardian’s identification card (if applicable).\n 5. Copies of documents for assets mentioned in the will.\n\n Which delivery method is more convenient for **{name}**?`,
        options: [
            { label: '1️⃣ Counter ', nextStep: 'will_one_amending_will_basis_counter' },
            { label: "2️⃣ Via Post  ", nextStep: 'will_one_amending_will_basis_via_post' },
            { label: '3️⃣ Email/ WhatsApp', nextStep: 'will_one_amending_will_basis_via_post_email' },
        ]
    },
    will_one_will_copy: {
        id: 'will_one_will_copy',
        message: `A copy of the will can be requested by:\n The testator.\n The heirs of the testator.\n The lawyer appointed by the heirs of the testator.\n\n **{name}** would like to obtain a copy of this will for what purpose?`,
        options: [
            { label: '1️⃣ My Will has been misplaced ', nextStep: 'will_one_will_copy_misplaced' },
            { label: "2️⃣ For estate administration  ", nextStep: 'will_one_will_copy_admin' },
        ]
    },
    will_one_will_copy_misplaced: {
        id: 'will_one_will_copy_misplaced',
        message: `Please submit the completed form along with the following documents to the email address crmd@arb.com.my:\n 1. [Personal Data Access and Change Form](https://drive.google.com/file/d/1GUlaRvva8qcofzdsHsYCCWPA59rDFjuw/view)\n 2. Copy of Identification Card.\n 3. Copy of payment receipt.\n Online payment can be made to:\n Company Name: Amanah Raya Berhad\n Bank Name: Maybank\n Account Number: 564155119930\n Payment Amount: RM50\n\n **{name}** will be contacted within 7 working days to collect the copy of the will at the counter.\n\n Is there anything else ARIA can assist you with?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    will_one_will_copy_admin: {
        id: 'will_one_will_copy_admin',
        message: `What is **{name}’s** relationship with the deceased?`,
        options: [
            { label: "1️⃣ Deceased's beneficiary ", nextStep: 'will_one_will_copy_admin_beneficiary' },
            { label: "2️⃣ Lawyer  ", nextStep: 'will_one_will_copy_admin_lawyer' },
        ]
    },
    will_one_will_copy_admin_beneficiary: {
        id: 'will_one_will_copy_admin_beneficiary',
        message: `Please submit the completed form along with the following documents:\n 1. [Personal Data Access and Change Form](https://drive.google.com/file/d/1GUlaRvva8qcofzdsHsYCCWPA59rDFjuw/view)\n 2. Copy of Identification Card and proof of relationship (applicant).\n 3. Copy of deceased's Death Certificate.\n 4. Copy of payment receipt.\n Online payment can be made to:\n Company Name: Amanah Raya Berhad\n Bank Name: Maybank\n Account Number: 564155119930\n Payment Amount: RM50\n The contents of the will will only be read in the presence of the heirs. No copy of the will will be provided.\n\n **{name}** will be contacted within 7 working days to schedule the will reading session date at the counter.\n\n Is there anything else ARIA can assist you with?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    will_one_will_copy_admin_lawyer: {
        id: 'will_one_will_copy_admin_lawyer',
        message: `Please submit the completed form along with the following documents:\n 1. [Personal Data Access and Change Form](https://drive.google.com/file/d/1GUlaRvva8qcofzdsHsYCCWPA59rDFjuw/view)\n 2. Copy of Identification Card and proof of relationship (applicant).\n 3. Copy of deceased's Death Certificate.\n 4. Notice of lawyer’s appointment\n 5. Copy of payment receipt\n Online payment can be made to:\n Company Name: Amanah Raya Berhad\n Bank Name: Maybank\n Account Number: 564155119930\n Payment Amount: RM50\n The contents of the will will only be read in the presence of the heirs. No copy of the will will be provided.\n\n **{name}** will be contacted within 7 working days to schedule the will reading session date at the counter.\n\n Is there anything else ARIA can assist you with?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    // Below steps are belong to Amanah English
    amanah_eng: {
        id: 'amanah_eng',
        message: `What can ARIA assist **{name}** with?`,
        options: [
            { label: '1️⃣ Updating information ', nextStep: 'amanah_eng_updating_information' },
            { label: '2️⃣ Closing a trust account', nextStep: 'amanah_eng_closing_trust_account' },
            { label: '3️⃣ Withdrawal of trust money', nextStep: 'amanah_eng_withdrawal' },
            { label: '4️⃣ Requesting an account statement', nextStep: 'amanah_eng_requesting_account' },
            { label: '5️⃣ Change of guardian', nextStep: 'amanah_eng_change_guardian' },
            { label: '6️⃣ File status', nextStep: 'retrieve_page1' },
        ]
    },
    amanah_eng_updating_information: {
        id: 'amanah_eng_updating_information',
        message: `Please click on the following [Trust Onlin](https://online.amanahraya.my/TRUST_ONLINE/) for updating information.\n\n Is there anything else ARIA can assist you with?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    amanah_eng_closing_trust_account: {
        id: 'amanah_eng_closing_trust_account',
        message: `Please click both of these links, [First Link](https://forms.gle/RDiL93pvWrcZJsKT9) and [Second Link](https://forms.gle/YRRdYh5qMTrWNQKm6), to proceed with the account closure application.\n\n Payment will be made within 14 working days from the date of receipt of complete documents. **{name}** will be contacted if additional information is required.\n\n Is there anything else ARIA can assist you with?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    amanah_eng_withdrawal: {
        id: 'amanah_eng_withdrawal',
        message: `Withdrawal of trust funds is permitted strictly for the benefit and welfare of the beneficiary, or for any purposes explicitly stated in the Trust Deed.\n\n Withdrawals may be made for the following purposes:\n 1. Education\n 2. Medical treatment\n 3. Monthly maintenance\n 4. Festive or religious celebrations\n 5. Other purposes (subject to approval)\n\n Please click on the following [Trust Online](https://online.amanahraya.my/TRUST_ONLINE/) to submit a request for account closure.\n\n Is there anything else ARIA can assist you with?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    amanah_eng_requesting_account: {
        id: 'amanah_eng_requesting_account',
        message: `Please click on the following [Trust Online](https://online.amanahraya.my/TRUST_ONLINE/) to request for account statement.\n\n Is there anything else ARIA can assist you with?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    amanah_eng_change_guardian: {
        id: 'amanah_eng_change_guardian',
        message: `Change of guardian is only allowed under the following circumstances:\n 1. The current guardian has passed away.\n 2. The current guardian is incapacitated and no longer able to fulfil their responsibilities.\n 3. There has been a breach of duty by the current guardian.\n\n To request for change of guardian, the following documents must be submitted:\n 1. A completed Guardian Change Form.\n 2. Court Order (if the guardian was appointed by the Court).\n 3. Guardian Appointment Order (Form H) – if the guardian was appointed through the Small Estate Distribution.\n\n RELATED FORMS\n a. Declaration of Confirmation for Change of Guardian.\n b. Sample - Declaration of Confirmation for Change of Guardian.\n\n Please submit the completed form along with a copy of <b>{name}'s</b> Identification Card to any nearby ARB branch.\n\n Branch information can be found [here](https://www.amanahraya.my/contact-us/branch-locator/). Is there anything else ARIA can assist you with?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    // Below steps are belong to Hibah English
    hibah: {
        id: 'hibah',
        message: `Ok. Before ARIA provides further explanation, here are the concept and pillars of the Hibah product.\n\n Hibah Concept 1. The voluntary transfer of ownership of one’s property to another person during the Donor’s lifetime without expecting any return.\n 2. The property is entrusted to ARB as the trustee for a specified period, in accordance with the Deed of Hibah and the Deed of Trust.\n 3. A formal declaration (akad) will be made for the Donor (Penghibah) to declare the gifting of their property to the Recipient (Penerima Hibah).\n 4. A hibah cannot be revoked, except for those made by a parent/grandparent to their child/grandchild.\n 5. In the event of the Recipient’s death, the gifted property becomes part of the Recipient’s estate and will not be returned to the Donor, except through methods permitted under Shariah law or legislation.\n\n Pillars of Hibah\n\n Donor (Penghibah)\n a) An individual (aged 18 and above) or an organisation.\n b) Of sound mind, mature (baligh), prudent (rasyid), and not bankrupt.\n c) Can be either Muslim or non-Muslim.\n d) Not in a terminal illness that is likely to lead to death.\n\n Recipient (Penerima Hibah)\n a) An individual or an organisation.\n b) A minor recipient may receive the hibah property through a legal guardian (Wali Mal).\n c) Can be either Muslim or non-Muslim.\n\n Property Subject to Hibah\n a) Fully owned by the Donor.\n b) Transferable (no restrictions).\n c) Must exist at the time the contract (akad) is made.\n d) Clearly identified.\n e) Has value.\n\n Offer and Acceptance (Sighah – Ijab and Qabul)\n a) Ijab – The Donor declares the gift of property to the Recipient.\n b) Qabul – The Recipient accepts the gifted property.\n c) Must be conducted in a single contract session.\n d) A legal guardian (Wali Mal) must be appointed if the recipient is a minor or a person with disabilities.\n\n Possession (Qabd)\n a) The Recipient has the authority to deal with the property received.\n b) Possession can be actual (physical) or by legal transfer.\n\n May I know the type of property you wish to Hibah?`,
        options: [
            { label: '1️⃣ Cash ', nextStep: 'hibah_cash' },
            { label: "2️⃣ Property  ", nextStep: 'hibah_property' },
        ]
    },
    hibah_cash: {
        id: 'hibah_cash',
        message: `For cash assets, **{name}** will need to deposit the amount to be given into ARB’s account.\n\n CASH HIBAH TRUST\n\n 1. MINIMUM CAPITAL\n RM20,000.00\n\n 2. ASSETS ELIGIBLE FOR TRUST.\n Movable assets (cash only)\n\n 3. TRUST PERIOD\n As stated in the Trust Deed.\n\n 4. PROFIT DISTRIBUTION\n 3.00% per annum.\n\n 5. REQUIRED DOCUMENTS\n a. Copy of Donor’s Identity Card.\n b. Copy of Recipient’s Identity Card.\n c. Copy of Guardian’s (Wali Mal) Identity Card (if applicable).\n\n 6. RELATED FORMS\n a. Application Form For Hibah AmanahRaya.\n b. Sample - Application Form For Hibah AmanahRaya.\n\n Please visit any of our nearest branch counters to make payment, bringing along the required documents. Payment can be made in cash (limited to RM5,000), cheque, debit/credit card, or online transfer.\n **{name}** may [Schedule An Appointment](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)\n\n for our branches location, please click [here](https://www.amanahraya.my/contact-us/branch-locator/)\n\n 1. On the appointment date, consultation and advisory services can be conducted with our officer.\n 2. Document submission and payment can be completed on the same day.\n **{name}** will be contacted by the branch officer for the preparation of the Trust Deed.\n\n Is there anything else ARIA can assist you with?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    hibah_property: {
        id: 'hibah_property',
        message: `For property assets, they must be free from any encumbrances, and the property title must registered under the Donor's name. The property will be transferred to ARB as the trustee, and the original title deed will be kept by ARB.\n\n Is the property you wish to give is free from any encumbrances, and registered under your name?`,
        options: [
            { label: '1️⃣ Free from encumbrances and the title deed is under my name. ', nextStep: 'hibah_property_title_deed' },
            { label: "2️⃣ Still under loan and the title deed is under my name.  ", nextStep: 'hibah_property_title_deed_under_my_name' },
        ]
    },
    hibah_property_title_deed: {
        id: 'hibah_property_title_deed',
        message: `For this product, several matters need to be noted:\n\n 1. The current valuation of the property will be carried out by ARB through the Valuation and Property Services Department (JPPH).\n 2. The property title will be registered under ARB (as Trustee) and kept by ARB.\n 3. Quit rent and assessment rates must still be paid by the Donor.\n 4. Stamp duty must be settled by the Donor during their lifetime. However, if not done, the Recipient (Penerima Hibah) must pay it first before the transfer of ownership can be completed.\n 5. The property will be transferred to the Recipient after the death of the Donor or as stipulated in the Trust Deed.\n 6. If there are restrictions, approval must first be obtained from the State Authority for the transfer of ownership to ARB as Trustee.\n\n PROPERTY HIBAH TRUST\n\n 1. DEPOSIT\n RM1,240 per property\n\n 2. ELIGIBLE DONORS & BENEFICIARIES\n Can be any individual, agency, organisation, or company.\n\n 3. STAMP DUTY As assessed by the Inland Revenue Board of Malaysia (LHDN)\n\n 4. REQUIRED DOCUMENTS\n a. Copy of Donor’s Identity Card\n b. Copy of Recipient’s Identity Card\n c. Copy of Guardian’s (Wali Mal) Identity Card (if applicable)\n d. Copy of property title deed, latest quit rent proof of payment, and latest assessment bill\n\n 5. RELATED FORMS\n a. Application Form For Hibah AmanahRaya\n b. Sample - Application Form For Hibah AmanahRaya\n\n Please visit any of our nearest branch counters to make payment, bringing along the required documents. Payment can be made in cash (limited to RM5,000), cheque, debit/credit card, or online transfer.\n **{name}** may [Schedule An Appointment](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)\n\n for our branches location, please click [here](https://www.amanahraya.my/contact-us/branch-locator/)\n\n 1. On the appointment date, consultation and advisory services can be conducted with our officer.\n 2. Document submission and payment can be completed on the same day.\n **{name}** will be contacted by the branch officer for the preparation of the Trust Deed.\n\n Is there anything else ARIA can assist you with?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }

        ]
    },
    hibah_property_title_deed_under_my_name: {
        id: 'hibah_property_title_deed_under_my_name',
        message: `For assets that are still under loan, you may opt for another product, namely Hibahku.\n\n Would you be interested to know more?`,
        options: [
            { label: '1️⃣ Yes, I want to know about HibahKu. ', nextStep: 'hibah_ku' },
            { label: "2️⃣ That's all, thank you  ", nextStep: 'exit' },
        ]
    },
    // Below steps are belong to HibahKu
    hibah_ku: {
        id: 'hibah_ku',
        message: `CONCEPT OF HIBAH\n\n 1. The transfer of ownership of one’s property to another person during the owner’s lifetime, voluntarily and without expecting anything in return.\n 2. A contract (akad) will be executed to declare that the Donor (Penghibah) is granting the property to the Recipient of the Hibah (Penerima Hibah).\n 3. A Hibah cannot be revoked, except for a Hibah made by a parent/grandparent to their child/ grandchild.\n 4. In the event of the Recipient’s death, the gifted property becomes part of the Recipient’s estate and will not be returned to the Donor, except through methods permitted by Shariah or the law.\n\n For your information, under the Hibahku product, **{name}** may gift the following assets to any intended recipient:\n i) Properties (whether fully paid or under financing)\n ii) Vehicles (whether fully paid or under financing)\n iii) Joint savings accounts at any bank (only allowed in the state of Selangor)\n\n What asset does **{name}** intend to gift?`,
        options: [
            { label: '1️⃣ Property and / or vehicles, and cash in the bank', nextStep: 'hibah_ku_property_vehicle_cash' },
            { label: '2️⃣ Property and / or vehicle only', nextStep: 'hibah_ku_property_vehicle' },
            { label: '3️⃣ Bank savings(cash only)', nextStep: 'hibah_ku_property_bank_savings' },
        ]
    },
    hibah_ku_property_vehicle_cash: {
        id: 'hibah_ku_property_vehicle_cash',
        message: `A. Cash in Bank\n\n 1. Only joint accounts between the Donor (Penghibah) and the Recipient (Penerima Hibah) are allowed.\n 2. Only applicable for cash assets located in the state of Selangor.\n 3. Savings in ASNB and Tabung Haji are excluded.\n\n B. Property\n 1. Must be free from any encumbrances.\n 2. If still under loan, the property must have full insurance coverage (MRTA/MRTT).\n 3. Must be owned by the Donor.\n 4. Must be transferable (no restrictions).\n 5. Must exist at the time the contract (akad) is made.\n 6. Must be clearly identified.\n 7. Must have value.\n\n C. Vehicle\n 1. Must be free from any encumbrances.\n 2. If still under loan, the vehicle must have full insurance coverage (auto-life insurance).\n 3. Must be owned by the Donor.\n 4. Must exist at the time the contract (akad) is made.\n 5. Must be clearly identified.\n 6. Must have value.\n\n Further explanation will only apply if your information meets the specified criteria.\n\n HIBAHKU\n\n 1. DONOR (PENGHIBAH)\n Individual aged 18 years and above.\n\n 2. RECIPIENT (PENERIMA HIBAH)\n Any individual, except those with mental incapacity.\n\n 3. REQUIRED DOCUMENTS\n a) AmanahRaya HibahKu Application Form (can be obtained at ARB branch counter).\n b) Copy of Donor’s Identity Card.\n c) Copy of Recipient’s Identity Card / Birth Certificate.\n d) Copy of Guardian’s (Wali Mal) Identity Card (if recipient is a minor or a person with disabilities).\n e) Immovable Property.\n i) Copy of Land Title / Strata Title.\n ii) Copy of Sales & Purchase Agreement + MRTA/MRTT (if still under charge).\n iii) Copy of Official Search.\n iv) Copy of Offer Letter from the financial instituion (if still under charge).\n f) Movable Property – Vehicle.\n i) Copy of Vehicle Registration Card.\n ii) Copy of Auto-life Insurance Policy (if still under charge).\n g) Movable Property – Cash in Bank.\n i) Copy of Bank Statement / Bank Account Confirmation.\n\n 4. APPLICABLE FEES\n RM1,500 (1st asset), RM500 (each subsequent asset).\n\n Please visit any of our nearest branch counters to make payment, bringing along the required documents. Payment can be made in cash (limited to RM5,000), cheque, debit/credit card, or online transfer.\n **{name}** may [Schedule An Appointment](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)\n\n for our branches location, please click [here](https://www.amanahraya.my/contact-us/branch-locator/)\n\n 1. On the appointment date, consultation and advisory services can be conducted with our officer.\n 2. Document submission and payment can be completed on the same day.\n 3. **{name}** will be contacted by the branch officer for the preparation of the akad documents.\n\n Is there anything else that ARIA can help you?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    hibah_ku_property_vehicle: {
        id: 'hibah_ku_property_vehicle',
        message: `A. Property\n\n 1. Must be free from any encumbrances.\n 2. If still under loan, the property must have full insurance coverage (MRTA/MRTT).\n 3. Must be owned by the Donor (Penghibah).\n 4. Must be transferable (no restrictions).\n 5. Must exist at the time the contract (akad) is made.\n 6. Must be clearly identified.\n 7. Must have value.\n\n B. Vehicle.\n 1. Must be free from any encumbrances.\n 2. If still under loan, the vehicle must have full insurance coverage (auto-life insurance).\n 3. Must be owned by the Donor.\n 4. Must exist at the time the contract (akad) is made.\n 5. Must be clearly identified.\n 6. Must have value.\n\n Further explanation will only apply if your information meets the specified criteria.\n\n HIBAHKU\n\n 1. DONOR (PENGHIBAH)\n Individual aged 18 years and above.\n\n 2. RECIPIENT (PENERIMA HIBAH)\n Any individual, except those with mental incapacity.\n\n 3. REQUIRED DOCUMENTS\n a) AmanahRaya HibahKu Application Form (can be obtained at ARB branch counter).\n b) Copy of Donor’s Identity Card.\n c) Copy of Recipient’s Identity Card / Birth Certificate.\n d) Copy of Guardian’s (Wali Mal) Identity Card (if recipient is a minor or a person with disabilities).\n e) Immovable Property.\n i) Copy of Land Title / Strata Title.\n ii) Copy of Sales & Purchase Agreement + MRTA/MRTT (if still under charge).\n iii) Copy of Official Search.\n iv) Copy of Offer Letter from the financial instituion (if still under charge).\n f) Movable Property – Vehicle.\n i) Copy of Vehicle Registration Card.\n ii) Copy of Auto-life Insurance Policy (if still under charge).\n g) Movable Property – Cash in Bank.\n i) Copy of Bank Statement / Bank Account Confirmation.\n\n 4. APPLICABLE FEES\n RM1,500 (1st asset), RM500 (each subsequent asset).\n\n Please visit any of our nearest branch counters to make payment, bringing along the required documents. Payment can be made in cash (limited to RM5,000), cheque, debit/credit card, or online transfer.\n **{name}** may [Schedule An Appointment](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)\n\n for our branches location, please click [here](https://www.amanahraya.my/contact-us/branch-locator/)\n\n 1. On the appointment date, consultation and advisory services can be conducted with our officer.\n 2. Document submission and payment can be completed on the same day.\n 3. **{name}** will be contacted by the branch officer for the preparation of the akad documents.\n\n Is there anything else that ARIA can help you?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    hibah_ku_property_bank_savings: {
        id: 'hibah_ku_property_bank_savings',
        message: `A. Cash in Bank\n 1. Only joint accounts between the Donor (Penghibah) and the Recipient (Penerima Hibah) are allowed.\n 2. Only applicable for cash assets located in the state of Selangor.\n 3. Savings in ASNB and Tabung Haji are excluded.\n\n Further explanation will only apply if your information meets the specified criteria.\n\n HIBAHKU\n\n 1. DONOR (PENGHIBAH)\n Individual aged 18 years and above.\n\n 2. RECIPIENT (PENERIMA HIBAH)\n Any individual, except those with mental incapacity.\n\n 3. REQUIRED DOCUMENTS\n a) AmanahRaya HibahKu Application Form (can be obtained at ARB branch counter).\n b) Copy of Donor’s Identity Card.\n c) Copy of Recipient’s Identity Card / Birth Certificate.\n d) Copy of Guardian’s (Wali Mal) Identity Card (if recipient is a minor or a person with disabilities).\n e) Immovable Property.\n i) Copy of Land Title / Strata Title.\n ii) Copy of Sales & Purchase Agreement + MRTA/MRTT (if still under charge).\n iii) Copy of Official Search.\n iv) Copy of Offer Letter from the financial instituion (if still under charge).\n f) Movable Property – Vehicle.\n i) Copy of Vehicle Registration Card.\n ii) Copy of Auto-life Insurance Policy (if still under charge).\n g) Movable Property – Cash in Bank.\n i) Copy of Bank Statement / Bank Account Confirmation.\n\n 4. APPLICABLE FEES\n RM1,500 (1st asset), RM500 (each subsequent asset).\n\n Please visit any of our nearest branch counters to make payment, bringing along the required documents. Payment can be made in cash (limited to RM5,000), cheque, debit/credit card, or online transfer.\n **{name}** may [Schedule An Appointment](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)\n\n for our branches location, please click [here](https://www.amanahraya.my/contact-us/branch-locator/)\n\n 1. On the appointment date, consultation and advisory services can be conducted with our officer.\n 2. Document submission and payment can be completed on the same day.\n 3. **{name}** will be contacted by the branch officer for the preparation of the akad documents.\n\n Is there anything else that ARIA can help you?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    // Below steps are belong to Establishment rightful beneficiaries
    establishment_rightful_beneficiaries: {
        id: 'establishment_rightful_beneficiaries',
        message: `May ARIA know the deceased’s religion at during death?
        `,
        options: [
            { label: '1️⃣ Muslim', nextStep: 'establishment_rightful_muslim' },
            { label: '2️⃣ Non-muslim', nextStep: 'establishment_rightful_non_muslim' },
        ]
    },
    establishment_rightful_muslim: {
        id: 'establishment_rightful_muslim',
        message: `For Muslim, the distribution of assets will follow the Faraid (Islamic Inheritance Law) after deducting debts and executing any wills (if applicable).\n The beneficiary determination information below applies only to standard cases—for example, where beneficiaries such as a spouse or child are still living. It does not cover layered inheritance scenarios, such as when a beneficiary (e.g., a child) has passed away after the deceased.\n\nTo **{name}** knowledge, what was the deceased's marital status?
        `,
        options: [
            { label: '1️⃣ Single', nextStep: 'establishment_rightful_muslim_single' },
            { label: '2️⃣ Married', nextStep: 'establishment_rightful_muslim_married' },
        ]
    },
    establishment_rightful_muslim_single: {
        id: 'establishment_rightful_muslim_single',
        message: `Were the deceased’s parents still alive at the time of deceased's death?
        `,
        options: [
            { label: '1️⃣ Both had passed away ', nextStep: 'establishment_rightful_muslim_single_both_pass_away' },
            { label: '2️⃣ Only the mother is still alive', nextStep: 'establishment_rightful_muslim_single_mother' },
            { label: '3️⃣ Only the father is still alive', nextStep: 'establishment_rightful_muslim_single_father' },
            { label: '4️⃣ Both are still alive', nextStep: 'establishment_rightful_muslim_single_both_still_alive' },
        ]
    },
    establishment_rightful_muslim_single_both_pass_away: {
        id: 'establishment_rightful_muslim_single_both_pass_away',
        message: `Did the deceased have any siblings?`,
        options: [
            { label: '1️⃣ Passed away before the deceased ', nextStep: 'establishment_rightful_muslim_single_both_pass_away_before_deceased' },
            { label: '2️⃣ Male and female siblings', nextStep: 'establishment_rightful_muslim_single_both_pass_away_male_female_siblings' },
            { label: '3️⃣ Female siblings only', nextStep: 'establishment_rightful_muslim_single_both_pass_away_female_siblings' },
            { label: '4️⃣ Male siblings only', nextStep: 'establishment_rightful_muslim_single_both_pass_away_male_siblings' },
            { label: '5️⃣ No sibling', nextStep: 'establishment_rightful_muslim_single_both_pass_away_no_siblings' },
        ]
    },
    establishment_rightful_muslim_single_both_pass_away_before_deceased: {
        id: 'establishment_rightful_muslim_single_both_pass_away',
        message: `The estate will be distributed to other rightful beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Nephew (brother's son).\n 3. Paternal uncle.\n 4. Male cousin (paternal uncle's son).\n 5. Male cousin's son\n\n If there are no eligible beneficiaries, the remainder will be distributed to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_both_pass_away_male_female_siblings: {
        id: 'establishment_rightful_muslim_single_both_pass_away_male_female_siblings',
        message: `The distribution is as follows:\n\n 1. Siblings – Asobah (residue)\n\n * Asobah - The distribution ratio between male and female siblings is 2:1.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_both_pass_away_female_siblings: {
        id: 'establishment_rightful_muslim_single_both_pass_away_female_siblings',
        message: `The distribution is as follows:\n\n 1. Siblings – 1/2 or 2/3\n\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Paternal uncle.\n 3. Male cousin.\n 4. Male cousin’s son.\n If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.\n`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_both_pass_away_male_siblings: {
        id: 'establishment_rightful_muslim_single_both_pass_away_male_siblings',
        message: `The distribution is as follows:\n\n 1. Siblings - Asobah (residue).\n\n *Asobah - The share will be distributed equally among them.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_both_pass_away_no_siblings: {
        id: 'establishment_rightful_muslim_single_both_pass_away_no_siblings',
        message: `The estate will be distributed to other rightful beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Paternal uncle.\n 3. Male cousin (paternal uncle's son).\n 4. Male cousin's son.\n\n *If there are no eligible beneficiaries, the remainder will be distributed to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_mother: {
        id: 'establishment_rightful_muslim_single_mother',
        message: `Did the deceased have any siblings?`,
        options: [
            { label: '1️⃣ Passed away before the deceased ', nextStep: 'establishment_rightful_muslim_single_mother_both_pass_away_before_deceased' },
            { label: '2️⃣ Male and female siblings', nextStep: 'establishment_rightful_muslim_single_mother_pass_away_male_female_siblings' },
            { label: '3️⃣ Female siblings only', nextStep: 'establishment_rightful_muslim_single_mother_pass_away_female_siblings' },
            { label: '4️⃣ Male siblings only', nextStep: 'establishment_rightful_muslim_single_mother_pass_away_male_siblings' },
            { label: '5️⃣ No sibling', nextStep: 'establishment_rightful_muslim_single_mother_pass_away_no_siblings' },
        ]
    },
    establishment_rightful_muslim_single_mother_both_pass_away_before_deceased: {
        id: 'establishment_rightful_muslim_single_mother_both_pass_away_before_deceased',
        message: `The distribution is as follows: 1. Mother - 1/3\n\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Nephew (brother's son).\n 3. Paternal uncle.\n 4. Male cousin (paternal uncle's son).\n 5. Male cousin's son.\n\n *If there are no eligible beneficiaries, the remainder will be distributed to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_mother_pass_away_male_female_siblings: {
        id: 'establishment_rightful_muslim_single_mother_pass_away_male_female_siblings',
        message: `The distribution is as follows:\n\n 1. Mother - 1/3 @ 1/6.\n 2. Maternal siblings – 1/3 or 1/6 (if any).\n 3. Full or paternal siblings – Asabah (residue).\n\n *Asobah - The distribution ratio between male and female siblings is 2:1.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_mother_pass_away_female_siblings: {
        id: 'establishment_rightful_muslim_single_mother_pass_away_female_siblings',
        message: `The distribution is as follows:\n 1. Mother - 1/3 @ 1/6.\n 2. Siblings - 1/2 @ 2/3.\n\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Paternal uncle.\n 3. Male cousin (paternal uncle's son).\n 4. Male cousin's son.\n *If there are no eligible beneficiaries, the remainder will be distributed to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_mother_pass_away_male_siblings: {
        id: 'establishment_rightful_muslim_single_mother_pass_away_male_siblings',
        message: `The distribution is as follows:\n 1. Mother - 1/3 @ 1/6.\n 2. Maternal siblings – 1/3 or 1/6 (if any).\n 3. Full or paternal siblings – Asabah (residue).\n\n *Asobah - The share will be distributed equally among them.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_mother_pass_away_no_siblings: {
        id: 'establishment_rightful_muslim_single_mother_pass_away_no_siblings',
        message: `The distribution is as follows:\n 1. Mother - 1/3 @ 1/6\n\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Paternal uncle.\n 3. Male cousin (paternal uncle's son).\n 4. Male cousin's son.\n\n *If there are no eligible beneficiaries, the remainder will be distributed to the Baitulmal.`,
        options: []
    },
    establishment_rightful_muslim_single_father: {
        id: 'establishment_rightful_muslim_single_father',
        message: `The distribution is as follows:\n\n 1. Father – Asobah(residue).\n\n* The father inherits the entire estate of the deceased.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_both_still_alive: {
        id: 'establishment_rightful_muslim_single_both_still_alive',
        message: `The distribution is as follows:\n\n 1. Mother - 1/3 @ 1/6.\n 2. Father - Asobah(residue).\n\n * The remainder will be distributed to the father.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_married: {
        id: 'establishment_rightful_muslim_married',
        message: `Did the deceased have any children?`,
        options: [
            { label: "1️⃣ No children", nextStep: 'establishment_rightful_muslim_married_no_children' },
            { label: '2️⃣ Son(s) and daughter(s)', nextStep: 'establishment_rightful_muslim_married_son_daughter' },
            { label: '3️⃣ Son(s) only', nextStep: 'establishment_rightful_muslim_married_son_only' },
            { label: '4️⃣ Daughter(s) only', nextStep: 'establishment_rightful_muslim_married_daughter_only' },
        ]
    },
    establishment_rightful_muslim_married_no_children: {
        id: 'establishment_rightful_muslim_married_no_children',
        message: `Were the deceased’s parents still alive at the time of deceased's death?`,
        options: [
            { label: "1️⃣ Both had passed away", nextStep: 'est_righ_muslim_m_no_children_both_pass_away' },
            { label: '2️⃣ Only the mother is still alive', nextStep: 'est_righ_muslim_m_no_children_only_mother_alive' },
            { label: '3️⃣ Only the father is still alive', nextStep: 'est_righ_muslim_m_no_children_only_father_alive' },
            { label: '4️⃣ Both are still alive', nextStep: 'est_righ_muslim_m_no_children_both_alive' },
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away: {
        id: 'est_righ_muslim_m_no_children_both_pass_away',
        message: `Was deceased's spouse still alive at the time of deceased's death?`,
        options: [
            { label: "1️⃣ Yes", nextStep: 'est_righ_muslim_m_no_children_both_pass_away_yes' },
            { label: '2️⃣ No', nextStep: 'est_righ_muslim_m_no_children_both_pass_away_no' },
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_yes: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_yes',
        message: `Did the deceased have any siblings?`,
        options: [
            { label: '1️⃣ Passed away before the deceased', nextStep: 'est_righ_muslim_m_no_children_both_pass_away_yes_both_pass_away_before_deceased' },
            { label: '2️⃣ Male and female siblings', nextStep: 'est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_male_female_siblings' },
            { label: '3️⃣ Female siblings only', nextStep: 'est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_female_siblings' },
            { label: '4️⃣ Male siblings only', nextStep: 'est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_male_siblings' },
            { label: '5️⃣ No sibling', nextStep: 'est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_no_siblings' },
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_yes_both_pass_away_before_deceased: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_yes_both_pass_away_before_deceased',
        message: `The distribution is as follows:\n\n 1. Spouse - 1/2 (Husband), 1/4 (Wife)\n\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Nephew (brother's son).\n 3. Paternal uncle.\n 4. Male cousin (paternal uncle's son).\n 5. Male cousin's son.\n\n If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_male_female_siblings: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_male_female_siblings',
        message: `The distribution is as follows:\n\n 1. Spouse - 1/2 (Husband), 1/4 (Wife).\n 2. Maternal siblings - 1/3 @ 1/6 (if any).\n 3. Full or paternal siblings - Asobah (residue).\n\n *Asobah - The distribution ratio between male and female siblings is 2:1.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_female_siblings: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_female_siblings',
        message: `The distribution is as follows:\n\n 1. Spouse - 1/2 (Husband), 1/4 (Wife).\n 2. Maternal siblings - 1/3 @ 1/6 (if any).\n 3. Full or paternal siblings - 1/2 @ 2/3.\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Paternal uncle.\n 3. Male cousin.\n 4. Male cousin’s son.\n\n If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_male_siblings: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_male_siblings',
        message: `The distribution is asfollows:\n\n 1. Spouse - 1/2 (Husband), 1/4 (Wife).\n 2. Maternal siblings - 1/3 @ 1/6 (if any).\n 3. Full or paternal siblings - Asobah (residue).\n\n *Asobah - The share will be distributed equally among them.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_no_siblings: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_no_siblings',
        message: `The distribution is as follows:\n\n 1. Spouse - 1/2 (Husband), 1/4 (Wife).\n\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Paternal uncle.\n 3. Male cousin.\n 4. Male cousin’s son.\n\n If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_no: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_no',
        message: `
        Did the deceased have any siblings?
        `,
        options: [
            { label: '1️⃣ Passed away before the deceased', nextStep: 'est_righ_muslim_m_no_children_both_pass_away_no_both_pass_away_before_deceased' },
            { label: '2️⃣ Male and female siblings', nextStep: 'est_righ_muslim_m_no_children_both_pass_away_no_pass_away_male_female_siblings' },
            { label: '3️⃣ Female siblings only', nextStep: 'est_righ_muslim_m_no_children_both_pass_away_no_pass_away_female_siblings' },
            { label: '4️⃣ Male siblings only', nextStep: 'est_righ_muslim_m_no_children_both_pass_away_no_pass_away_male_siblings' },
            { label: '5️⃣ No sibling', nextStep: 'est_righ_muslim_m_no_children_both_pass_away_no_pass_away_no_siblings' },
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_no_both_pass_away_before_deceased: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_no_both_pass_away_before_deceased',
        message: `The estate will be distributed to other rightful beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Nephew (brother's son).\n 3. Paternal uncle.\n 4. Male cousin (paternal uncle's son).\n 5. Male cousin's son.\n\n If there are no eligible beneficiaries, the remainder will be distributed to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_no_pass_away_male_female_siblings: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_no_pass_away_male_female_siblings',
        message: `The distribution is as follows:\n\n 1. Maternal siblings – 1/3 or 1/6 (if any).\n 2. Full or paternal siblings – Asabah (residue).\n\n *Asobah - The distribution ratio between male and female siblings is 2:1.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_no_pass_away_female_siblings: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_no_pass_away_female_siblings',
        message: `The distribution is as follows:\n\n 1. Maternal siblings – 1/3 or 1/6 (if any).\n 2. Full or paternal siblings – 1/2 @ 2/3.\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Paternal uncle.\n 3. Male cousin (paternal uncle's son).\n 4. Male cousin's son.\n\n *If there are no eligible beneficiaries, the remainder will be distributed to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_no_pass_away_male_siblings: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_no_pass_away_male_siblings',
        message: `The distribution is as follows:\n\n 1. Maternal siblings – 1/ 3 or 1/6 (if any).\n 2. Full or paternal siblings – Asabah (residue).\n\n *Asobah - The share will be distributed equally among them.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_no_pass_away_no_siblings: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_no_pass_away_no_siblings',
        message: `The estate will be distributed to other rightful beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Paternal uncle.\n 3. Male cousin (paternal uncle's son).\n 4. Male cousin's son.\n\n If there are no eligible beneficiaries, the remainder will be distributed to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive',
        message: `Was deceased's spouse still alive at the time of deceased's death?`,
        options: [
            { label: "1️⃣ Yes", nextStep: 'est_righ_muslim_m_no_children_only_mother_alive_yes' },
            { label: '2️⃣ No', nextStep: 'est_righ_muslim_m_no_children_only_mother_alive_no' },
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_yes: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_yes',
        message: `Did the deceased have any siblings?`,
        options: [
            { label: '1️⃣ Passed away before the deceased', nextStep: 'est_righ_muslim_m_no_children_only_mother_alive_yes_both_pass_away_before_deceased' },
            { label: '2️⃣ Male and female siblings', nextStep: 'est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_male_female_siblings' },
            { label: '3️⃣ Female siblings only', nextStep: 'est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_female_siblings' },
            { label: '4️⃣ Male siblings only', nextStep: 'est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_male_siblings' },
            { label: '5️⃣ No sibling', nextStep: 'est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_no_siblings' },
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_yes_both_pass_away_before_deceased: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_yes_both_pass_away_before_deceased',
        message: `The distribution is as follows:\n\n 1. Mother - 1/3 @ 1/6.\n 2. Spouse - 1/2 (Husband), 1/4 (Wife).\n\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Nephew (brother's son).\n 3. Paternal uncle.\n 4. Male cousin (paternal uncle's son).\n 5. Male cousin's son.\n\n If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_male_female_siblings: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_male_female_siblings',
        message: `The distribution is as follows:\n\n 1. Mother - 1/3 @ 1/6.\n 2. Spouse - 1/2 (Husband), 1/4 (Wife).\n 3. Maternal siblings - 1/3 @ 1/6 (if any).\n 4. Full or paternal siblings - Asobah (residue).\n\n *Asobah - The distribution ratio between male and female siblings is 2:1.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_female_siblings: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_female_siblings',
        message: `The distribution is as follows:\n\n 1. Mother - 1/3 @ 1/6.\n 2.Spouse - 1/2 (Husband), 1/4 (Wife).\n 3. Maternal siblings - 1/3 @ 1/6 (if any).\n 4. Full or paternal siblings - 1/2 @ 2/3.\n\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Paternal uncle.\n 3. Male cousin.\n 4. Male cousin’s son.\n\nIf no eligible beneficiaries are found, the remainder will be given to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_male_siblings: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_male_siblings',
        message: `The distribution is as follows:\n\n 1. Mother - 1/3 @ 1/6.\n 2. Spouse - 1/2 (Husband), 1/4 (Wife).\n 3. Maternal siblings - 1/3 @ 1/6 (if any).\n 4. Full or paternal siblings - Asobah (residue).\n\n *Asobah - The share will be distributed equally among them.`,
        options: []
    },
    est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_no_siblings: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_no_siblings',
        message: `The distribution is as follows:\n\n 1. Mother - 1/3.\n 2. Spouse - 1/2 (Husband), 1/ 4 (Wife).\n\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Paternal uncle.\n 3. Male cousin.\n 4. Male cousin’s son.\n\n If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_no: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_no',
        message: ``,
        options: [
            { label: '1️⃣ Passed away before the deceased', nextStep: 'est_righ_muslim_m_no_children_only_mother_alive_no_both_pass_away_before_deceased' },
            { label: '2️⃣ Male and female siblings', nextStep: 'est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_male_female_siblings' },
            { label: '3️⃣ Female siblings only', nextStep: 'est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_female_siblings' },
            { label: '4️⃣ Male siblings only', nextStep: 'est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_male_siblings' },
            { label: '5️⃣ No sibling', nextStep: 'est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_no_siblings' },
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_no_both_pass_away_before_deceased: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_no_both_pass_away_before_deceased',
        message: `The distribution is as follows:\n\n 1. Mother - 1/3 @ 1/6.\n\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Nephew (brother's son).\n 3. Paternal uncle.\n 4. Male cousin (paternal uncle's son).\n 5. Male cousin's son.\n\n If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_male_female_siblings: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_male_female_siblings',
        message: `The distribution is as follows:\n\n 1. Mother - 1/3 @ 1/6.\n 2. Maternal siblings - 1/3 @ 1/6 (if any).\n 3. Full or paternal siblings - Asobah (residue).\n\n *Asobah - The distribution ratio between male and female siblings is 2:1.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_female_siblings: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_female_siblings',
        message: `The distribution is as follows:\n\n 1. Mother - 1/3 @ 1/6.\n 2. Maternal siblings - 1/3 @ 1/6 (if any).\n 3. Full or paternal siblings - 1/2 @ 2/3.\n\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Paternal uncle.\n 3. Male cousin.\n 4. Male cousin’s son.\n\n If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_male_siblings: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_male_siblings',
        message: `The distribution is as follows:\n\n 1. Mother - 1/3 @ 1/6.\n 2. Maternal siblings - 1/3 @ 1/6 (if any).\n 3. Full or paternal siblings - Asobah (residue).\n\n *Asobah - The share will be distributed equally among them.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_no_siblings: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_no_siblings',
        message: `The distribution is as follows:\n\n 1. Mother - 1/3.\n\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Paternal uncle.\n 3. Male cousin.\n 4. Male cousin’s son.\n\n If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_father_alive: {
        id: 'est_righ_muslim_m_no_children_only_father_alive',
        message: `Was deceased's spouse still alive at the time of deceased's death?`,
        options: [
            { label: '1️⃣ Yes', nextStep: 'est_righ_muslim_m_no_children_only_father_alive_yes' },
            { label: '2️⃣ No', nextStep: 'est_righ_muslim_m_no_children_only_father_alive_no' },
        ]
    },
    est_righ_muslim_m_no_children_only_father_alive_yes: {
        id: 'est_righ_muslim_m_no_children_only_father_alive_yes',
        message: `The distribution is as follows:\n\n 1. Father - Asobah (residue).\n 2. Spouse - 1/2 (Husband), 1/4 (Wife)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_father_alive_no: {
        id: 'est_righ_muslim_m_no_children_only_father_alive_no',
        message: `The distribution is as follows:\n\n 1. Father - Asobah (residue).\n\n * The father inherits the entire estate of the deceased.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_alive: {
        id: 'est_righ_muslim_m_no_children_both_alive',
        message: `Was deceased's spouse still alive at the time of deceased's death?`,
        options: [
            { label: '1️⃣ Yes', nextStep: 'est_righ_muslim_m_no_children_both_alive_yes' },
            { label: '2️⃣ No', nextStep: 'est_righ_muslim_m_no_children_both_alive_no' },
        ]
    },
    est_righ_muslim_m_no_children_both_alive_yes: {
        id: 'est_righ_muslim_m_no_children_both_alive_yes',
        message: `The distribution is as follows:\n\n 1. Mother - 1/3 @ 1/6.\n 2. Father - Asobah(residue).\n 3. Spouse - 1/2 (Husband), 1/4 (Wife).\n\n * The remainder will be distributed to the father.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_alive_no: {
        id: 'est_righ_muslim_m_no_children_both_alive_no',
        message: `The distribution is as follows:\n\n 1. Mother - 1/3 @ 1/6.\n 2. Father - Asobah (residue).\n\n * The remainder will be distributed to the father.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_married_son_daughter: {
        id: 'establishment_rightful_muslim_married_son_daughter',
        message: `Were the deceased’s parents still alive at the time of deceased's death?`,
        options: [
            { label: '1️⃣ Father / Mother is still alive', nextStep: 'es_righ_muslim_m_son_daughter_father_or_mother' },
            { label: '2️⃣ Both are still alive', nextStep: 'es_righ_muslim_m_son_daughter_both_alive' },
            { label: '3️⃣ Both had passed away', nextStep: 'es_righ_muslim_m_son_daughter_both_pass_away' },
        ]
    },
    es_righ_muslim_m_son_daughter_father_or_mother: {
        id: 'es_righ_muslim_m_son_daughter_father_or_mother',
        message: `Was deceased's spouse still alive at the time of deceased's death?`,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_righ_muslim_m_son_daughter_father_or_mother_yes' },
            { label: '2️⃣ No', nextStep: 'es_righ_muslim_m_son_daughter_father_or_mother_no' },
        ]
    },
    es_righ_muslim_m_son_daughter_father_or_mother_yes: {
        id: 'es_righ_muslim_m_son_daughter_father_or_mother_yes',
        message: `The distribution is as follows:\n\n 1. Father @ Mother - 1/6.\n 2. Spouse - 1/4 (Husband), 1/8 (Wife).\n 3. Children- Asobah (residue).\n\n *Asobah - The distribution ratio between male and female siblings is 2:1.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_muslim_m_son_daughter_father_or_mother_no: {
        id: 'es_righ_muslim_m_son_daughter_father_or_mother_no',
        message: `The distribution is as follows:\n\n 1. Father @ Mother - 1/6.\n 2. Children - Asobah (residue).\n\n *Asobah - The distribution ratio between male and female siblings is 2:1.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_muslim_m_son_daughter_both_alive: {
        id: 'es_righ_muslim_m_son_daughter_both_alive',
        message: `Was deceased's spouse still alive at the time of deceased's death?`,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_righ_muslim_m_son_daughter_both_alive_yes' },
            { label: '2️⃣ No', nextStep: 'es_righ_muslim_m_son_daughter_both_alive_no' },
        ]
    },
    es_righ_muslim_m_son_daughter_both_alive_yes: {
        id: 'es_righ_muslim_m_son_daughter_both_alive_yes',
        message: `The distribution is as follows:\n\n 1. Father - 1/6.\n 2. Mother - 1/6.\n 3. Spouse - 1/4 (Husband), 1/8 (Wife).\n 4. Children - Asobah (residue).\n\n *Asobah - The distribution ratio between male and female siblings is 2:1.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_muslim_m_son_daughter_both_alive_no: {
        id: 'es_righ_muslim_m_son_daughter_both_alive_no',
        message: `The distribution is as follows:\n\n 1. Father - 1/6.\n 2. Mother - 1/6.\n 3. Children - Asobah (residue).\n\n *Asobah - The distribution ratio between male and female siblings is 2:1.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_muslim_m_son_daughter_both_pass_away: {
        id: 'es_righ_muslim_m_son_daughter_both_pass_away',
        message: `Was deceased's spouse still alive at the time of deceased's death?`,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_righ_muslim_m_son_daughter_both_pass_away_yes' },
            { label: '2️⃣ No', nextStep: 'es_righ_muslim_m_son_daughter_both_pass_away_no' },
        ]
    },
    es_righ_muslim_m_son_daughter_both_pass_away_yes: {
        id: 'es_righ_muslim_m_son_daughter_both_pass_away_yes',
        message: `The distribution is as follows:\n\n 1. Spouse - 1/4 (Husband), 1/8 (Wife).\n 2. Children - Asobah (residue).\n\n *Asobah - The distribution ratio between male and female siblings is 2:1.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_muslim_m_son_daughter_both_pass_away_no: {
        id: 'es_righ_muslim_m_son_daughter_both_pass_away_no',
        message: `Children - Asobah (residue)\n\n *Asobah - The distribution ratio between male and female siblings is 2:1`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_married_son_only: {
        id: 'establishment_rightful_muslim_married_son_only',
        message: `Was deceased's spouse still alive at the time of deceased's death?`,
        options: [
            { label: '1️⃣ Father / Mother is still alive', nextStep: 'es_right_muslim_m_son_only_father_or_mother' },
            { label: '2️⃣ Both are still alive', nextStep: 'es_right_muslim_m_son_only_both_alive' },
            { label: '3️⃣ Both had passed away', nextStep: 'es_right_muslim_m_son_only_both_pass_away' },
        ]
    },
    es_right_muslim_m_son_only_father_or_mother: {
        id: 'es_right_muslim_m_son_only_father_or_mother',
        message: `Was deceased's spouse still alive at the time of deceased's death?`,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_right_muslim_m_son_only_father_or_mother_yes' },
            { label: '2️⃣ No', nextStep: 'es_right_muslim_m_son_only_father_or_mother_no' },
        ]
    },
    es_right_muslim_m_son_only_father_or_mother_yes: {
        id: 'es_right_muslim_m_son_only_father_or_mother_yes',
        message: `The distribution is as follows:\n\n 1. Father @ Mother - 1/6.\n 2. Spouse - 1/4(Husband), 1/8 (Wife).\n 3. Children - Asobah(residue).\n\n *Asobah - The share will be distributed equally among them.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_son_only_father_or_mother_no: {
        id: 'es_right_muslim_m_son_only_father_or_mother_no',
        message: `The distribution is as follows:\n\n 1. Father @ Mother - 1/6.\n 2. Children - Asobah (residue).\n\n *Asobah - The share will be distributed equally among them.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_son_only_both_alive: {
        id: 'es_right_muslim_m_son_only_both_alive',
        message: `Was deceased's spouse still alive at the time of deceased's death?`,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_right_muslim_m_son_only_both_alive_yes' },
            { label: '2️⃣ No', nextStep: 'es_right_muslim_m_son_only_both_alive_no' },
        ]
    },
    es_right_muslim_m_son_only_both_alive_yes: {
        id: 'es_right_muslim_m_son_only_both_alive_yes',
        message: `The distribution is as follows:\n\n 1. Father - 1/6.\n 2. Mother - 1/6.\n 3. Spouse - 1/4 (Husband), 1/8 (Wife).\n 4. Children - Asobah (residue).\n\n *Asobah - The share will be distributed equally among them.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_son_only_both_alive_no: {
        id: 'es_right_muslim_m_son_only_both_alive_no',
        message: `The distribution is as follows:\n\n 1. Father - 1/6.\n 2. Mother - 1/6.\n 3. Children - Asobah (residue).\n\n *Asobah - The share will be distributed equally among them.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_son_only_both_pass_away: {
        id: 'es_right_muslim_m_son_only_both_pass_away',
        message: `Was deceased's spouse still alive at the time of deceased's death?`,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_right_muslim_m_son_only_both_pass_away_yes' },
            { label: '2️⃣ No', nextStep: 'es_right_muslim_m_son_only_both_pass_away_no' },
        ]
    },
    es_right_muslim_m_son_only_both_pass_away_yes: {
        id: 'es_right_muslim_m_son_only_both_pass_away_yes',
        message: `The distribution is as follows:\n\n 1. Spouse - 1/4 (Husband), 1/8 (Wife).\n 2. Children - Asobah (residue).\n\n *Asobah - The share will be distributed equally among them.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_son_only_both_pass_away_no: {
        id: 'es_right_muslim_m_son_only_both_pass_away_no',
        message: `The distribution is as follows:\n\n 1. Children - Asobah (residue)\n\n *Asobah - The share will be distributed equally among them.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_married_daughter_only: {
        id: 'establishment_rightful_muslim_married_daughter_only',
        message: `Were the deceased’s parents still alive at the time of deceased's death?`,
        options: [
            { label: '1️⃣ Mother is still alive', nextStep: 'es_right_muslim_m_daughter_only_mother_alive' },
            { label: '2️⃣ Father is still alive', nextStep: 'es_right_muslim_m_daughter_only_father_alive' },
            { label: '3️⃣ Both are still alive', nextStep: 'es_right_muslim_m_daughter_only_both_alive' },
            { label: '4️⃣ Both had pass away', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away' },
        ]
    },
    es_right_muslim_m_daughter_only_mother_alive: {
        id: 'es_right_muslim_m_daughter_only_mother_alive',
        message: `Was deceased's spouse still alive at the time of deceased's death?`,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_right_muslim_m_daughter_only_mother_alive_yes' },
            { label: '2️⃣ No', nextStep: 'es_right_muslim_m_daughter_only_mother_alive_no' },
        ]
    },
    es_right_muslim_m_daughter_only_mother_alive_yes: {
        id: 'es_right_muslim_m_daughter_only_mother_alive_yes',
        message: `Did the deceased have any siblings?`,
        options: [
            { label: '1️⃣ Yes and still alive', nextStep: 'es_right_muslim_m_daughter_only_mother_alive_yes_siblings' },
            { label: '2️⃣ Passed away before the deceased', nextStep: 'es_right_muslim_m_daughter_only_mother_alive_yes_passed_away_sibling' },
            { label: '3️⃣ No siblings', nextStep: 'es_right_muslim_m_daughter_only_mother_alive_yes_no_siblings' },
        ]
    },
    es_right_muslim_m_daughter_only_mother_alive_yes_siblings: {
        id: 'es_right_muslim_m_daughter_only_mother_alive_yes_siblings',
        message: `The distribution is as follows:\n\n 1. Mother - 1/6.\n 2. Spouse - 1/4 (Husband), 1/8 (Wife).\n 3. Children - 1/2 @ 2/3.\n 4. Siblings - Asobah (residue).\n\n* Siblings refer only to full siblings or paternal siblings, and they will inherit only if there is a remaining balance. Maternal siblings do not inherit in this situation.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_mother_alive_yes_passed_away_sibling: {
        id: 'es_right_muslim_m_daughter_only_mother_alive_yes_passed_away_sibling',
        message: `The distribution is as follows:\n\n 1. Mother - 1/6.\n 2. Spouse - 1/4 (Husband), 1/8 (Wife).\n 3. Children - 1/2 @ 2/3.\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Nephew (brother's son).\n 3. Paternal uncle.\n 4. Male cousin (paternal uncle's son).\n 5. Male cousin's son.\n\n If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.`,
        options: []
    },
    es_right_muslim_m_daughter_only_mother_alive_yes_no_siblings: {
        id: 'es_right_muslim_m_daughter_only_mother_alive_yes_no_siblings',
        message: `The distribution is as follows:\n\n 1. Mother - 1/6.\n 2. Spouse - 1/4 (Husband), 1/8 (Wife).\n 3. Children - 1/2 @ 2/3.\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Paternal uncle.\n 3. Male cousin (paternal uncle's son).\n 4. Male cousin's son.\n\n If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_mother_alive_no: {
        id: 'es_right_muslim_m_daughter_only_mother_alive_no',
        message: `Did the deceased have any siblings?`,
        options: [
            { label: '1️⃣ Yes and still alive', nextStep: 'es_right_muslim_m_daughter_only_mother_alive_no_siblings' },
            { label: '2️⃣ Passed away before the deceased', nextStep: 'es_right_muslim_m_daughter_only_mother_alive_no_passed_away_sibling' },
            { label: '3️⃣ No siblings', nextStep: 'es_right_muslim_m_daughter_only_mother_alive_no_no_siblings' },
        ]
    },
    es_right_muslim_m_daughter_only_mother_alive_no_siblings: {
        id: 'es_right_muslim_m_daughter_only_mother_alive_no_siblings',
        message: `The distribution is as follows:\n\n 1. Mother - 1/6.\n 2. Anak - 1/2 @ 2/3.\n 3. Children - 1/2 @ 2/3.\n 4. Siblings - Asobah (residue).\n\n *Siblings refer only to full siblings or paternal siblings, and they will inherit only if there is a remaining balance. Maternal siblings do not inherit in this situation.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_mother_alive_no_passed_away_sibling: {
        id: 'es_right_muslim_m_daughter_only_mother_alive_no_passed_away_sibling',
        message: `The distribution is as follows:\n\n 1. Mother - 1/6.\n 2. Children - 1/2 @ 2/3.\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Nephew (brother's son).\n 3. Paternal uncle.\n 4. Male cousin (paternal uncle's son).\n 5. Male cousin's son.\n\n If no eligible beneficiaries are found, the remainder will be given to the Baitulmal`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_mother_alive_no_no_siblings: {
        id: 'es_right_muslim_m_daughter_only_mother_alive_no_no_siblings',
        message: `The distribution is as follows:\n\n 1. Mother - 1/6.\n 2. Children - 1/2 @ 2/3.\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Paternal uncle.\n 3. Male cousin (paternal uncle's son).\n 4. Male cousin's son.\n\n If no eligible beneficiaries are found, the remainder will be given to the Baitulmal
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_father_alive: {
        id: 'es_right_muslim_m_daughter_only_father_alive',
        message: `Was deceased's spouse still alive at the time of deceased's death?`,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_right_muslim_m_daughter_only_father_alive_yes' },
            { label: '2️⃣ No', nextStep: 'es_right_muslim_m_daughter_only_father_alive_no' },
        ]
    },
    es_right_muslim_m_daughter_only_father_alive_yes: {
        id: 'es_right_muslim_m_daughter_only_father_alive_yes',
        message: `The distribution is as follows:\n\n 1. Father - 1/6 + Asobah (residue).\n 2. Spouse - 1/4 (Husband), 1/8 (Wife).\n 3. Children - 1/2 @ 2/3.\n\n *Asobah - The residue will be distributed to the father (if any)`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_father_alive_no: {
        id: 'es_right_muslim_m_daughter_only_father_alive_no',
        message: ` The distribution is as follows:\n\n 1. Father - 1/6 + Asobah (residue).\n 2. Children - 1/2 @ 2/3.\n\n *Asobah - The residue will be distributed to the father (if any)
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_both_alive: {
        id: 'es_right_muslim_m_daughter_only_both_alive',
        message: `Was deceased's spouse still alive at the time of deceased's death?`,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_right_muslim_m_daughter_only_both_alive_yes' },
            { label: '2️⃣ No', nextStep: 'es_right_muslim_m_daughter_only_both_alive_no' },
        ]
    },
    es_right_muslim_m_daughter_only_both_alive_yes: {
        id: 'es_right_muslim_m_daughter_only_both_alive_yes',
        message: `The distribution is as follows:\n\n 1. Mother - 1/6.\n 2. Father - 1/6 + Asobah (residue).\n 3. Spouse - 1/4 (Husband), 1/8 (Wife).\n 4. Children - 1/2 @ 2/3.\n\n *Asobah - The residue will be distributed to the father (if any)
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_both_alive_no: {
        id: 'es_right_muslim_m_daughter_only_both_alive_no',
        message: `The distribution is as follows:\n\n 1. Mother - 1/6.\n 2. Father - 1/6 + Asobah (residue).\n 3. Children - 1/2 @ 2/3.\n\n *Asobah - The residue will be distributed to the father (if any)
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away',
        message: `Was deceased's spouse still alive at the time of deceased's death?`,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away_yes' },
            { label: '2️⃣ No', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away_no' },
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away_yes: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away_yes',
        message: `Did the deceased have any siblings?`,
        options: [
            { label: '1️⃣ Yes and still alive', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away_yes_siblings' },
            { label: '2️⃣ Passed away before the deceased', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away_yes_passed_away_sibling' },
            { label: '3️⃣ No siblings', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away_yes_no_siblings' },
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away_yes_siblings: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away_yes_siblings',
        message: `The distribution is as follows:\n\n 1. Spouse - 1/4 (Husband), 1/8 (Wife).\n 2. Children - 1/2 @ 2/3.\n 3. Siblings - Asobah (residue).\n\n *Siblings refer only to full siblings or paternal siblings, and they will inherit only if there is a remaining balance. Maternal siblings do not inherit in this situation.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away_yes_passed_away_sibling: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away_yes_passed_away_sibling',
        message: `The distribution is as follows:\n\n 1. Spouse - 1/4 (Husband), 1/8 (Wife).\n 2. Children - 1/2 @ 2/3.\n\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Nephew (brother's son).\n 3. Paternal uncle.\n 4. Male cousin (paternal uncle's son).\n 5. Male cousin's son.\n\n If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away_yes_no_siblings: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away_yes_no_siblings',
        message: `The distribution is as follows:\n\n 1. Spouse - 1/4 (Husband), 1/8 (Wife).\n 2. Children - 1/2 @ 2/3.\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Paternal uncle.\n 3. Male cousin (paternal uncle's son).\n 4. Male cousin's son.\n\n If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away_no: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away_no',
        message: `Did the deceased have any siblings?`,
        options: [
            { label: '1️⃣ Yes and still alive', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away_no_siblings' },
            { label: '2️⃣ Passed away before the deceased', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away_no_passed_away_sibling' },
            { label: '3️⃣ No siblings', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away_no_no_siblings' },
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away_no_siblings: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away_no_siblings',
        message: `The distribution is as follows:\n\n 1. Children - 1/2 @ 2/3.\n 2. Siblings - Asobah (residue).\n\n *Siblings refer only to full siblings or paternal siblings, and they will inherit only if there is a remaining balance. Maternal siblings do not inherit in this situation.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away_no_passed_away_sibling: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away_no_passed_away_sibling',
        message: `The distribution is as follows:\n\n 1. Children - 1/2 @ 2/3.\n\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Nephew (brother's son). 3. Paternal uncle.\n 4. Male cousin (paternal uncle's son).\n 5. Male cousin's son.\n\n If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away_no_no_siblings: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away_no_no_siblings',
        message: `The distribution is as follows:\n\n 1. Children - 1/2 @ 2/3.\n\n *The remaining portion will be distributed to other eligible beneficiaries in the following order:\n\n 1. Paternal grandfather.\n 2. Paternal uncle.\n 3. Male cousin (paternal uncle's son).\n 4. Male cousin's son.\n\n If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_non_muslim: {
        id: 'establishment_rightful_non_muslim',
        message: `For non-Muslim, if no will was left, the estate administration will follow the Distribution Act 1958, after deducting any debts (if applicable).\n\n The beneficiary determination information below applies only to standard cases—for example, where beneficiaries such as a spouse or child are still living. It does not cover layered inheritance scenarios, such as when a beneficiary (e.g., a child) has passed away after the deceased.\n\n To **{name}** knowledge, what was the deceased's marital status?`,
        options: [
            { label: '1️⃣ Single', nextStep: 'establishment_rightful_non_muslim_single' },
            { label: '2️⃣ Married', nextStep: 'establishment_rightful_non_muslim_married' },
        ]
    },
    establishment_rightful_non_muslim_single: {
        id: 'establishment_rightful_non_muslim_single',
        message: `Were the deceased’s parents still alive at the time of deceased's death?`,
        options: [
            { label: '1️⃣ Both or one of them is still alive', nextStep: 'es_right_non_m_single_alive' },
            { label: '2️⃣ Both had passed away', nextStep: 'es_right_non_m_single_passed_away' },
        ]
    },
    es_right_non_m_single_alive: {
        id: 'es_right_non_m_single_alive',
        message: `1. Both are still alive – The estate will be distributed equally between them.\n\n 2. One of them is still alive – The surviving parent will inherit the entire estate of the deceased.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_non_m_single_passed_away: {
        id: 'es_right_non_m_single_passed_away',
        message: `Did the deceased have any siblings?`,
        options: [
            { label: '1️⃣ Yes and still alive', nextStep: 'es_right_non_m_single_passed_away_alive' },
            { label: '2️⃣ Passed away before the deceased', nextStep: 'es_right_non_m_single_passed_away_sibling' },
            { label: '3️⃣ No siblings', nextStep: 'es_right_non_m_single_passed_away_sibling' },
        ]
    },
    es_right_non_m_single_passed_away_alive: {
        id: 'es_right_non_m_single_passed_away_alive',
        message: `The deceased’s siblings will inherit the entire estate. If there is more than one sibling, the estate will be divided equally among them.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_non_m_single_passed_away_sibling: {
        id: 'es_right_non_m_single_passed_away_sibling',
        message: `If the deceased still had any of the following relatives alive at the time of death, they are eligible to inherit the estate (in order of priority):\n\n 1. Grandfather / Grandmother.\n 2. Uncle / Aunt.\n 3. Great-grandfather / Great-grandmother.\n 4. Great-uncle / Great-aunt.\n\n However, if the deceased also had none of the above relatives, the estate will be passed to the Government under Bona Vacantia.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_non_muslim_married: {
        id: 'establishment_rightful_non_muslim_married',
        message: `Who were the deceased’s surviving beneficiaries at the time deceased's death?`,
        options: [
            { label: '1️⃣ Parents, spouse and children ', nextStep: 'es_righ_non_m_married_parent_spouse_child' },
            { label: '2️⃣ Spouse and children only', nextStep: 'es_righ_non_m_married_spouse_child_only' },
            { label: '3️⃣ Parents and children only', nextStep: 'es_righ_non_m_married_parent_child_only' },
            { label: '4️⃣ Parents and spouse only', nextStep: 'es_righ_non_m_married_parent_spouse_only' },
            { label: '5️⃣ Parents / spouse / children only', nextStep: 'es_righ_non_m_married_parent_spouse_child_only' },
            { label: '6️⃣ Siblings only', nextStep: 'es_righ_non_m_married_siblings_only' },
            { label: '7️⃣ No surviving beneficiaries', nextStep: 'es_righ_non_m_married_no_survive' },
        ]
    },
    es_righ_non_m_married_parent_spouse_child: {
        id: 'es_righ_non_m_married_parent_spouse_child',
        message: `The distributions is as follows:\n\n 1. Parent(s): 1/4.\n 2. Spouse : 1/4.\n 3. Children : 2/4.\n\n *If both parents are still alive, the portion will be shared equally.\n\n *If there is more than one children, the portion will be divided equally among them.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_non_m_married_spouse_child_only: {
        id: 'es_righ_non_m_married_spouse_child_only',
        message: `The distributions is as follows:\n\n 1. Spouse : 1/3.\n 2. Children : 2/3.\n\n *If there is more than one children, the portion will be divided equally among them`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_non_m_married_parent_child_only: {
        id: 'es_righ_non_m_married_parent_child_only',
        message: `The distributions is as follows:\n\n 1. Parent(s): 1/3.\n 2. Children : 2/3.\n\n *If both parents are still alive, the portion will be shared equally.\n\n *If there is more than one children, the portion will be divided equally among them.`,
        options: []
    },
    es_righ_non_m_married_parent_spouse_only: {
        id: 'es_righ_non_m_married_parent_spouse_only',
        message: `The distributions is as follows:\n\n 1. Spouse : 1/2.\n 2. Parent(s) : 1/2.\n\n *If both parents are stillalive, the portion will be shared equally.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_non_m_married_parent_spouse_child_only: {
        id: 'es_righ_non_m_married_parent_spouse_child_only',
        message: `The surviving beneficiaries will inherit the entire estate of the deceased. If there is more than one, the estate will be divided equally among them.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_non_m_married_siblings_only: {
        id: 'es_righ_non_m_married_siblings_only',
        message: `If there are no surviving parents, spouse, or children, the deceased’s siblings will inherit the entire estate. If there is more than one sibling, the estate will be divided equally among them.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_non_m_married_no_survive: {
        id: 'es_righ_non_m_married_no_survive',
        message: `If the deceased still had any of the following relatives alive at the time of death, they are eligible to inherit the estate (in order of priority):\n\n 1. Grandfather / Grandmother.\n 2. Uncle / Aunt.\n 3. Great-grandfather / Great-grandmother.\n 4. Great-uncle / Great-aunt.\n\n However, if the deceased also had none of the above relatives, the estate will be passed to the Government under Bona Vacantia.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    exit: {
        id: 'exit',
        message: 'Thank you. Feel free to return anytime!',
        options: []
    },
    office_hour: {
        id: 'office_hour',
        message: `Please wait while I am transfering you to the agent`,
        options: []
    },
    // Bahasa Melayu (MY) page starts here
    bahasa_melayu: {
        id: 'bahasa_melayu',
        message: `Adakah **{name}** pelanggan sedia ada kami?`,
        options: [
            { label: '1️⃣ Tidak, saya ingin buat pertanyaan', nextStep: 'no_page1_my' },
            { label: '2️⃣ Ya, saya telah mempunyai nombor pendaftaran/rujukan fail di ARB', nextStep: 'yes_page1_my' },
            { label: '3️⃣ Saya ingin tahu berkenaan promosi', nextStep: 'i_would_like_my' },
        ]
    },
    no_page1_my: {
        id: 'no_page1_my',
        message: `Adakah **{name}** pelanggan sedia ada kami?`,
        options: [
            { label: "1️⃣ Saya ingin uruskan harta orang yang telah meninggal dunia", nextStep: 'pusaka_my' },
            { label: '2️⃣ Saya ingin serahkan harta saya kepada orang yang saya hajatkan', nextStep: 'allocate_page1_my' },
            { label: "3️⃣ Saya ingin bayar bahagian waris/ simati kepada ARB", nextStep: 'pay_page1_my' },
            { label: "4️⃣ Saya ingin dapatkan bahagian saya yang belum dituntut di ARB", nextStep: 'retrieve_page1_my' },
            { label: "5️⃣ Saya ada Perintah dari Pejabat Tanah/ Mahkamah Tinggi", nextStep: 'order_page1_my' },
            { label: "6️⃣ Saya ingin tahu berkenaan penentuan waris", nextStep: 'establishment_rightful_beneficiaries_my' }
        ]
    },
    allocate_page1_my: {
        id: 'allocate_page1_my',
        message: `**{name}** berhajat untuk menyerahkan harta semasa hidup atau selepas kematian?`,
        options: [
            { label: '1️⃣ Semasa hidup', nextStep: 'during_lifeitime_my' },
            { label: '2️⃣ Selepas kematian', nextStep: 'after_death_my' },
        ]
    },
    during_lifeitime_my: {
        id: 'during_lifeitime_my',
        message: `Sila buat pilihan`,
        options: [
            { label: '1️⃣ Hibah', nextStep: 'hibah_my' },
            { label: '2️⃣ Amanah', nextStep: 'amanah_my' },
        ]
    },
    after_death_my: {
        id: 'after_death_my',
        message: `Sila buat pilihan`,
        options: [
            { label: '1️⃣ Wasiat', nextStep: 'wasiat_my' },
            { label: '2️⃣ HibahKu', nextStep: 'hibahku_my' },
        ]
    },
    pay_page1_my: {
        id: 'pay_page1_my',
        message: `**{name}** ingin bayar bahagian siapa?`,
        options: [
            {
                label: `1️⃣ Waris bawah umur/OKU`, nextStep: 'minor_disabled_my'
            },
            {
                label: `2️⃣ Waris tak dapat dikesan / tak bagi kerjasama (tebus bahagian)`, nextStep: 'untraceable_my'
            },
            {
                label: `3️⃣ Bahagian Simati (pampasan)`, nextStep: 'compensation_my'
            },
            {
                label: `4️⃣ Bahagian Simati (selain pampasan)`, nextStep: 'other_than_compensation_my'
            }
        ]
    },
    minor_disabled_my: {
        id: 'minor_disabled_my',
        message: `Sila sertakan dokumen berikut:\n\n 1. 1 Salinan Sijil Kematian Simati\n 2. 1 Salinan Kad Pengenalan Penjaga\n 3. 1 Salinan Kad Pengenalan dan Sijil Kelahiran waris bawah umur / OKU\n\n 4. Perintah asal daripada Mahkamah Tinggi / Pejabat Tanah yang melantik ARB sebagai pemegang amanah kepada waris bawah umur / OKU\n\nSila hadir ke mana-mana kaunter cawangan kami yang berdekatan untuk membuat bayaran dengan membawa dokumen yang diperlukan . Bayaran boleh dibuat secara tunai (terhad kepada RM5,000), cek, kad debit/kredit atau pindahan wang atas talian. **{name}** boleh buat temujanji di [sini](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)\n\n Maklumat cawangan boleh didapati di [sini](https://www.amanahraya.my/contact-us/branch-locator/)`,
        options: [
            { label: 'Terima kasih. Sila datang kembali bila-bila masa', nextStep: 'exit_my' },

        ]
    },
    untraceable_my: {
        id: 'untraceable_my',
        message: `Sila sertakan dokumen berikut:\n\n 1. 1 Salinan Sijil Kematian Simati\n 2. 1 Salinan Kad Pengenalan waris tak dapat dikesan / tak bagi kerjasama\n 3. Surat / Arahan daripada Mahkamah Tinggi / Pejabat Tanah yang mengarahkan bayaran dibuat kepada ARB\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan untuk membuat bayaran dengan membawa dokumen yang diperlukan . Bayaran boleh dibuat secara tunai (terhad kepada RM5,000), cek, kad debit/kredit atau pindahan wang atas talian. **{name}** boleh buat temujanji di [sini](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)\n\n Maklumat cawangan boleh didapati di [sini](https://www.amanahraya.my/contact-us/branch-locator/)`,
        options: [
            { label: 'Terima kasih. Sila datang kembali bila-bila masa', nextStep: 'exit_my' },
        ]
    },
    compensation_my: {
        id: 'compensation_my',
        message: `Sila sertakan dokumen berikut:\n\n 1. 1 Salinan Sijil Kematian Simati\n 2. 1 Salinan Borang G dan H (Notis Award dan Tawaran Pampasan)\n\n Sila kemukakan dokumen di atas ke alamat e-mel crmd@arb.com.my. Maklumat pembayaran akan diberikan setelah dokumen diterima oleh **{name}**.`,
        options: [
            { label: 'Terima kasih. Sila datang kembali bila-bila masa', nextStep: 'exit_my' },
        ]
    },
    other_than_compensation_my: {
        id: 'other_than_compensation_my',
        message: `Sila sertakan dokumen berikut:\n\n 1. 1 Salinan Sijil Kematian Simati\n 2.  Surat pemakluman bayaran bahagian Simati kepada ARB\n\n Sila kemukakan dokumen di atas ke alamat e-mel crmd@arb.com.my. Maklumat pembayaran akan diberikan setelah dokumen diterima oleh **{name}**.`,
        options: [
            { label: 'Terima kasih. Sila datang kembali bila-bila masa', nextStep: 'exit_my' },
        ]
    },
    retrieve_page1_my: {
        id: 'retrieve_page1_my',
        message: `Sila berikan nama anda`,
        options: [],
        expectsInput: true
    },
    retrieve_page1_nric_my: {
        id: 'retrieve_page1_nric_my',
        message: `Terima kasih **{name}**. Sekarang sila berikan NRIC anda.`,
        options: [],
        expectsInput: true
    },
    retrieve_page1_contact_my: {
        id: 'retrieve_page1_contact_my',
        message: `Mohon berikan nombor telefon anda`,
        options: [],
        expectsInput: true
    },
    retrieve_page1_done_my: {
        id: 'retrieve_page1_done_my',
        message: `**{name}**, terima kasih. Pihak kami akan menghubungi anda pada hari bekerja berikutnya.`,
        options: [{
            label: 'Terima kasih. Sila datang kembali bila-bila masa', nextStep: ''
        }],
    },
    exit_my: {
        id: 'exit_my',
        message: 'Terima kasih. Sila datang kembali bila-bila masa.',
        options: []
    },
    order_page1_my: {
        id: 'order_page1_my',
        message: 'Perintah tersebut berkenaan apa?',
        options: [
            {
                label: `1️⃣ ARB jadi Pemegang Amanah kepada waris bawah umur/ OKU`,
                nextStep: 'order_page1_details_my'
            },
            {
                label: `2️⃣ ARB jadi Pemegang Amanah kepada waris tak dapat dikesan / tak bagi kerjasama`,
                nextStep: 'order_page1_details_my'
            }
        ]
    },
    order_page1_details_my: {
        id: 'order_page1_details_my',
        message: `Sila sertakan dokumen berikut:\n 1. Salinan Sijil Kematian Simati\n 2. Salinan Kad Pengenalan Penjaga\n 3. Salinan Kad Pengenalan dan Sijil Kelahiran waris bawah umur / OKU.\n 4. Perintah asal daripada Mahkamah Tinggi / Pejabat Tanah yang melantik ARB sebagai pemegang amanah kepada waris bawah umur / OKU / tak dapat dikesan/ tak bagi kerjasama\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan untuk membawa dokumen yang diperlukan. **{name}** boleh buat temujanji di [sini](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)\n\n Maklumat cawangan boleh didapati di [sini](https://www.amanahraya.my/contact-us/branch-locator/)`,
        options: [
            {
                label: 'Terima kasih. Sila datang kembali bila-bila masa', nextStep: ''
            }
        ]
    },
    yes_page1_my: {
        id: 'yes_page1_my',
        message: `Hebat, **{name}** adalah pelanggan yang kami hargai.\n\n Produk apa yang **{name}** ada bersama kami?`,
        options: [
            { label: '1️⃣ Pusaka', nextStep: 'pusaka_estate_my' },
            { label: '2️⃣ Wasiat', nextStep: 'will_one_my' },
            { label: '3️⃣ Amanah', nextStep: 'amanah_one_my' },
            { label: '4️⃣ Hibah', nextStep: 'retrieve_page1_my' },
            { label: '5️⃣ HibahKu', nextStep: 'retrieve_page1_my' },
        ]
    },
    i_would_like_my: {
        id: 'i_would_like_my',
        message: `[Promosi](https://drive.google.com/file/d/1fw8S2Mvia-Lc4-U7KMtzhxEDEPF-teXV/view)`,
        options: [
            { label: 'Terima kasih. Sila datang kembali bila-bila masa', nextStep: '' }
        ]
    },
    // Pusaka (BM) flow in Bahasa Melayu starts here
    pusaka_estate_my: {
        id: 'pusaka_estate_my',
        message: `Baiklah apa yang ARIA boleh bantu **{name}**?`,
        options: [
            { label: '1️⃣ Menyemak status wasiat ', nextStep: 'retrieve_page1_my' },
            { label: '2️⃣ Mendapatkan salinan Surat Kuasa Mentadbir (SKM) ', nextStep: 'skm' },
            { label: '3️⃣ Membuat penambahan aset simati', nextStep: 'pukasa_add_asset_my' },
        ]
    },
    skm: {
        id: 'skm',
        message: `Adakah **{name}** waris bagi pusaka ini?`,
        options: [
            { label: '1️⃣ Ya ', nextStep: 'skm_ya' },
            { label: '2️⃣ Tidak ', nextStep: 'skm_tidak' },
        ]
    },
    skm_ya: {
        id: 'skm_ya',
        message: `Senarai dokumen yang diperlukan untuk permohonan salinan SKM oleh waris:\n\n (1) Personal Data Access and Change Form yang dilengkapkan oleh waris yang memohon\n(2) 1 salinan kad pengenalan waris yang memohon\n(3) 1 salinan surat dari Unit Pusaka Kecil (sekiranya berkaitan)\n\n BORANG YANG BERKAITAN\n a) Personal Data Access and Change Form\n b) Contoh Pengisian - Personal Data Access and Change Form\n\n Cara penghantaran mana yang lebih mudah untuk **{name}**?`,
        options: [
            { label: '1️⃣ Kaunter ', nextStep: 'skm_kaunter' },
            { label: '2️⃣ Pos ', nextStep: 'skm_pos' },
            { label: '3️⃣ E-mel / WhatsApp', nextStep: 'skm_email' },
        ]
    },
    skm_kaunter: {
        id: 'skm_kaunter',
        message: `Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan.\n\n Maklumat cawangan boleh didapati di [sini](https://www.amanahraya.my/contact-us/branch-locator/)\n\n Terdapat caj yang akan dikenakan dan caj tersebut akan ditentukan oleh pihak cawangan setelah penerimaan dokumen diterima.\n\n Pembayaran boleh dibuat secara tunai, kod QR atau kad debit/ kredit.\n\n Salinan SKM akan diserahkan kepada **{name}** dalam masa 7 hari bekerja.\n\n Boleh ARIA tahu, bagaimana dokumen ini akan diserahkan kepada **{name}**?`,
        options: [
            { label: '1️⃣ Kutipan di kaunter  ', nextStep: 'skm_kutipan_kaunter' },
            { label: '2️⃣ Pos Berdaftar ', nextStep: 'skm_pos_kaunter' },
        ]
    },
    skm_kutipan_kaunter: {
        id: 'skm_kutipan_kaunter',
        message: `Sila buat temujanji di [sini](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)\n\n Ada apa-apa lagi yang boleh AIRA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    skm_pos_kaunter: {
        id: 'skm_pos_kaunter',
        message: `Dokumen akan diposkan ke alamat yang dinyatakan di dalam borang permohonan. Tambahan RM10 akan dikenakan.\n\n Ada apa-apa lagi yang boleh AIRA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ],
    },
    skm_pos: {
        id: 'skm_pos',
        message: `Sila poskan ke cawangan di mana fail telah didaftarkan\n\n Maklumat cawangan boleh didapati di [sini](https://www.amanahraya.my/contact-us/branch-locator/)\n\n Terdapat caj yang akan dikenakan dan caj tersebut akan ditentukan oleh pihak cawangan setelah penerimaan dokumen diterima.\n\n **{name}** akan dihubungi bagi pembayaran atas talian setelah dokumen diterima.\n\n Salinan SKM akan diserahkan kepada **{name}** dalam masa 7 hari bekerja.\n\n Boleh ARIA tahu, bagaimana dokumen ini akan diserahkan kepada **{name}**?`,
        options: [
            { label: '1️⃣ Kutipan di kaunter  ', nextStep: 'skm_kutipan_kaunter' },
            { label: '2️⃣ Pos Berdaftar ', nextStep: 'skm_pos_kaunter' },
        ]
    },
    skm_email: {
        id: 'skm_email',
        message: `Dokumen yang jelas boleh dihantar melalui e-mel ke crmd@arb.com.my atau WhatsApp kami di 03-2055 7557.\n\n Terdapat caj yang akan dikenakan dan caj tersebut akan ditentukan oleh pihak cawangan setelah penerimaan dokumen diterima.\n\n **{name}** akan dihubungi bagi pembayaran atas talian setelah dokumen diterima.\n\n Salinan SKM akan diserahkan kepada **{name}** dalam masa 7 hari bekerja.\n\n Boleh ARIA tahu, bagaimana dokumen ini akan diserahkan kepada **{name}**?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    skm_tidak: {
        id: 'skm_tidak',
        message: `Apakah hubungan **{name}** dengan simati?`,
        options: [
            { label: '1️⃣ Wakil waris  ', nextStep: 'skm_tidak_wakil' },
            { label: '2️⃣ Peguam lantikan waris ', nextStep: 'skm_tidak_peguam' },
        ]
    },
    skm_tidak_wakil: {
        id: 'skm_tidak_wakil',
        message: `Senarai dokumen yang diperlukan untuk permohonan salinan SKM oleh wakil waris:\n\n (1) Surat lantikan daripada waris\n (2) Personal Data Access and Change Form yang dilengkapkan oleh waris yang sama seperti surat lantikan\n (3) 1 salinan kad pengenalan wakil waris dan waris yang melantik\n (4) 1 salinan surat dari Unit Pusaka Kecil (sekiranya berkaitan)\n\n BORANG YANG BERKAITAN\n a) Personal Data Access and Change Form\n b) Contoh Pengisian - Personal Data Access and Change Form\n\n Cara penghantaran mana yang lebih mudah untuk **{name}**?`,
        options: [
            { label: '1️⃣ Kaunter ', nextStep: 'skm_kaunter' },
            { label: '2️⃣ Pos ', nextStep: 'skm_pos' },
            { label: '3️⃣ E-mel / WhatsApp', nextStep: 'skm_email' },
        ]
    },
    skm_tidak_peguam: {
        id: 'skm_tidak_peguam',
        message: `Senarai dokumen yang diperlukan untuk permohonan salinan SKM oleh wakil waris:\n\n (1) Notis Pelantikan Peguam\n (2) Surat Rasmi peguam\n (3) Personal Data Access and Change Form yang dilengkapkan oleh anak guam (waris)\n (4) 1 salinan kad pengenalan anak guam\n\n BORANG YANG BERKAITAN\n a) Personal Data Access and Change Form\n b) Contoh Pengisian - Personal Data Access and Change Form\n\n Cara penghantaran mana yang lebih mudah untuk **{name}**?`,
        options: [
            { label: '1️⃣ Kaunter ', nextStep: 'skm_kaunter' },
            { label: '2️⃣ Pos ', nextStep: 'skm_pos' },
            { label: '3️⃣ E-mel / WhatsApp', nextStep: 'skm_email' },
        ]
    },
    // Pusaka asset addition (BM) flow in Bahasa Melayu starts here
    pukasa_add_asset_my: {
        id: 'pukasa_add_asset_my',
        message: `Boleh ARIA tahu, apa aset tambahan yang hendak ditadbir?`,
        options: [
            { label: '1️⃣ Kenderaan sahaja (nilaian semasa kurang dari RM10,000) ', nextStep: 'pukasa_add_asset_vehicle_my' },
            { label: '2️⃣ Aset alih sahaja', nextStep: 'pukasa_add_asset_movable_my' },
            { label: '3️⃣ Kenderaan sahaja (nilaian semasa melebihi RM10,000)', nextStep: 'pukasa_add_asset_movable_my' },
            { label: '4️⃣ Aset alih dan aset tak alih  ', nextStep: 'pukasa_add_asset_movable_my' },
            { label: '5️⃣ Aset tak alih sahaja', nextStep: 'pukasa_add_asset_movable_my' },
        ]
    },
    pukasa_add_asset_vehicle_my: {
        id: 'pukasa_add_asset_vehicle_my',
        message: `ARIA maklumkan pentadbiran ini boleh dibuat secara prosedur Fast Lane iaitu Surat Kuasa Mentadbir (SKM) dikeluarkan dalam tempoh 30 hari dari tarikh penerimaan dokumen lengkap. Prosedur ini hanya terpakai bagi SKM yang dikeluarkan oleh ARB sahaja.\n\n ARIA akan senaraikan keperluan dokumen.\n\n 1. SIMATI\n a. Sijil Kematian asal & 1 salinan\n b. 1 salinan Sijil Kelahiran simati (Jika waris simati adalah ibubapa / adik beradik)\n\n 2. WAKIL WARISa.\n 1 salinan kad pengenalan / passport\n b. 1 salinan dokumen pembuktian pertalian dengan simati\n i. Sijil Kelahiran (jika waris adalah anak / adik beradik)\n ii. Sijil Perkahwinan (jika waris adalah pasangan)\n 3. PEMBELI (JIKA PENERIMA KENDERAAN ADALAH PEMBELI)\n a. 1 salinan kad pengenalan / passport\n b. Bukti pembelian kenderaan\n\n 4. HARTA ALIH - KENDERAAN\n a. Geran baru - 1 salinan geran kenderaan (depan sahaja) * Perlu sertakan carian e-hakmilik kenderaan / bukti penyelesaian hutang / bukti pembelian tunai\n b. Geran lama - 1 salinan geran kenderaan (depan dan belakang sahaja) * Jika masih mempunyai hakmilik dituntut yang belum dibatalkan dan pinjaman telah selesai, perlu sertakan carian e-hakmilik / bukti penyelesaian hutang\n\n 5. MINIMUM DEPOSIT RM50\n\n 6. TEMPOH PENTADBIRAN\n 30 hari dari tarikh pembukaan fail dan dokumen lengkap\n 7. BORANG YANG BERKAITAN\n a. Borang Permohonan Pusaka Aset atau Liabiliti Tambahan\n b. Surat Akuan Pindahmilik Kenderaan\n c. Contoh Pengisian - Borang Permohonan Pusaka Aset atau Liabiliti Tambahan\n d. Contoh Pengisian - Surat Akuan Pindahmilik Kenderaan\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini.\n a. Jumlah nilaian RM3,000 dan ke bawah : RM50\n b. Jumlah nilaian RM3,000.01 - RM5,000 : RM150\n c. Jumlah nilaian RM5,000.01 - RM10,000 : 5.00% ke atas nilai kenderaan\n\n Untuk makluman, nilaian kenderaan akan dibuat melalui laman web di kaunter cawangan ketika proses pembukaan fail. **{name}** perlu tandatangan bagi menyatakan persetujuan ke atas nilaian yang dikeluarkan.\n\n Borang yang lengkap beserta dokumen yang diperlukan mestilah dihantar ke cawangan AmanahRaya yang sama mengikut pentadbiran terdahulu.\n\n Cara penghantaran mana yang lebih mudah untuk **{name}**?`,
        options: [
            { label: '1️⃣ Kaunter ', nextStep: 'p_add_as_vh_my_kaunter' },
            { label: '2️⃣ Pos ', nextStep: 'p_add_as_vh_my_pos' },
            { label: '3️⃣ E-mel / WhatsApp', nextStep: 'p_add_as_vh_my_email' },
        ]
    },
    p_add_as_vh_my_kaunter: {
        id: 'p_add_as_vh_my_kaunter',
        message: `Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan. **{name}** boleh buat temujanji di [sini](https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m)\n\n Maklumat cawangan boleh didapati di [sini](https://www.amanahraya.my/contact-us/branch-locator/)\n\n Ada apa-apa lagi yang boleh AIRA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    p_add_as_vh_my_pos: {
        id: 'p_add_as_vh_my_pos',
        message: `Sila poskan ke cawangan di mana fail telah didaftarkan\n\n Maklumat cawangan boleh didapati di [sini](https://www.amanahraya.my/contact-us/branch-locator/)\n\n **{name}** akan dihubungi bagi pembayaran atas talian setelah dokumen diterima.\n\n Ada apa-apa lagi yang boleh AIRA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ],
    },
    p_add_as_vh_my_email: {
        id: 'p_add_as_vh_my_email',
        message: `Dokumen yang jelas boleh dihantar melalui e-mel ke crmd@arb.com.my atau WhatsApp kami di 03-2055 7557.\n\n **{name}** akan dihubungi bagi pembayaran atas talian setelah dokumen diterima.\n\n Ada apa-apa lagi yang boleh AIRA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    pukasa_add_asset_movable_my: {
        id: 'pukasa_add_asset_movable_my',
        message: `Ok jelas. ARIA akan senaraikan keperluan dokumen.\n\n 1. SIMATI\n a. Sijil Kematian asal & 1 salinan\n\n 2. WARIS SIMATI\n a. 1 salinan Sijil Kematian (jika terdapat waris yang meninggal selepas pentadbiran awal selesai)\n\n 3. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang) dan tidak mempunyai tanggungan / selesai pinjaman\n b. 1 salinan penyata akaun / buku simpanan akaun simati (ASB / Bank / Tabung Haji)\n c. 1 salinan penyata akaun semasa\n d. 1 salinan penyata / buku simpanan akaun bersama\n e. 1 salinan penyata Saham Bursa Malaysia\n f. 1 salinan penyata Deposit Tetap\n g. 1 salinan slip Peti Simpanan Selamat (Safe Deposit Box)\n h. 1 salinan sijil Saham Syarikat\n i. 1 salinan penyata KWSP\n j. 1 salinan polisi Insuran\n k. 1 salinan lesen vessel\n\n 4. HARTA TAK ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan perjanjian jual beli (S&P) untuk rumah yang belum memilik hakmilik strata\n b. 1 salinan hakmilik strata rumah\n c. 1 salinan geran rumah\n .d 1 salinan geran tanah.\n e Resit asal cukai tanah terkini dan 1 salinan\n f. Resit asal cukai pintu terkini dan 1 salinan\n\n 5. DEPOSIT\n a. RM50 - RM1000 (jumlah sebenar akan dimaklumkan\n setelah semakan dokumen dibuat)\n\n 6. BORANG YANG BERKAITAN\n a. Borang Permohonan Pusaka Aset atau Liabiliti Tambahan\n b. Contoh Pengisian - Borang Permohonan Pusaka Aset atau Liabiliti Tambahan\n\n Borang yang lengkap beserta dokumen yang diperlukan mestilah dihantar ke cawangan AmanahRaya yang sama mengikut pentadbiran terdahulu.\n\n Cara penghantaran mana yang lebih mudah untuk **{name}**?`,
        options: [
            { label: '1️⃣ Kaunter ', nextStep: 'p_add_as_vh_my_kaunter' },
            { label: '2️⃣ Pos ', nextStep: 'p_add_as_vh_my_pos' },
            { label: '3️⃣ E-mel / WhatsApp', nextStep: 'p_add_as_vh_my_email' },
        ]
    },
    will_one_my: {
        id: 'will_one_my',
        message: `Baiklah apa yang ARIA boleh bantu **{name}**?`,
        options: [
            { label: '1️⃣ Menyemak status wasiat ', nextStep: 'retrieve_page1_my' },
            { label: "2️⃣ Meminda wasiat ", nextStep: 'will_one_amending_will_my' },
            { label: '3️⃣ Memndapatkan salinan wasiat', nextStep: 'will_one_will_copy_my' },
        ],
    },
    will_one_amending_will_my: {
        id: 'will_one_amending_will_my',
        message: `Boleh ARIA tahu jenis wasiat yang didaftarkan di ARB?`,
        options: [
            { label: '1️⃣ Asas ', nextStep: 'will_one_amending_will_my_asas' },
            { label: "2️⃣ Komprehensif ", nextStep: 'will_one_amending_will_my_komprehensif' },
            { label: '3️⃣ Tidak pasti', nextStep: 'retrieve_page1_my' },
        ]
    },
    will_one_amending_will_my_asas: {
        id: 'will_one_amending_will_my_asas',
        message: `**{name}** boleh menukar kepada Wasiat Komprehensif untuk memperincikan jenis harta kepada waris atau bukan waris yang berhak menerima harta selepas kematian.\n\n Sila sertakan dokumen berikut:\n\n 1. Borang Permohonan Wasiat (link)\n 2. 1 salinan Kad Pengenalan pewasiat\n 3. 1 salinan Kad Pengenalan penerima\n 4. 1 salinan Kad Pengenalan penjaga (sekiranya berkaitan)\n 5. 1 salinan dokumen aset yang dinyatakan di dalam wasiat.\n 6. Fi Penukaran : RM700.\n\n Cara penghantaran mana yang lebih mudah untuk **{name}**?`,
        options: [
            { label: '1️⃣ Kaunter ', nextStep: 'p_add_as_vh_my_kaunter' },
            { label: '2️⃣ Pos ', nextStep: 'p_add_as_vh_my_pos' },
            { label: '3️⃣ E-mel / WhatsApp', nextStep: 'p_add_as_vh_my_email' },
        ]
    },
    will_one_amending_will_my_komprehensif: {
        id: 'will_one_amending_will_my_komprehensif',
        message: `**{name}** boleh membuat perubahan ke atas wasiat sedia ada.\n\n Sila sertakan dokumen berikut:\n\n 1. Borang Permohonan Wasiat (link)\n 2. 1 salinan Kad Pengenalan pewasiat\n 3. 1 salinan Kad Pengenalan penerima\n 4. 1 salinan Kad Pengenalan penjaga (sekiranya berkaitan)\n 5. 1 salinan dokumen aset yang dinyatakan di dalam wasiat.\n 6. Fi Pindaan : RM150.\n\n Cara penghantaran mana yang lebih mudah untuk **{name}**?`,
        options: [
            { label: '1️⃣ Kaunter ', nextStep: 'p_add_as_vh_my_kaunter' },
            { label: '2️⃣ Pos ', nextStep: 'p_add_as_vh_my_pos' },
            { label: '3️⃣ E-mel / WhatsApp', nextStep: 'p_add_as_vh_my_email' },
        ]
    },
    will_one_will_copy_my: {
        id: 'will_one_will_copy_my',
        message: `Salinan wasiat boleh dipohon oleh:\n\n 1. Pewasiat\n 2. Waris-waris pewasiat\n 3. Peguam yang dilantik oleh waris pewasiat\n\n **{name}** ingin dapatkan salinan wasiat ini untuk tujuan apa?`,
        options: [
            { label: '1️⃣ Wasiat saya hilang dalam simpanan ', nextStep: 'will_one_will_copy_my_dalam' },
            { label: '2️⃣ Untuk pentadbiran harta pusaka', nextStep: 'will_one_will_copy_my_harta' },
        ]
    },
    will_one_will_copy_my_dalam: {
        id: 'will_one_will_copy_my_dalam',
        message: `Sila majukan borang lengkap yang disertakan di bawah beserta dokumen berikut ke alamat e-mel crmd@arb.com.my:\n\n 1. Personal Data Access and Change Form (link)\n 2. Salinan Kad Pengenalan pemohon\n 3. Salinan resit pembayaran Bayaran secara atas talian boleh dibuat kepada:\n Nama Syarikat: Amanah Raya Berhad\n Nama Bank : Maybank\n Nombor Akaun : 564155119930\n Bayaran : RM50\n\n **{name}** akan dihubungi dalam masa 7 hari bekerja untuk mengambil salinan wasiat di kaunter.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    will_one_will_copy_my_harta: {
        id: 'will_one_will_copy_my_harta',
        message: `Apakah hubungan **{name}** dengan simati?`,
        options: [
            { label: '1️⃣ Waris simati ', nextStep: 'will_one_will_copy_my_harta_waris' },
            { label: '2️⃣ Peguam', nextStep: 'will_one_will_copy_my_harta_pegum' },
        ]
    },
    will_one_will_copy_my_harta_waris: {
        id: 'will_one_will_copy_my_harta_waris',
        message: `Sila majukan borang lengkap yang disertakan di bawah beserta dokumen berikut:\n\n 1. Personal Data Access and Change Form (link)\n 2. Salinan kad pengenalan dan dokumen pertalian (pemohon)\n 3. Salinan sijil kematian Simati\n 4. Salinan resit pembayaran Bayaran secara atas talian boleh dibuat kepada:\n Nama Syarikat: Amanah Raya Berhad\n Nama Bank : Maybank\n Nombor Akaun : 564155119930\n Bayaran : RM50\n\n Kandungan wasiat hanya akan dibaca di hadapan waris sahaja. Tiada salinan wasiat yang akan diberikan.\n\n **{name}** akan dihubungi dalam masa 7 hari bekerja untuk penetapan tarikh sesi pembacaan wasiat di kaunter.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    will_one_will_copy_my_harta_pegum: {
        id: 'will_one_will_copy_my_harta_pegum',
        message: `Sila majukan borang lengkap yang disertakan di bawah beserta dokumen berikut: 1. Personal Data Access and Change Form (link)\n 2. Salinan kad pengenalan dan dokumen pertalian (pemohon)\n 3. Salinan sijil kematian SImati\n 4. Notis lantikan peguam\n 5. Salinan resit pembayaran Bayaran secara atas talian boleh dibuat kepada:\n Nama Syarikat : Amanah Raya Berhad\n Nama Bank : Maybank\n Nombor Akaun : 564155119930\n Bayaran : RM50\n\n Kandungan wasiat hanya akan dibaca di hadapan waris sahaja. Tiada salinan wasiat yang akan diberikan.\n\n **{name}** akan dihubungi dalam masa 7 hari bekerja untuk penetapan tarikh sesi pembacaan wasiat di kaunter.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    // Amanah BM 1 starts from here
    amanah_one_my: {
        id: 'amanah_one_my',
        message: `Baiklah apa yang ARIA boleh bantu **{name}**?`,
        options: [
            { label: "1️⃣ Membuat pengemaskinian maklumat", nextStep: 'amanah_one_my_maklumat' },
            { label: '2️⃣ Membuat penutupan akaun amanah', nextStep: 'amanah_one_my_akuan_amanah' },
            { label: "3️⃣ Membuat pengeluaran wang amanah", nextStep: 'amanah_one_my_wang_amanah' },
            { label: "4️⃣ Mendapatkan penyata akaun", nextStep: 'amanah_one_my_akuan' },
            { label: "5️⃣ Membuat penukaran penjaga", nextStep: 'amanah_one_my_penjaga' },
            { label: "6️⃣ Menyemak status permohonan", nextStep: 'retrieve_page1_my' }
        ]
    },
    amanah_one_my_maklumat: {
        id: 'amanah_one_my_maklumat',
        message: `Sila klik pautan [ini](https://online.amanahraya.my/TRUST_ONLINE/) bagi pengemaskinian maklumat.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    amanah_one_my_akuan_amanah: {
        id: 'amanah_one_my_akuan_amanah',
        message: `Sila klik kedua-dua pautan ini https://forms.gle/RDiL93pvWrcZJsKT9 dan https://forms.gle/YRRdYh5qMTrWNQKm6 bagi permohonan penutupan akaun.\n\n Pembayaran akan dibuat dalam tempoh 14 hari bekerja dari tarikh penerimaan dokumen lengkap. **{name}** akan dihubungi sekiranya maklumat tambahan diperlukan.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    amanah_one_my_wang_amanah: {
        id: 'amanah_one_my_wang_amanah',
        message: `Pengeluaran wang amanah dibolehkan bagi tujuan kegunaan dan kebajikan benefisiari atau bagi tujuan pengeluaran yang dibenarkan di dalam SuratIkatan Amanah.\n\n Pengeluaran boleh dibuat bagi tujuan-tujuan berikut:\n\n 1. Persekolahan\n 2. Perubatan\n 3. Nafkah bulanan\n 4. Perayaan\n 5. Lain-lain\n\n Sila klik pautan ini https://online.amanahraya.my/TRUST_ONLINE/ bagi permohonan penutupan akaun.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    amanah_one_my_akuan: {
        id: 'amanah_one_my_akuan',
        message: `Sila klik pautan ini https://online.amanahraya.my/TRUST_ONLINE/ bagi mendapatkan penyata akaun.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    amanah_one_my_penjaga: {
        id: 'amanah_one_my_penjaga',
        message: `Penukaran penjaga hanya dibenarkan sekiranya:\n\n 1. Penjaga sedia ada meninggal dunia.\n 2. Penjaga sedia ada telah uzur.\n 3. Pelanggaran tanggungjawab oleh penjaga.\n\n * Penukaran penjaga hanya dibenarkan dengan mengemukakan:\n\n 1. Borang Penukaran Penjaga\n 2. Perintah Mahkamah (sekiranya penjaga dilantik oleh Mahkamah)\n 3. Perintah Penjaga (Borang H) (sekiranya penjaga dilantik oleh Pembahagian Pusaka Kecil)\n\n BORANG YANG BERKAITAN\n a. Akuan Pengesahan Penukaran Penjaga\n b. Contoh Pengisian - Akuan Pengesahan Penukaran Penjaga\n\n Sila majukan borang yang lengkap beserta salinan Kad Pengenalan **{nama}** ke mana-mana cawangan ARB yang berdekatan.\n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    // PUSAKA BM start from here
    pusaka_my: {
        id: 'pusaka_my',
        message: `Boleh ARIA tahu, **{name}** ingin tahu berkenaan apa?`,
        options: [
            { label: "1️⃣ Permohonan pusaka kenderaan sahaja", nextStep: 'pusaka_my_sahaja' },
            { label: '2️⃣ Permohonan pusaka', nextStep: 'pusaka_my_pusaka' },
            { label: "3️⃣ Maklumat am", nextStep: 'pusaka_my_maklumat' }, // need to check with Sanjay
            { label: "4️⃣ Mendapatkan borang", nextStep: 'pusaka_my_borang' },
        ]
    },
    pusaka_my_sahaja: {
        id: 'pusaka_my_sahaja',
        message: `Pentadbiran pusaka kenderaan ini hanya terpakai bagi pentadbiran di Semenanjung sahaja. Bagi pentadbiran di Sarawak atau Sabah, **{name}** boleh klik pilihan permohonan pusaka di atas.\n\n Untuk makluman, pentadbiran pusaka diperlukan bagi proses pindahmilik kenderaan Simati. Surat Kuasa akan dikeluarkan untuk proses ini.\n\n Sepanjang pengetahuan **{name}**, adakah pentadbiran pusaka simati pernah dibuat sebelum ini?`,
        options: [
            { label: "1️⃣ Tidak pernah dibuat sebelum ini", nextStep: 'pusaka_my_sahaja_tidak' },
            { label: '2️⃣ Ya, pernah dibuat', nextStep: 'pusaka_my_sahaja_ya' },
        ]
    },
    pusaka_my_sahaja_tidak: {
        id: 'pusaka_my_sahaja_tidak',
        message: `Adakah kenderaan Simati masih mempunyai hutang?`,
        options: [
            { label: "1️⃣ Tidak", nextStep: 'pusaka_my_sahaja_tidak_tidak' },
            { label: '2️⃣ Ya', nextStep: 'pusaka_my_sahaja_tidak_ya' },
        ]
    },
    pusaka_my_sahaja_tidak_tidak: {
        id: 'pusaka_my_sahaja_tidak_tidak',
        message: `Prosedur pentadbiran pusaka ini hanya boleh digunapakai bagi keadaan berikut:\n\n 1. Kenderaan darat sahaja\n 2. Telah bebas daripada hutang\n 3. Jumlah nilaian kenderaan mestilah tidak melebihi RM10,000\n 4. Tidak melibatkan waris tidak bagi kerjasama / tidak dapat dikesan\n 5. Tidak melibatkan Baitulmal (bagi Islam sahaja)\n\n Adakah kenderaan Simati memenuhi kriteria yang disebut?`,
        options: [
            { label: "1️⃣ Tidak", nextStep: 'pusaka_my_sahaja_tidak_tidak_tidak' },
            { label: '2️⃣ Ya', nextStep: 'pusaka_my_sahaja_tidak_ya_ya' },
        ]
    },
    pusaka_my_sahaja_tidak_tidak_tidak: {
        id: 'pusaka_my_sahaja_tidak_tidak_tidak',
        message: `1. SIMATI\n a. Sijil Kematian asal Simati & 1 salinan\n b. 1 salinan Sijil Kelahiran Simati\n c. Wasiat asal Simati & 1 salinan\n d. 1 salinan Sijil Perkahwinan/Perceraian (jika Simati berkahwin / bercerai)\n\n 2. WARIS SIMATI\n a. 1 salinan Kad Pengenalan dan Sijil Kelahiran waris\n b. 1 salinan Sijil Kematian (bagi waris yang meninggal sebelum / selepas simati)\n\n 3. AKUAN (SEDIAKAN YANG BERKAITAN SAHAJA)\n Perlu ditandatangan oleh saksi bebas di hadapan Pesuruhjaya Sumpah dan membuat penyeteman di laman web Lembaga Hasil Dalam Negeri (LHDN). Salinan kad pengenalan saksi perlu disertakan)\n a. Akuan Berkanun Bujang (jika Simati meninggal Bujang)\n b. Akuan Tiada Zuriat (jika Simati tidak mempunyai anak)\n c. Akuan Waris Tunggal (jika Simati hanya meninggalkan seorang waris sahaja)\n\n 4. HARTA ALIH - KENDERAAN\n a. Geran baru - 1 salinan geran kenderaan (depan sahaja)\n * Perlu sertakan carian e-hakmilik kenderaan / bukti penyelesaian hutang / bukti pembelian tunai\n b. Geran lama - 1 salinan geran kenderaan (depan dan belakang sahaja)\n * Jika masih mempunyai hakmilik dituntut yang belum dibatalkan dan pinjaman telah selesai, perlu sertakan carian e-hakmilik / bukti penyelesaian hutang\n\n 5. MINIMUM DEPOSIT RM50\n\n 6. TEMPOH PENTADBIRAN\n 4 bulan dari tarikh pembukaan fail, 7. BORANG YANG BERKAITAN\n a. Borang Permohonan Pentadbiran Harta Pusaka\n b. Senarai Semak Dokumen Yang Perlu Disertakan (Checklist)\n c. Akuan Berkanun (Kahwin / Cerai / Tiada Zuriat / Waris Tunggal / Bujang)\n d. Contoh Pengisian - Borang Permohonan Pentadbiran Harta Pusaka\n e. Contoh Pengisian - Akuan Berkanun (Kahwin / Cerai / Tiada Zuriat / Waris Tunggal / Bujang)\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini.\n\n 5% x RM25,000 yang pertama\n 4% x RM225,000 yang berikutnya\n 3% x RM250,000 yang berikutnya\n 2% x RM500,000 yang berikutnya\n 1% x baki selebihnya\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke mana-mana cawangan kami yang berdekatan untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    pusaka_my_sahaja_tidak_ya_ya: {
        id: 'pusaka_my_sahaja_tidak_ya_ya',
        message: `1. SIMATI\n a. Sijil Kematian asal & 1 salinan\n b. 1 salinan Sijil Kelahiran simati (Jika waris simati adalah ibubapa / adik beradik)\n\n 2. WAKIL WARIS\n a. 1 salinan kad pengenalan / passport\n b. 1 salinan dokumen pembuktian pertalian dengan simati\n i. Sijil Kelahiran (jika waris adalah anak / adik beradik)\n ii. Sijil Perkahwinan (jika waris adalah pasangan)\n\n 3. PEMBELI (JIKA PENERIMA KENDERAAN ADALAH PEMBELI)\n a. 1 salinan kad pengenalan / passport\n b. Bukti pembelian kenderaan\n\n 4. HARTA ALIH - KENDERAAN\n a. Geran baru - 1 salinan geran kenderaan (depan sahaja)\n * Perlu sertakan carian e-hakmilik kenderaan / bukti penyelesaian hutang / bukti pembelian tunai\n b. Geran lama - 1 salinan geran kenderaan (depan dan belakang sahaja)\n * Jika masih mempunyai hakmilik dituntut yang belum dibatalkan dan pinjaman telah selesai, perlu sertakan carian e-hakmilik / bukti penyelesaian hutang\n\n 5. MINIMUM DEPOSIT\n RM50\n 6. TEMPOH PENTADBIRAN\n 30 hari dari tarikh pembukaan fail dan dokumen lengkap\n\n 7. BORANG YANG BERKAITAN\n a. Borang Permohonan Pentadbiran Harta Pusaka\n b. Senarai Semak Dokumen Yang Perlu Disertakan (Checklist)\n c. Surat Akuan Pindahmilik Kenderaan\n d. Contoh Pengisian - Borang Permohonan Pentadbiran Harta Pusaka\n e. Contoh Pengisian - Surat Akuan Pindahmilik Kenderaan\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini.\n a. Jumlah nilaian RM3,000 dan ke bawah : RM50\n b. Jumlah nilaian RM3,000.01 - RM5,000 : RM150\n c. Jumlah nilaian RM5,000.01 - RM10,000 : 5.00% ke atas nilai kenderaan\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke mana-mana cawangan kami yang berdekatan untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    pusaka_my_sahaja_tidak_ya: {
        id: 'pusaka_my_sahaja_tidak_ya',
        message: `Bagi kenderaan yang masih mempunyai hutang, waris hendaklah menyelesaikan hutang tersebut terlebih dahulu sebelum proses pindahmilik dibuat.\n\n Berikut adalah antara kaedah yang boleh digunakan untuk menyelesaikan hutang kenderaan Simati.\n a. Bayar secara sekaligus (lump sum) kepada institusi kewangan.\n b. Bayar secara ansuran bulanan sehingga selesai hutang.\n c. Buat pembiayaan semula (refinancement) bagi tujuan penyelesaian hutang Simati.\n\n Ada apa-apa lagi yang boleh AIRA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    pusaka_my_sahaja_ya: {
        id: 'pusaka_my_sahaja_ya',
        message: `Boleh ARIA tahu, di mana pentadbiran sebelum ini dibuat?`,
        options: [
            { label: "1️⃣ Mahkamah Tinggi Sivil", nextStep: 'pusaka_my_sahaja_ya_sivil' },
            { label: '2️⃣ Unit Pusaka Kecil, Pejabat Tanah Daerah', nextStep: 'pusaka_my_sahaja_ya_kecil' },
            { label: "3️⃣ Amanah Raya Berhad", nextStep: 'pusaka_my_sahaja_ya_arb' },
        ]
    },
    pusaka_my_sahaja_ya_sivil: {
        id: 'pusaka_my_sahaja_ya_sivil',
        message: `Memandangkan harta pusaka simati pernah ditadbir, permohonan aset tambahan perlu diteruskan di Mahkamah Tinggi.\n\n Adakah **{name}** ingin mendapatkan penerangan lanjut?`,
        options: [
            { label: '1️⃣ Tidak', nextStep: 'exit_my' },
            { label: '2️⃣ Ya', nextStep: 'retrieve_page1_my' },
        ]
    },
    pusaka_my_sahaja_ya_kecil: {
        id: 'pusaka_my_sahaja_ya_kecil',
        message: `Memandangkan harta pusaka simati pernah ditadbir, permohonan aset tambahan perlu diteruskan di Unit Pusaka Kecil.\n\n Adakah **{name}** ingin mendapatkan penerangan lanjut?`,
        options: [
            { label: '1️⃣ Tidak', nextStep: 'exit_my' },
            { label: '2️⃣ Ya', nextStep: 'retrieve_page1_my' },
        ]
    },
    pusaka_my_sahaja_ya_arb: {
        id: 'pusaka_my_sahaja_ya_arb',
        message: `Memandangkan harta pusaka simati pernah ditadbir di sini, **{name}** perlu membuat permohonan aset tambahan bagi aset yang ingin ditadbir.`,
        options: [
            { label: '1️⃣ Teruskan ke aset tambahan', nextStep: 'pusaka_my_aset' },
        ]
    },
    pusaka_my_pusaka: {
        id: 'pusaka_my_pusaka',
        message: `Untuk makluman **{name}**, pentadbiran pusaka diperlukan bagi aset simati yang tidak mempunyai penama atau hibah. Surat Kuasa akan dikeluarkan untuk mentadbir aset simati.\n\n Boleh ARIA tahu lokasi harta simati?`,
        options: [
            { label: "1️⃣ Semenanjung", nextStep: 'pusaka_my_pusaka_semenanjung' },
            { label: '2️⃣ Sabah', nextStep: 'sabah_my' },
            { label: "3️⃣ Sarawak", nextStep: 'sarawak_my' },
        ]
    },
    pusaka_my_pusaka_semenanjung: {
        id: 'pusaka_my_pusaka_semenanjung',
        message: `Sepanjang pengetahuan **{name}**, adakah pentadbiran pusaka simati pernah dibuat sebelum ini?`,
        options: [
            { label: "1️⃣ Ya, pernah dibuat", nextStep: 'pusaka_my_pusaka_semenanjung_ya' },
            { label: '2️⃣ Tidak pernah dibuat sebelum ini', nextStep: 'pusaka_my_pusaka_semenanjung_tidak' },
        ]
    },
    pusaka_my_pusaka_semenanjung_ya: {
        id: 'pusaka_my_pusaka_semenanjung_ya',
        message: `Boleh ARIA tahu, di mana pentadbiran sebelum ini dibuat?`,
        options: [
            { label: "1️⃣ Mahkamah Tinggi Sivil", nextStep: 'pusaka_my_pusaka_semenanjung_ya_sivil' },
            { label: '2️⃣ Unit Pusaka Kecil, Pejabat Tanah Daerah', nextStep: 'pusaka_my_pusaka_semenanjung_ya_daerah' },
            { label: "3️⃣ Amanah Raya Berhad", nextStep: 'pusaka_my_pusaka_semenanjung_ya_arb' },
        ]
    },
    pusaka_my_pusaka_semenanjung_ya_sivil: {
        id: 'pusaka_my_pusaka_semenanjung_ya_sivil',
        message: `Memandangkan harta pusaka simati pernah ditadbir, permohonan aset tambahan perlu diteruskan di Mahkamah Tinggi.\n\n Adakah **{name}** ingin mendapatkan penerangan lanjut?`,
        options: [
            { label: '1️⃣ Ya', nextStep: 'retrieve_page1_my' },
            { label: '2️⃣ Tidak', nextStep: 'exit_my' },
        ]
    },
    pusaka_my_pusaka_semenanjung_ya_daerah: {
        id: 'pusaka_my_pusaka_semenanjung_ya_daerah',
        message: `Memandangkan harta pusaka simati pernah ditadbir, permohonan aset tambahan perlu diteruskan di Unit Pusaka Kecil.\n\n Adakah **{name}** ingin mendapatkan penerangan lanjut?`,
        options: [
            { label: '1️⃣ Ya', nextStep: 'retrieve_page1_my' },
            { label: '2️⃣ Tidak', nextStep: 'exit_my' },
        ]
    },
    pusaka_my_pusaka_semenanjung_ya_arb: {
        id: 'pusaka_my_pusaka_semenanjung_ya_arb',
        message: `Memandangkan harta pusaka simati pernah ditadbir di sini, **{name}** perlu membuat permohonan aset tambahan bagi aset yang ingin ditadbir.`,
        options: [
            { label: '1️⃣ Teruskan ke aset tambahan', nextStep: 'pusaka_my_aset' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak: {
        id: 'pusaka_my_pusaka_semenanjung_tidak',
        message: `Apakah agama yang dianuti oleh Simati?`,
        options: [
            { label: '1️⃣ Islam', nextStep: 'pusaka_my_pusaka_semenanjung_tidak_islam' },
            { label: '2️⃣ Bukan Islam', nextStep: 'pusaka_my_pusaka_semenanjung_tidak_bukan_islam' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak_islam: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_islam',
        message: `Adakah Simati mempunyai wasiat?`,
        options: [
            { label: '1️⃣ Ya', nextStep: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya' },
            { label: '2️⃣ Tidak', nextStep: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak' },
        ]
    },

    pusaka_my_pusaka_semenanjung_tidak_islam_ya: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya',
        message: `Apakah harta yang ditinggalkan oleh simati?`,
        options: [
            { label: "1️⃣ Harta Alih sahaja (tidak melebihi RM100,000)", nextStep: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak_melebihi_rm100' },
            { label: '2️⃣ Harta Alih sahaja (melebihi RM100,000)', nextStep: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya_melebihi_rm100' },
            { label: "3️⃣ Harta Alih dan Tak Alih / Harta Tak Alih sahaja", nextStep: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya_alih_sahaja' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak_melebihi_rm100: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak_melebihi_rm100',
        message: `1. SIMATI\n a. Sijil Kematian asal Simati & 1 salinan\n b. 1 salinan Sijil Kelahiran Simati\n c. Wasiat asal Simati & 1 salinan\n d. 1 salinan Sijil Perkahwinan/Perceraian (jika Simati berkahwin / bercerai)\n\n 2. WARIS SIMATI\n a. 1 salinan Kad Pengenalan dan Sijil Kelahiran waris\n b. 1 salinan Sijil Kematian (bagi waris yang meninggal sebelum / selepas simati)\n\n 3. AKUAN (SEDIAKAN YANG BERKAITAN SAHAJA) Perlu ditandatangan oleh saksi bebas di hadapan Pesuruhjaya Sumpah dan membuat penyeteman di laman web Lembaga Hasil Dalam Negeri (LHDN). Salinan kad pengenalan saksi perlu disertakan)\n\n a. Akuan Berkanun Bujang (jika Simati meninggal Bujang)\n b. Akuan Tiada Zuriat (jika Simati tidak mempunyai anak)\n c. Akuan Waris Tunggal (jika Simati hanya meninggalkan seorang waris sahaja)\n\n 4. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang) dan tidak mempunyai tanggungan / selesai pinjaman\n b. 1 salinan penyata akaun / buku simpanan akaun simati(ASB / Bank / Tabung Haji)\n c. 1 salinan penyata akaun semasa\n d. 1 salinan penyata / buku simpanan akaun bersama\n e. 1 salinan penyata Saham Bursa Malaysia\n f. 1 salinan penyata Deposit Tetap\n g. 1 salinan slip Peti Simpanan Selamat (Safe Deposit Box)\n h. 1 salinan sijil Saham Syarikat\n i. 1 salinan penyata KWSP\n j. 1 salinan polisi Insuran\n k. 1 salinan lesen vessel\n\n 5. MINIMUM DEPOSIT\n RM50\n\n 6. TEMPOH PENTADBIRAN\n 4 - 6 bulan dari tarikh pembukaan fail\n\n 7. BORANG YANG BERKAITAN\n a. Borang Permohonan Pentadbiran Harta Pusaka\n b. Senarai Semak Dokumen Yang Perlu Disertakan (Checklist)\n c. Akuan Berkanun (Kahwin / Cerai / Tiada Zuriat / Waris Tunggal / Bujang)\n d. Contoh Pengisian - Borang Permohonan Pentadbiran Harta Pusaka\n e. Contoh Pengisian - Akuan Berkanun (Kahwin / Cerai / Tiada Zuriat / Waris Tunggal / Bujang)\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini.\n\n 5% x RM25,000 yang pertama\n 4% x RM225,000 yang berikutnya\n 3% x RM250,000 yang berikutnya\n 2% x RM500,000 yang berikutnya\n 1% x baki selebihnya\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke mana-mana cawangan kami yang berdekatan untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/. `,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak_islam_ya_melebihi_rm100: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya_melebihi_rm100',
        message: `1. SIMATI\n a. Sijil Kematian asal Simati & 1 salinan\n b. Wasiat asal Simati & 1 salinan\n c. Sijil Faraid asal & 1 salinan (boleh dipohon di Mahkamah Syariah)\n\n 2. WARIS SIMATI\n a. 1 salinan Kad Pengenalan waris\n\n 3. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang) dan tidak mempunyai tanggungan / selesai pinjaman\n b. 1 salinan penyata akaun / buku simpanan akaun simati(ASB / Bank / Tabung Haji)\n c. 1 salinan penyata akaun semasa\n d. 1 salinan penyata / buku simpanan akaun bersama\n e. 1 salinan penyata Saham Bursa Malaysia\n f. 1 salinan penyata Deposit Tetap\n g. 1 salinan slip Peti Simpanan Selamat (Safe Deposit Box)\n h. 1 salinan sijil Saham Syarikat\n i. 1 salinan penyata KWSP\n j. 1 salinan polisi Insuran\n k. 1 salinan lesen vessel\n\n 4. MINIMUM DEPOSIT\n a. RM50\n b. RM1000 (jika jumlah aset melebihi RM600,000)\n\n 5. TEMPOH PENTADBIRAN a. 6 bulan dari tarikh pembukaan fail b. 12 bulan dari tarikh pembukaan fail (jika jumlah aset melebihi RM600,000)\n\n 6. BORANG YANG BERKAITAN\n a. Borang Permohonan Pentadbiran Harta Pusaka\n b. Senarai Semak Dokumen Yang Perlu Disertakan (Checklist)\n c. Contoh Pengisian - Borang Permohonan Pentadbiran Harta Pusaka\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini.\n\n 5% x RM25,000 yang pertama\n 4% x RM225,000 yang berikutnya\n 3% x RM250,000 yang berikutnya\n 2% x RM500,000 yang berikutnya\n 1% x baki selebihnya\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke mana-mana cawangan kami yang berdekatan untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak_islam_ya_alih_sahaja: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya_alih_sahaja',
        message: `1. SIMATI\n a. Sijil Kematian asal Simati & 1 salinan\n b. Wasiat asal Simati & 1 salinan\n c. Sijil Faraid asal & 1 salinan (boleh dipohon di Mahkamah Syariah)\n\n 2. WARIS SIMATI\n a. 1 salinan Kad Pengenalan waris\n\n 3. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang) dan tidak mempunyai tanggungan / selesai pinjaman\n b. 1 salinan penyata akaun / buku simpanan akaun simati(ASB / Bank / Tabung Haji)\n c. 1 salinan penyata akaun semasa\n d. 1 salinan penyata / buku simpanan akaun bersama\n e. 1 salinan penyata Saham Bursa Malaysia\n f. 1 salinan penyata Deposit Tetap\n g. 1 salinan slip Peti Simpanan Selamat (Safe Deposit Box)\n h. 1 salinan sijil Saham Syarikat\n i. 1 salinan penyata KWSP\n j. 1 salinan polisi Insuran\n k. 1 salinan lesen vessel\n\n 4. HARTA TAK ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan perjanjian jual beli (S&P) untuk rumah yang belum memilik hakmilik strata\n b. 1 salinan hakmilik strata rumah\n c. 1 salinan geran rumah\n d. 1 salinan geran tanah\n e. Resit asal cukai tanah terkini dan 1 salinan\n f. Resit asal cukai pintu terkini dan 1 salinan\n\n 5. MINIMUM DEPOSIT\n RM1000/hartanah\n\n 6. TEMPOH PENTADBIRAN\n 12 bulan dari tarikh pembukaan fail\n\n 7. BORANG YANG BERKAITAN\n a. Borang Permohonan Pentadbiran Harta Pusaka\n b. Senarai Semak Dokumen Yang Perlu Disertakan (Checklist)\n c. Contoh Pengisian - Borang Permohonan Pentadbiran Harta Pusaka\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini.\n\n 5% x RM25,000 yang pertama\n 4% x RM225,000 yang berikutnya\n 3% x RM250,000 yang berikutnya\n 2% x RM500,000 yang berikutnya\n 1% x baki selebihnya\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke mana-mana cawangan kami yang berdekatan untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak',
        message: `Apakah harta yang ditinggalkan `,
        options: [
            { label: "1️⃣ Harta Alih sahaja (tidak melebihi RM100,000)", nextStep: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak_tidak_melebihi_rm' },
            { label: '2️⃣ Harta Alih sahaja(melebihi RM100,000)', nextStep: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak_melebihi' },
            { label: "3️⃣ Harta Alih dan Tak Alih / Hartax Tak Alih sahaja (jumlah melebihi RM5 juta)", nextStep: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak_melebihi_rm5' },
            { label: "4️⃣ Harta Alih dan Tak Alih / Harta Tak Alih sahaja (jumlah tidak melebihi RM5 juta)", nextStep: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak_tidak_melebihi_rm5' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak_tidak_melebihi_rm: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak_tidak_melebihi_rm',
        message: `1. SIMATI\n a. Sijil Kematian asal Simati & 1 salinan\n b. 1 salinan Sijil Kelahiran Simati\n c. 1 salinan Sijil Perkahwinan/Perceraian (jika Simati berkahwin / bercerai)\n\n 2. WARIS SIMATI\n a. 1 salinan Kad Pengenalan dan Sijil Kelahiran waris\n b. 1 salinan Sijil Kematian (bagi waris yang meninggal sebelum / selepas simati)\n\n 3. AKUAN (PILIH YANG BERKAITAN SAHAJA)\n Perlu ditandatangan oleh saksi bebas di hadapan Pesuruhjaya Sumpah dan membuat penyeteman di laman web Lembaga Hasil Dalam Negeri (LHDN). Salinan kad pengenalan saksi perlu disertakan)\n a. Akuan Berkanun Bujang (jika Simati meninggal Bujang)\n b. Akuan Berkanun Kahwin - bagi Bukan Islam sahaja (jika perkahwinan Simati tidak didaftarkan)\n c. Akuan Tiada Zuriat (jika Simati tidak mempunyai anak)\n d. Akuan Waris Tunggal (jika Simati hanya meninggalkan seorang waris sahaja)\n\n 4. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang) dan tidak mempunyai tanggungan / selesai pinjaman\n b. 1 salinan penyata akaun / buku simpanan akaun simati (ASB / Bank / Tabung Haji)\n c. 1 salinan penyata akaun semasa\n d. 1 salinan penyata / buku simpanan akaun bersama\n e. 1 salinan penyata Saham Bursa Malaysia\n f. 1 salinan penyata Deposit Tetap\n g. 1 salinan slip Peti Simpanan Selamat (Safe Deposit Box)\n h. 1 salinan sijil Saham Syarikat\n i. 1 salinan penyata KWSP\n j. 1 salinan polisi Insuran\n k. 1 salinan lesen vessel\n\n 4. MINIMUM DEPOSIT\n RM50\n\n 5. TEMPOH PENTADBIRAN\n 4-6 bulan dari tarikh pembukaan fail\n\n 6. BORANG YANG BERKAITAN\n a. Borang Permohonan Pentadbiran Harta Pusaka\n b. Senarai Semak Dokumen Yang Perlu Disertakan (Checklist)\n c. Akuan Berkanun (Kahwin / Cerai / Tiada Zuriat / Waris Tunggal / Bujang)\n d. Contoh Pengisian - Borang Permohonan Pentadbiran Harta Pusaka\n e. Contoh Pengisian - Akuan Berkanun (Kahwin / Cerai / Tiada Zuriat / Waris Tunggal / Bujang)\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini.\n\n 5% x RM25,000 yang pertama\n 4% x RM225,000 yang berikutnya\n 3% x RM250,000 yang berikutnya\n 2% x RM500,000 yang berikutnya\n 1% x baki selebihnya\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke mana-mana cawangan kami yang berdekatan untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak_melebihi: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak_melebihi',
        message: `1. SIMATI\n a. Sijil Kematian asal Simati & 1 salinan\n b. Sijil Faraid asal & 1 salinan (boleh dipohon di Mahkamah Syariah)\n\n 2. WARIS SIMATI\n a. 1 salinan Kad Pengenalan waris\n\n 3. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang) dan tidak mempunyai tanggungan / selesai pinjaman\n b. 1 salinan penyata akaun / buku simpanan akaun simati (ASB / Bank / Tabung Haji)\n c. 1 salinan penyata akaun semasa\n d. 1 salinan penyata / buku simpanan akaun bersama\n e. 1 salinan penyata Saham Bursa Malaysia\n f. 1 salinan penyata Deposit Tetap\n g. 1 salinan slip Peti Simpanan Selamat (Safe Deposit Box)\n h. 1 salinan sijil Saham Syarikat\n i. 1 salinan penyata KWSP\n j. 1 salinan polisi Insuran\n k. 1 salinan lesen vessel\n\n 4. MINIMUM DEPOSIT\n a. RM50\n b. RM1000 (jika jumlah aset melebihi RM600,000)\n 5. TEMPOH PENTADBIRAN\n a. 6 bulan dari tarikh pembukaan fail\n b. 12 bulan dari tarikh pembukaan fail (jika jumlah aset melebihi RM600,000)\n\n 6. BORANG YANG BERKAITAN\n a. Borang Permohonan Pentadbiran Harta Pusaka\n b. Senarai Semak Dokumen Yang Perlu Disertakan (Checklist)\n c. Contoh Pengisian - Borang Permohonan Pentadbiran Harta Pusaka\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini.\n\n 5% x RM25,000 yang pertama\n 4% x RM225,000 yang berikutnya\n 3% x RM250,000 yang berikutnya\n 2% x RM500,000 yang berikutnya\n 1% x baki selebihnya\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke mana-mana cawangan kami yang berdekatan untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak_melebihi_rm5: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak_melebihi_rm5',
        message: `1. SIMATI\n a. Sijil Kematian asal Simati & 1 salinan\n b. Sijil Faraid asal & 1 salinan (boleh dipohon di Mahkamah Syariah)\n\n 2. WARIS SIMATI\n a. 1 salinan Kad Pengenalan waris\n\n 3. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang) dan tidak mempunyai tanggungan / selesai pinjaman\n b. 1 salinan penyata akaun / buku simpanan akaun simati (ASB / Bank / Tabung Haji)\n c. 1 salinan penyata akaun semasa\n d. 1 salinan penyata / buku simpanan akaun bersama\n e. 1 salinan penyata Saham Bursa Malaysia\n f. 1 salinan penyata Deposit Tetap\n g. 1 salinan slip Peti Simpanan Selamat (Safe Deposit Box)\n h. 1 salinan sijil Saham Syarikat\n i. 1 salinan penyata KWSP\n j. 1 salinan polisi Insuran\n k. 1 salinan lesen vessel\n\n 4. HARTA TAK ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan perjanjian jual beli (S&P) untuk rumah yang belum memilik hakmilik strata\n b. 1 salinan hakmilik strata rumah\n c. 1 salinan geran rumah\n d. 1 salinan geran tanah\n e. Resit asal cukai tanah terkini dan 1 salinan\n f. Resit asal cukai pintu terkini dan 1 salinan\n\n 5. MINIMUM DEPOSIT\n RM1000/hartanah\n\n 6. TEMPOH PENTADBIRAN\n 12 bulan dari tarikh pembukaan fail\n\n 7. BORANG YANG BERKAITAN\n a. Borang Permohonan Pentadbiran Harta Pusaka\n b. Senarai Semak Dokumen Yang Perlu Disertakan (Checklist)\n c. Contoh Pengisian - Borang Permohonan Pentadbiran Harta Pusaka\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini.\n\n 5% x RM25,000 yang pertama\n 4% x RM225,000 yang berikutnya\n 3% x RM250,000 yang berikutnya\n 2% x RM500,000 yang berikutnya\n 1% x baki selebihnya\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke mana-mana cawangan kami yang berdekatan untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak_tidak_melebihi_rm5: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_islam_ya_tidak_tidak_melebihi_rm5',
        message: `1. SIMATI\n a. Sijil Kematian asal Simati & 1 salinan\n b. 1 salinan Sijil Kelahiran Simati\n c. 1 salinan Sijil Perkahwinan/Perceraian (jika Simati berkahwin / bercerai)\n\n 2. WARIS SIMATI\n a. 1 salinan Kad Pengenalan dan Sijil Kelahiran waris\n b. 1 salinan Sijil Kematian (bagi waris yang meninggal sebelum / selepas simati)\n\n 3. AKUAN (PILIH YANG BERKAITAN SAHAJA) Perlu ditandatangan oleh saksi bebas di hadapan Pesuruhjaya Sumpah dan membuat penyeteman di laman web Lembaga Hasil Dalam Negeri (LHDN). Salinan kad pengenalan saksi perlu disertakan)\n a. Akuan Berkanun Bujang (jika Simati meninggal Bujang)\n b. Akuan Berkanun Kahwin - bagi Bukan Islam sahaja (jika perkahwinan Simati tidak didaftarkan)\n c. Akuan Tiada Zuriat (jika Simati tidak mempunyai anak)\n d. Akuan Waris Tunggal (jika Simati hanya meninggalkan seorang waris sahaja)\n\n 4. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang) dan tidak mempunyai tanggungan / selesai pinjaman\n b. 1 salinan penyata akaun / buku simpanan akaun simati (ASB / Bank / Tabung Haji)\n c. 1 salinan penyata akaun semasa\n d. 1 salinan penyata / buku simpanan akaun bersama\n e. 1 salinan penyata Saham Bursa Malaysia\n f. 1 salinan penyata Deposit Tetap\n g. 1 salinan slip Peti Simpanan Selamat (Safe Deposit Box)\n h. 1 salinan sijil Saham Syarikat\n i. 1 salinan penyata KWSP\n j. 1 salinan polisi Insuran\n k. 1 salinan lesen vessel\n 5. HARTA TAK ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan perjanjian jual beli (S&P) untuk rumah yang\n belum memilik hakmilik strata\n b. 1 salinan hakmilik strata rumah\n c. 1 salinan geran rumah\n d. 1 salinan geran tanah\n e. Resit asal cukai tanah terkini dan 1 salinan\n f. Resit asal cukai pintu terkini dan 1 salinan\n\n 6. MINIMUM DEPOSIT\n RM300/hartanah\n\n 7. TEMPOH PENTADBIRAN\n 12 bulan dari tarikh pembukaan fail\n\n 8. BORANG YANG BERKAITAN\n a. Borang Permohonan Pentadbiran Harta Pusaka\n b. Senarai Semak Dokumen Yang Perlu Disertakan (Checklist)\n c. Akuan Berkanun (Kahwin / Cerai / Tiada Zuriat / Waris Tunggal / Bujang)\n d. Contoh Pengisian - Borang Permohonan Pentadbiran Harta Pusaka\n e. Contoh Pengisian - Akuan Berkanun (Kahwin / Cerai / Tiada Zuriat / Waris Tunggal / Bujang)\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini. 2% x jumlah aset simati\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke mana-mana cawangan kami yang berdekatan untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak_bukan_islam: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_bukan_islam',
        message: `Adakah Simati mempunyai wasiat?`,
        options: [
            { label: '1️⃣ Ya', nextStep: ' pusaka_my_pusaka_semenanjung_tidak_bukan_islam_ya' },
            { label: '2️⃣ Tidak', nextStep: ' pusaka_my_pusaka_semenanjung_tidak_bukan_islam_tidak' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak_bukan_islam_ya: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_bukan_islam_ya',
        message: `Apakah harta yang ditinggalkan oleh simati?`,
        options: [
            { label: '1️⃣ Harta Alih sahaja', nextStep: ' pusaka_my_pusaka_semenanjung_tidak_bukan_islam_ya_sahaja' },
            { label: '2️⃣ Harta Alih dan Tak Alih / Harta Tak Alih sahaja', nextStep: 'pusaka_my_pusaka_semenanjung_tidak_bukan_islam_ya_harta_dan_tak' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak_bukan_islam_ya_sahaja: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_bukan_islam_ya_sahaja',
        message: `1. SIMATI\n a. Sijil Kematian asal Simati & 1 salinan\n b. Wasiat asal Simati & 1 salinan\n\n 2. WARIS SIMATI\n a. 1 salinan Kad Pengenalan penerima wasiat\n\n 3. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang) dan tidak mempunyai tanggungan / selesai pinjaman\n b. 1 salinan penyata akaun / buku simpanan akaun simati (ASB / Bank)\n c. 1 salinan penyata akaun semasa\n d. 1 salinan penyata / buku simpanan akaun bersama\n e. 1 salinan penyata Saham Bursa Malaysia\n f. 1 salinan penyata Deposit Tetap\n g. 1 salinan slip Peti Simpanan Selamat (Safe Deposit Box)\n h. 1 salinan sijil Saham Syarikat\n i. 1 salinan penyata KWSP\n j. 1 salinan polisi Insuran\n k. 1 salinan lesen vessel\n\n 4. MINIMUM DEPOSIT\n a. RM50\n b. RM1000 (jika jumlah aset melebihi RM600,000)\n\n 5. TEMPOH PENTADBIRAN\n a. 4 - 6 bulan dari tarikh pembukaan fail\n b. 12 bulan dari tarikh pembukaan fail (jika jumlah aset melebihi RM600,000)\n\n 6. BORANG YANG BERKAITAN\n a. Borang Permohonan Pentadbiran Harta Pusaka\n b. Senarai Semak Dokumen Yang Perlu Disertakan (Checklist)\n c. Contoh Pengisian - Borang Permohonan Pentadbiran Harta Pusaka\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini.\n\n 5% x RM25,000 yang pertama\n 4% x RM225,000 yang berikutnya\n 3% x RM250,000 yang berikutnya\n 2% x RM500,000 yang berikutnya\n 1% x baki selebihnya\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke mana-mana cawangan kami yang berdekatan untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak_bukan_islam_ya_harta_dan_tak: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_bukan_islam_ya_harta_dan_tak',
        message: `1. SIMATI\n a. Sijil Kematian asal Simati & 1 salinan\n b. Wasiat asal Simati & 1 salinan\n c. Sijil Faraid asal & 1 salinan (boleh dipohon di Mahkamah Syariah)\n\n 2. WARIS SIMATI\n a. 1 salinan Kad Pengenalan waris\n\n 3. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang) dan tidak mempunyai tanggungan / selesai pinjaman\n b. 1 salinan penyata akaun / buku simpanan akaun simati (ASB / Bank)\n c. 1 salinan penyata akaun semasa\n d. 1 salinan penyata / buku simpanan akaun bersama\n e. 1 salinan penyata Saham Bursa Malaysia\n f. 1 salinan penyata Deposit Tetap\n g. 1 salinan slip Peti Simpanan Selamat (Safe Deposit Box)\n h. 1 salinan sijil Saham Syarikat\n i. 1 salinan penyata KWSP\n j. 1 salinan polisi Insuran\n k. 1 salinan lesen vessel\n\n 4. HARTA TAK ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan perjanjian jual beli (S&P) untuk rumah yang belum memilik hakmilik strata\n b. 1 salinan hakmilik strata rumah\n c. 1 salinan geran rumah\n d. 1 salinan geran tanah\n e. Resit asal cukai tanah terkini dan 1 salinan\n f. Resit asal cukai pintu terkini dan 1 salinan\n\n 5. MINIMUM DEPOSIT\n RM1000/hartanah\n\n 6. TEMPOH PENTADBIRAN\n 12 bulan dari tarikh pembukaan fail (jika jumlah aset melebihi RM600,000)\n\n 7. BORANG YANG BERKAITAN\n a. Borang Permohonan Pentadbiran Harta Pusaka\n b. Senarai Semak Dokumen Yang Perlu Disertakan (Checklist)\n c. Contoh Pengisian - Borang Permohonan Pentadbiran Harta Pusaka\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini.\n\n 5% x RM25,000 yang pertama\n 4% x RM225,000 yang berikutnya\n 3% x RM250,000 yang berikutnya\n 2% x RM500,000 yang berikutnya\n 1% x baki selebihnya\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke mana-mana cawangan kami yang berdekatan untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak_bukan_islam_tidak: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_bukan_islam_tidak',
        message: `Apakah harta yang ditinggalkan oleh simati?`,
        options: [
            { label: "1️⃣ Harta Alih sahaja", nextStep: 'pusaka_my_pusaka_semenanjung_tidak_bukan_islam_tidak_alih' },
            { label: '2️⃣ Harta Alih dan Tak Alih / Harta Tak Alih sahaja (jumlah melebihi RM5 juta)', nextStep: 'pusaka_my_pusaka_semenanjung_tidak_bukan_islam_tidak_melbihi_rm5' },
            { label: "3️⃣ Harta Alih dan Tak Alih / Harta Tak Alih sahaja (jumlah tidak melebihi RM5 juta)", nextStep: 'pusaka_my_pusaka_semenanjung_tidak_bukan_islam_tidak_tidak_melbihi_rm5' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak_bukan_islam_tidak_alih: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_bukan_islam_tidak_alih',
        message: `1. SIMATI\n a. Sijil Kematian asal Simati & 1 salinan\n b. 1 salinan Sijil Kelahiran Simati\n c. 1 salinan Sijil Perkahwinan/Perceraian (jika Simati berkahwin / bercerai)\n\n 2. WARIS SIMATI\n a. 1 salinan Kad Pengenalan dan Sijil Kelahiran waris\n b. 1 salinan Sijil Kematian (bagi waris yang meninggal sebelum / selepas simati)\n\n 3. AKUAN (SEDIAKAN YANG BERKAITAN SAHAJA) Perlu ditandatangan oleh saksi bebas di hadapan Pesuruhjaya Sumpah dan membuat penyeteman di laman web Lembaga Hasil Dalam Negeri (LHDN). Salinan kad pengenalan saksi perlu disertakan)\n a. Akuan Berkanun Bujang (jika Simati meninggal Bujang)\n b. Akuan Berkanun Kahwin (jika perkahwinan Simati tidak didaftarkan)\n c. Akuan Tiada Zuriat (jika Simati tidak mempunyai anak)\n d. Akuan Waris Tunggal (jika Simati hanya meninggalkan seorang waris sahaja)\n\n 4. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang) dan tidak mempunyai tanggungan / selesai pinjaman\n b. 1 salinan penyata akaun / buku simpanan akaun simati (ASB / Bank / Tabung Haji)\n c. 1 salinan penyata akaun semasa\n d. 1 salinan penyata / buku simpanan akaun bersama\n e. 1 salinan penyata Saham Bursa Malaysia\n f. 1 salinan penyata Deposit Tetap\n g. 1 salinan slip Peti Simpanan Selamat (Safe Deposit Box)\n h. 1 salinan sijil Saham Syarikat\n i. 1 salinan penyata KWSP\n j. 1 salinan polisi Insuran\n k. 1 salinan lesen vessel\n\n 4. MINIMUM DEPOSIT\n a. RM50\n b. RM1000 (jika jumlah aset melebihi RM600,000)\n\n 5. TEMPOH PENTADBIRAN\n a. 4 - 6 bulan dari tarikh pembukaan fail\n b. 12 bulan dari tarikh pembukaan fail (jika jumlah aset melebihi RM600,000)\n\n 6. BORANG YANG BERKAITAN\n a. Borang Permohonan Pentadbiran Harta Pusaka\n b. Senarai Semak Dokumen Yang Perlu Disertakan (Checklist)\n c. Akuan Berkanun (Kahwin / Cerai / Tiada Zuriat / Waris Tunggal / Bujang)\n d. Contoh Pengisian - Borang Permohonan Pentadbiran Harta Pusaka\n e. Contoh Pengisian - Akuan Berkanun (Kahwin / Cerai / Tiada Zuriat / Waris Tunggal / Bujang)\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini.\n 5% x RM25,000 yang pertama\n 4% x RM225,000 yang berikutnya\n 3% x RM250,000 yang berikutnya\n 2% x RM500,000 yang berikutnya\n 1% x baki selebihnya\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke mana-mana cawangan kami yang berdekatan untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak_bukan_islam_tidak_melbihi_rm5: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_bukan_islam_tidak_melbihi_rm5',
        message: `1. SIMATI\n a. Sijil Kematian asal Simati & 1 salinan\n b. 1 salinan Sijil Kelahiran Simati\n c. 1 salinan Sijil Perkahwinan/Perceraian (jika Simati berkahwin / bercerai)\n\n2. WARIS SIMATI\n a. 1 salinan Kad Pengenalan dan Sijil Kelahiran waris\n b. 1 salinan Sijil Kematian (bagi waris yang meninggal sebelum / selepas simati)\n\n 3. AKUAN (SEDIAKAN YANG BERKAITAN SAHAJA) Perlu ditandatangan oleh saksi bebas di hadapan Pesuruhjaya Sumpah dan membuat penyeteman di laman web Lembaga Hasil Dalam Negeri (LHDN). Salinan kad pengenalan saksi perlu disertakan)\n a. Akuan Berkanun Bujang (jika Simati meninggal Bujang)\n b. Akuan Berkanun Kahwin (jika perkahwinan Simati tidak didaftarkan)\n c. Akuan Tiada Zuriat (jika Simati tidak mempunyai anak)\n d. Akuan Waris Tunggal (jika Simati hanya meninggalkan seorang waris sahaja)\n\n 4. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang) dan tidak mempunyai tanggungan / selesai pinjaman\n b. 1 salinan penyata akaun / buku simpanan akaun simati (ASB / Bank / Tabung Haji)\n c. 1 salinan penyata akaun semasa\n d. 1 salinan penyata / buku simpanan akaun bersama\n e. 1 salinan penyata Saham Bursa Malaysia\n f. 1 salinan penyata Deposit Tetap\n g. 1 salinan slip Peti Simpanan Selamat (Safe Deposit Box)\n h. 1 salinan sijil Saham Syarikat\n i. 1 salinan penyata KWSP\n j. 1 salinan polisi Insuran\n k. 1 salinan lesen vessel\n\n 5. HARTA TAK ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan perjanjian jual beli (S&P) untuk rumah yang belum memilik hakmilik strata\n b. 1 salinan hakmilik strata rumah\n c. 1 salinan geran rumah\n d. 1 salinan geran tanah\n e. Resit asal cukai tanah terkini dan 1 salinan\n f. Resit asal cukai pintu terkini dan 1 salinan\n\n 6. MINIMUM DEPOSIT RM1000/hartanah\n\n 7. TEMPOH PENTADBIRAN\n 12 bulan dari tarikh pembukaan fail\n\n 8. BORANG YANG BERKAITAN\n a. Borang Permohonan Pentadbiran Harta Pusaka\n b. Senarai Semak Dokumen Yang Perlu Disertakan (Checklist)\n c. Akuan Berkanun (Kahwin / Cerai / Tiada Zuriat / Waris Tunggal / Bujang)\n d. Contoh Pengisian - Borang Permohonan Pentadbiran Harta Pusaka\n e. Contoh Pengisian - Akuan Berkanun (Kahwin / Cerai / Tiada Zuriat / Waris Tunggal / Bujang)\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini.\n 5% x RM25,000 yang pertama\n 4% x RM225,000 yang berikutnya\n 3% x RM250,000 yang berikutnya\n 2% x RM500,000 yang berikutnya\n 1% x baki selebihnya\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke mana-mana cawangan kami yang berdekatan untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    pusaka_my_pusaka_semenanjung_tidak_bukan_islam_tidak_tidak_melbihi_rm5: {
        id: 'pusaka_my_pusaka_semenanjung_tidak_bukan_islam_tidak_tidak_melbihi_rm5',
        message: `1. SIMATI\n a. Sijil Kematian asal Simati & 1 salinan\n b. 1 salinan Sijil Kelahiran Simati\n c. 1 salinan Sijil Perkahwinan/Perceraian (jika Simati berkahwin / bercerai)\n\n 2. WARIS SIMATI\n a. 1 salinan Kad Pengenalan dan Sijil Kelahiran waris\n b. 1 salinan Sijil Kematian (bagi waris yang meninggal sebelum / selepas simati)\n\n 3. AKUAN (SEDIAKAN YANG BERKAITAN SAHAJA) Perlu ditandatangan oleh saksi bebas di hadapan Pesuruhjaya Sumpah dan membuat penyeteman di laman web Lembaga Hasil Dalam Negeri (LHDN). Salinan kad pengenalan saksi perlu disertakan)\n a. Akuan Berkanun Bujang (jika Simati meninggal Bujang)\n b. Akuan Berkanun Kahwin (jika perkahwinan Simati tidak didaftarkan)\n c. Akuan Tiada Zuriat (jika Simati tidak mempunyai anak)\n d. Akuan Waris Tunggal (jika Simati hanya meninggalkan seorang waris sahaja)\n\n 4. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang) dan tidak mempunyai tanggungan / selesai pinjaman\n b. 1 salinan penyata akaun / buku simpanan akaun simati (ASB / Bank / Tabung Haji)\n c. 1 salinan penyata akaun semasa\n d. 1 salinan penyata / buku simpanan akaun bersama\n e. 1 salinan penyata Saham Bursa Malaysia\n f. 1 salinan penyata Deposit Tetap\n g. 1 salinan slip Peti Simpanan Selamat (Safe Deposit Box)\n h. 1 salinan sijil Saham Syarikat\n i. 1 salinan penyata KWSP\n j. 1 salinan polisi Insuran\n k. 1 salinan lesen vessel\n\n 5. HARTA TAK ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\na. 1 salinan perjanjian jual beli (S&P) untuk rumah yang belum memilik hakmilik strata\n b. 1 salinan hakmilik strata rumah\n c. 1 salinan geran rumah\n d. 1 salinan geran tanah\n e. Resit asal cukai tanah terkini dan 1 salinan\n f. Resit asal cukai pintu terkini dan 1 salinan\n\n 6. MINIMUM DEPOSIT\n a. RM300/hartanah\n\n 7. TEMPOH PENTADBIRAN\n 12 bulan dari tarikh pembukaan fail\n\n 8. BORANG YANG BERKAITAN\n a. Borang Permohonan Pentadbiran Harta Pusaka\n b. Senarai Semak Dokumen Yang Perlu Disertakan (Checklist)\n c. Akuan Berkanun (Kahwin / Cerai / Tiada Zuriat / Waris Tunggal / Bujang)\n d. Contoh Pengisian - Borang Permohonan Pentadbiran Harta Pusaka\n e. Contoh Pengisian - Akuan Berkanun (Kahwin / Cerai / Tiada Zuriat / Waris Tunggal / Bujang)\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini. 2% x jumlah aset simati\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke mana-mana cawangan kami yang berdekatan untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    pusaka_my_borang: {
        id: 'pusaka_my_borang',
        message: `Sila pilih borang yang diperlukan\n\n 1. [Borang Permohonan Pentadbiran Harta Pusaka](https://drive.google.com/file/d/1KziGKpTnw4eLp_8FHup-SCAEQM625tnc/view?usp=sharing)\n 2. [Senarai Semakan Dokumen](https://drive.google.com/file/d/1HedU88RKdbxcU3fjtU8nUQUxxvi7xIoR/view)\n 3. [Surat Persetujuan Penolakan](https://drive.google.com/file/d/1Iw5PPCU704RCX55T7_fNZ7iPFh1McT08/view)\n 4. [Akuan Berkanun Kematian](https://drive.google.com/file/d/14vpHwW7ifhdYAXTkaF0dvOqch-pDvkvb/view)\n 5. [Akuan Berkanun (Kahwin / Cerai / Tiada Zuriat / Waris Tunggal / Bujang)](https://drive.google.com/file/d/1sq7N2VPONYdnATA-Fm8_UC8mQ-beMr5H/view)\n 6. [Surat Akujanji dan Tanggung Rugi Bagi Pindahmilik Kenderaan](https://drive.google.com/file/d/1TYJJ-O_mkuioqCmnCkper8vQuqTYA7Zl/view)\n 7. [Borang Pengesahan Akaun Bank Penerima](https://drive.google.com/file/d/1wGZeu1tu3kUgscM6XVOWS5dmjRFfmQNv/view)\n 8. [Akuan Pindahmilik Kenderaan](https://drive.google.com/file/d/1Nwhv0lP2pCcNgKMbUkRQ3e4ZrmHfPZUp/view)\n 9. [Borang Permohonan Pusaka Aset / Liabiliti Tambahan](https://drive.google.com/file/d/1sMYoAe-0iOpgoTc-U50FwTi9-zsbshOO/view)\n 10. [Surat Nilaian Kenderaan](https://drive.google.com/file/d/1P3Ur3CKLcQXVNs9bjhpCkP17vnmzydt6/view)`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    // Hibah BM starts from here
    hibah_my: {
        id: 'hibah_my',
        message: `Baiklah. Sebelum ARIA beri penerangan yang lebih lanjut, berikut adalah konsep dan rukun bagi produk hibah.\n\n Konsep Hibah\n 1. Pemberian milikan harta seseorang kepada seseorang yang lain, semasa hidupnya secara sukarela tanpa mengharapkan balasan.\n 2. Harta diamanahkan kepada ARB sebagai pemegang amanah untuk suatu tempoh tertentu berdasarkan Surat Ikatan Hibah dan Surat Ikatan Amanah.\n 3. Akad akan dilakukan bagi mengisytiharkan Penghibah menghibahkan hartanya kepada Penerima Hibah.\n 4. Hibah tidak boleh ditarik balik melainkan Hibah yang dibuat oleh ibu/bapa/datuk/nenek kepada anak/cucu.\n 5. Sekiranya berlaku kematian kepada Penerima Hibah, harta yang dihibahkan menjadi harta pusaka Penerima Hibah dan tidak akan dikembalikan kepada Penghibah kecuali melalui kaedah yang dibenarkan oleh hukum syarak / undang-undang.\n\n Rukun Hibah\n 1. Penghibah\n a) Individu (berusia 18 tahun dan ke atas) / Pertubuhan\n b) Sempurna akal, baligh, rasyid dan tidak muflis.\n c) Boleh terdiri daripada Islam dan Bukan Islam\n d) Bukan dalam keadaan sakit yang boleh membawa kematian\n\n 2. Penerima Hibah\n a) Individu / Pertubuhan\n b) Penerima Hibah bawah umur boleh menerima Harta Hibah melalui Wali Mal.\n c) Boleh terdiri daripada Islam dan Bukan Islam\n\n 3. Harta yang dihibahkan\n a) Milikan penuh Penghibah\n b) Boleh dipindahmilik (tiada sekatan)\n c) Wujud ketika akad dibuat\n d) Harta dikenalpasti\n e) Mempunyai nilai\n\n 4. Sighah (Ijab dan Qabul)\n a) Ijab - Penghibah isytiharkan pemberian harta kepada Penerima.\n b) Qabul - Penerima Hibah menerima harta tersebut.\n c) Mesti dilakukan dalam satu majlis akad.\n d) Perlu melantik Wali Mal jika penerima adalah bawah umur atau OKU\n\n 5. Penerimaan (Qabd)\n a) Penerima Hibah berkuasa berurusan dengan harta yang diterima.\n b) Qabd dilakukan secara aktual (nyata) atau pemindahan secara perundangan\n\n Boleh ARIA tahu jenisharta yang ingin dihibahkan?`,
        options: [
            { label: '1️⃣ Tunai', nextStep: 'hibah_my_tunai' },
            { label: '2️⃣ Hartanah', nextStep: 'hibah_my_hartanah' },
        ]
    },
    hibah_my_tunai: {
        id: 'hibah_my_tunai',
        message: `Bagi aset tunai, **{name}** perlu depositkan sejumlah wang yang ingin diberikan tersebut ke akaun ARB\n\n AMANAH HIBAH TUNAI\n 1. MODAL MINIMUM RM20,000.00\n\n 2. HARTA YANG BOLEH DIAMANAHKAN Harta Alih (Tunai sahaja)\n 3. TEMPOH PERAMANAHAN Mengikut SuratIkatan Amanah Hibah\n 4. AGIHAN KEUNTUNGAN\n 3.00% setahun\n\n 5. DOKUMEN YANG DIPERLUKAN\n a. Borang Permohonan Pembukaan Hibah\n b. Salinan Kad Pengenalan Penghibah\n c. Salinan Kad Pengenalan Penerima Hibah\n d. Salinan Kad Pengenalan Wali Mal dan Penjaga (sekiranya berkaitan).\n\n 6. BORANG YANG BERKAITAN\n a. Borang Permohonan Hibah AmanahRaya\n b. Contoh Pengisian - Borang Permohonan Hibah AmanahRaya`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    hibah_my_hartanah: {
        id: 'hibah_my_hartanah',
        message: `Bagi aset hartanah, ianya mesti bebas daripada segala hutang dan geran hartanah adalah milik **{name}**. Hartanah akan dipindahmilik kepada ARB sebagai pemegang amanah dan geran asal akan disimpan oleh ARB.\n\n Adakah hartanah yang ingin diberikan telah bebas daripada hutang dan geran tersebut milik **{name}**?`,
        options: [
            { label: '1️⃣ Bebas hutang dan geran milik saya', nextStep: 'hibah_my_hartanah_bebas' },
            { label: '2️⃣ Masih berhutang dan geran milik saya', nextStep: 'hibah_my_hartanah_masih' },
        ]
    },
    hibah_my_hartanah_bebas: {
        id: 'hibah_my_hartanah_bebas',
        message: `Bagi produk ini, beberapa perkara yang perlu diambil perhatian:\n 1. Penilaian semasa hartanah akan dibuat oleh ARB di Jabatan Penilaian dan Perkhidmatan Harta (JPPH).\n 2. Geran hartanah akan didaftarkan di atas nama ARB (sebagai Pemegang Amanah) dan akan disimpan oleh ARB.\n 3. Cukai tanah dan taksiran masih kekal perlu dijelaskan oleh Penghibah.\n 4. Duti Setem akan diselesaikan oleh Penghibah ketika hayat beliau. Namun, sekiranya belum dilakukan, Penerima Hibah perlu membayarnya terlebih dahulu sebelum pindahmilik dibuat.\n 5. Hartanah akan dipindahmilik kepada Penerima Hibah selepas kematian Penghibah atau seperti mana yang termaktub di dalam SuratIkatan Amanah Hibah.\n 6. Sekiranya terdapat sekatan, kelulusan perlu didapatkan terlebih dahulu daripada Pihak Berkuasa Negeri untuk pindahmilik kepada ARB sebagai Pemegang Amanah.\n\n AMANAH HIBAH HARTANAH\n\n 1. DEPOSIT\n RM1,240 / hartanah\n\n 2. PENDERMA & BENEFISIARI\n Mana-mana individu, agensi, pertubuhan atau syarikat.\n\n 3. DUTI SETEM\n Seperti yang akan ditaksirkan oleh LHDN\n\n 4. DOKUMEN YANG DIPERLUKAN\n a) Salinan Kad Pengenalan Penghibah\n b) Salinan Kad Pengenalan Penerima Hibah\n c) Salinan Kad Pengenalan Wali Mal dan Penjaga (sekiranya berkaitan)\n d) Salinan geran hartanah, bil cukai tanah dan taksiran terkini\n\n 5. BORANG YANG BERKAITAN\n a. Borang Permohonan Hibah AmanahRaya\n b. Contoh Pengisian - Borang Permohonan Hibah AmanahRaya\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan untuk membuat bayaran dengan membawa dokumen yang diperlukan. Bayaran boleh dibuat secara tunai (terhad kepada RM5,000), cek, kad debit/kredit atau pindahan wang atas talian. **{name}** boleh buat temujanji di https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m\n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n 3. **{name}** akan dihubungi oleh pegawai cawangan bagi penyediaan Surat Ikatan Amanah.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    hibah_my_hartanah_masih: {
        id: 'hibah_my_hartanah_masih',
        message: `Bagi aset yang masih mempunyai hutang, anda boleh memilih produk yang lain iaitu Hibahku.\n\n Adakah **{name}** berminat untuk tahu lebih lanjut?`,
        options: [
            { label: '1️⃣ Ya, saya nak tahu berkenaan HibahKu', nextStep: 'hibahku_my' },
            { label: '2️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    // Hibuku BM starts from here
    hibahku_my: {
        id: 'hibahku_my',
        message: `KONSEP HIBAH\n 1. Pemberian milikan harta seseorang kepada seseorang yang lain, semasa hidupnya secara sukarela tanpa mengharapkan balasan.\n 2. Akad akan dilakukan bagi mengisytiharkan Penghibah menghibahkan hartanya kepada Penerima Hibah.\n 3. Hibah tidak boleh ditarik balik melainkan Hibah yang dibuat oleh ibu/bapa/datuk/nenek kepada anak/cucu.\n 5. Sekiranya berlaku kematian kepada Penerima Hibah, harta yang dihibahkan menjadi harta pusaka Penerima Hibah dan tidak akan dikembalikan kepada Penghibah kecuali melalui kaedah yang dibenarkan oleh hukum syarak / undang-undang.\n\n Untuk makluman, bagi produk Hibahku, **{name}** boleh menghibahkan aset berikut kepada orang yang dihajatkan:\n i) Hartanah (bebas/masih hutang)\n ii) Kenderaan (bebas/masih hutang)\n iii) Akaun simpanan bersama di mana-mana bank (hanya dibenarkan untuk Negeri Selangor sahaja)\n\n **{name}** berhasrat untuk bagi harta apa?`,
        options: [
            { label: "1️⃣ Hartanah dan/atau kenderaan dan tunai di bank", nextStep: 'hibahku_my_tunai' },
            { label: '2️⃣ Hartanah dan/atau kenderaan sahaja', nextStep: 'hibahku_my_hartanah' },
            { label: "3️⃣ Tunai di bank sahaja", nextStep: 'hibahku_my_tunai_sahaja' },
        ]
    },
    hibahku_my_tunai: {
        id: 'hibahku_my_tunai',
        message: `Tunai di Bank\n 1. Akaun yang dibenarkan adalah akaun bersama antara Penghibah dan Penerima Hibah sahaja.\n 2. Hanya dibenarkan untuk harta tunai di Negeri Selangor sahaja.\n 3. Simpanan di ASNB dan Tabung Haji adalah terkecuali.\n\n Hartanah\n 1. Bebas daripada segala hutang\n 2. Jika masih berhutang, hartanah mestilah mempunyai\n perlindungan insurans penuh (MRTA/MRTT).\n 3. Hartanah adalah milik Penghibah.\n 4. Boleh dipindahmilik (tiada sekatan)\n 5. Wujud ketika akad dibuat\n 6. Harta dikenalpasti\n 7. Mempunyai nilai.\n\n Kenderaan\n 1. Bebas daripada segala hutang\n 2. Jika masih berhutang, kenderaan mestilah mempunyai\n perlindungan insurans penuh (auto-life insurance)\n 3. Kenderaan adalah milik Penghibah.\n 4. Wujud ketika akad dibuat.\n 5. Harta dikenalpasti.\n 6. Mempunyai nilai.\n\n Penerangan selanjutnya hanya terpakai sekiranya maklumat **{name}** memenuhi kriteria yang ditetapkan.\n\n HIBAHKU\n 1. PENGHIBAH\n Individu berumur 18 tahun dan ke atas\n\n 2. PENERIMA HIBAH\n Mana-mana individu kecuali cacat mental\n\n 3. DOKUMEN YANG DIPERLUKAN\n a) Borang Permohonan HiBAHKU AmanahRaya (boleh didapati di kaunter cawangan ARB)\n b) Salinan Kad Pengenalan Penghibah / Pemberi\n c) Salinan Kad Pengenalan / Sijil Kelahiran Penerima Hibah\n d) Salinan Kad Pengenalan Wali Mal (jika penerima adalah bawah umur atau OKU)\n e) Harta Tak Alih\n i) Salinan Geran Hakmilik / Strata\n ii) Salinan Sales & Purchase Agreement + MRTA/MRTT (jika masih bercagar)\n iii) Salinan Carian Rasmi (jika berkenaan)\n iv) Salinan Surat Tawaran daripada institusi kewangan (jika masih bercagar)\n f) Harta Alih (kenderaan)\n i) Salinan geran kenderaan\n ii) Salinan polisi Auto-life insurance (jika masih bercagar)\n g) Harta Alih (tunai di bank)\n i) Salinan penyata / Pengesahan Akaun Bank\n 4. FI YANG DIKENAKAN\n RM 1,500 (aset pertama), RM 500 (aset seterusnya)\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan untuk membuat bayaran dengan membawa dokumen yang diperlukan . Bayaran boleh dibuat secara tunai (terhad kepada RM5,000), cek, kad debit/kredit atau pindahan wang atas talian. . **{name}** boleh buat temujanji di https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m\n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n 3. **{name}** akan dihubungi oleh pegawai cawangan bagi penyediaan dokumen akad.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    hibahku_my_hartanah: {
        id: 'hibahku_my_hartanah',
        message: `Hartanah\n 1. Bebas daripada segala hutang\n 2. Jika masih berhutang, hartanah mestilah mempunyai perlindungan insurans penuh (MRTA/MRTT).\n 3. Hartanah adalah milik Penghibah.\n 4. Boleh dipindahmilik (tiada sekatan)\n 5. Wujud ketika akad dibuat\n 6. Harta dikenalpasti\n 7. Mempunyai nilai\n\n Kenderaan\n 1. Bebas daripada segala hutang\n 2. Jika masih berhutang, kenderaan mestilah mempunyai perlindungan insurans penuh (auto-life insurance)\n 3. Kenderaan adalah milik Penghibah.\n 4. Wujud ketika akad dibuat.\n 5. Harta dikenalpasti.\n 6. Mempunyai nilai.\n\n Penerangan selanjutnya hanya terpakai sekiranya maklumat **{name}** memenuhi kriteria yang ditetapkan.\n\n HIBAHKU\n 1. PENGHIBAH\n Individu berumur 18 tahun dan ke atas\n\n 2. PENERIMA HIBAH\n Mana-mana individu kecuali cacat mental\n\n 3. DOKUMEN YANG DIPERLUKAN\n a) Borang Permohonan HiBAHKU AmanahRaya (boleh didapati di kaunter cawangan ARB)\n b) Salinan Kad Pengenalan Penghibah / Pemberi\n c) Salinan Kad Pengenalan / Sijil Kelahiran Penerima Hibah\n d) Salinan Kad Pengenalan Wali Mal (jika penerima adalah bawah umur atau OKU)\n e) Harta Tak Alih\n i) Salinan Geran Hakmilik / Strata\n ii) Salinan Sales & Purchase Agreement + MRTA/MRTT (jika masih bercagar)\n iii) Salinan Carian Rasmi (jika berkenaan)\n iv) Salinan Surat Tawaran daripada institusi kewangan (jika masih bercagar)\n f) Harta Alih (kenderaan)\n i) Salinan geran kenderaan\n ii) Salinan polisi Auto-life insurance (jika masih bercagar)\n g) Harta Alih (tunai di bank)\n i) Salinan penyata / Pengesahan Akaun Bank\n 4. FI YANG DIKENAKAN\n RM 1,500 (aset pertama), RM 500 (aset seterusnya)\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan untuk membuat bayaran dengan membawa dokumen yang diperlukan . Bayaran boleh dibuat secara tunai (terhad kepada RM5,000), cek, kad debit/kredit atau pindahan wang atas talian. . **{name}** boleh buat temujanji di https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m\n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n 3. **{name}** akan dihubungi oleh pegawai cawangan bagi penyediaan dokumen akad.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' },
        ]
    },
    hibahku_my_tunai_sahaja: {
        id: 'hibahku_my_tunai_sahaja',
        message: `Tunai di Bank\n 1. Akaun yang dibenarkan adalah akaun bersama antara Penghibah dan Penerima Hibah sahaja.\n 2. Hanya dibenarkan untuk harta tunai di Negeri Selangor sahaja.\n 3. Simpanan di ASNB dan Tabung Haji adalah terkecuali\n\n Penerangan selanjutnya hanya terpakai sekiranya maklumat **{name}** memenuhi kriteria yang ditetapkan.\n\n HIBAHKU\n 1. PENGHIBAH\n Individu berumur 18 tahun dan ke atas\n\n 2. PENERIMA HIBAH\n Mana-mana individu kecuali cacat mental\n\n 3. DOKUMEN YANG DIPERLUKAN\n a) Borang Permohonan HiBAHKU AmanahRaya (boleh didapati di kaunter cawangan ARB)\n b) Salinan Kad Pengenalan Penghibah / Pemberi\n c) Salinan Kad Pengenalan / Sijil Kelahiran Penerima Hibah\n d) Salinan Kad Pengenalan Wali Mal (jika penerima adalah bawah umur atau OKU)\n e) Harta Tak Alih\n i) Salinan Geran Hakmilik / Strata\n ii) Salinan Sales & Purchase Agreement + MRTA/MRTT (jika masih bercagar)\n iii) Salinan Carian Rasmi (jika berkenaan)\n iv) Salinan Surat Tawaran daripada institusi kewangan (jika masih bercagar)\n f) Harta Alih (kenderaan)\n i) Salinan geran kenderaan\n ii) Salinan polisi Auto-life insurance (jika masih bercagar)\n g) Harta Alih (tunai di bank)\n i) Salinan penyata / Pengesahan Akaun Bank\n 4. FI YANG DIKENAKAN\n RM 1,500 (aset pertama), RM 500 (aset seterusnya)\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan untuk membuat bayaran dengan membawa dokumen yang diperlukan . Bayaran boleh dibuat secara tunai (terhad kepada RM5,000), cek, kad debit/kredit atau pindahan wang atas talian. . **{name}** boleh buat temujanji di https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m\n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n 3. **{name}** akan dihubungi oleh pegawai cawangan bagi penyediaan dokumen akad.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: []
    },
    // Amanah BM start from here
    amanah_my: {
        id: 'amanah_my',
        message: `Baiklah. Sebelum ARIA beri penerangan yang lebih lanjut, berikut adalah konsep dan syarat bagi produk amanah yang ditawarkan.\n\n 1. Kuasa pelantikan AmanahRaya sebagai pemegang amanah adalah di bawah Seksyen 11 Akta Perbadanan Amanah Raya 1995.\n 2. Penderma dan penerima (benefisiari) boleh terdiri daripada mana-mana individu, agensi, pertubuhan atau syarikat.\n 3. Penjaga boleh terdiri daripada Penderma atau mana-mana individu yang dilantik di dalam Surat\n Ikatan Amanah sekiranya benefisiari berumur di bawah 18 tahun atau Orang Kelainan Upaya (OKU).\n 4. Penjaga berperanan sebagai perantara dalam pengeluaran wang Amanah bagi pihak benefisiari yang berumur di bawah 18 tahun atau OKU.\n 5. Bagi Harta Alih, ianya mesti dipindahkan atau didaftarkan ke atas nama ARB sebagai pemegang amanah.\n 6. Bagi Harta Tak Alih, ianya adalah hakmilik berdaftar atau benefisial Penderma, telah bebas hutang, tiada sekatan dan dipindahmilik ke atas nama ARB sebagai pemegang amanah.\n 7. Cara pembahagian / bayaran kepada benefisiari adalah tertakluk kepada terma yang ditetapkan di dalam Surat Ikatan Amanah.\n 8. Produk amanah ini terkeluar daripada Hukum Faraid / Akta Pembahagian 1958.\n 9. Pembatalan akaun amanah adalah mengikut terma di dalam Surat Ikatan Amanah.\n\n Boleh ARIA tahu jenis aset yang ingin diberikan?`,
        options: [
            { label: "1️⃣ Hartanah", nextStep: 'amanah_my_hartanah' },
            { label: '2️⃣ Tunai', nextStep: 'amanah_my_tunai' },
            { label: "3️⃣ Insuran / Takaful Care", nextStep: 'amanah_my_insuran' },
            { label: "4️⃣ Manfaat Pekerja @ Amal Insan", nextStep: 'amanah_my_manfaat' },
        ]
    },
    amanah_my_hartanah: {
        id: 'amanah_my_hartanah',
        message: `Adakah hartanah yang ingin diberikan telah bebas daripada hutang dan geran tersebut milik **{name}**?`,
        options: [
            { label: "1️⃣ Masih berhutang dan geran milik saya", nextStep: 'amanah_my_hartanah_milik' },
            { label: '2️⃣ Bebas hutang dan geran milik saya', nextStep: 'amanah_my_hartanah_bebas' },
        ]
    },
    amanah_my_hartanah_milik: {
        id: 'amanah_my_hartanah_milik',
        message: `Bagi aset yang masih mempunyai hutang, anda boleh memilih produk yang lain iaitu Hibahku.\n\n Adakah **{name}** berminat untuk tahu lebih lanjut?`,
        options: [
            { label: '1️⃣ Ya, saya nak tahu berkenaan HibahKu', nextStep: 'hibahku_my' },
            { label: '2️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    amanah_my_hartanah_bebas: {
        id: 'amanah_my_hartanah_bebas',
        message: `Bagi produk ini, beberapa perkara yang perlu diambil perhatian:\n 1. Penilaian semasa hartanah akan dibuat oleh ARB di Jabatan Penilaian dan Perkhidmatan Harta (JPPH).\n 2. Geran hartanah akan didaftarkan di atas nama ARB (sebagai Pemegang Amanah) dan akan disimpan oleh ARB.\n 3. Cukai tanah dan taksiran masih kekal perlu dijelaskan oleh Penderma.\n 4. Duti Setem akan diselesaikan oleh Penderma ketika hayat beliau. Namun, sekiranya belum dilakukan, Benefisiari perlu membayarnya terlebih dahulu sebelum pindahmilik dibuat.\n 5. Hartanah akan dipindahmilik kepada Penerima selepas kematian Penderma atau seperti mana yang termaktub di dalam SIA.\n 6. Sekiranya terdapat sekatan, kelulusan perlu didapatkan terlebih dahulu daripada Pihak Berkuasa Negeri untuk pindahmilik kepada ARB sebagai Pemegang Amanah.\n\n AMANAH HARTANAH\n 1. DEPOSIT\n RM2,000 / hartanah\n\n 2. PENDERMA & BENEFISIARI\n Mana-mana individu, agensi, pertubuhan atau syarikat.\n\n 3. DUTI SETEM\n Seperti yang akan ditaksirkan oleh LHDN\n\n 4. DOKUMEN YANG DIPERLUKAN\n a) Salinan Kad Pengenalan Penderma\n b) Salinan Kad Pengenalan Benefisiari\n c) Salinan Kad Pengenalan Penjaga (sekiranya berkaitan)\n d) Salinan geran hartanah, bil cukai tanah dan taksiran terkini\n\n 5. BORANG YANG BERKAITAN\n a) Borang Permohonan Pembukaan Akaun Amanah\n b) Contoh Pengisian - Borang Permohonan Pembukaan Akaun Amanah\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan untuk membuat bayaran dengan membawa dokumen yang diperlukan. Bayaran boleh dibuat secara tunai (terhad kepada RM5,000), cek, kad debit/kredit atau pindahan wang atas talian. . **{name}** boleh buat temujanji di https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m \n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n 3. **{name}** akan dihubungi oleh pegawai cawangan bagi penyediaan Surat Ikatan Amanah.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    amanah_my_tunai: {
        id: 'amanah_my_tunai',
        message: `Bagi produk ini, **{name}** perlu depositkan amaun yang ingin diberikan ke dalam akaun ARB. Bayaran akan dibuat kepada benefisiari mengikut arahan yang telah dinyatakan di dalam Surat Ikatan Amanah yang telah dibuat.\n\n Sebelum kita pergi lebih lanjut, boleh ARIA tahu, akaun amanah ini untuk tujuan apa?`,
        options: [
            { label: "1️⃣ Sumbangan amal / Kebajikan", nextStep: 'amanah_my_tunai_sumbangan' },
            { label: '2️⃣ Kelangsungan hidup orang tersayang', nextStep: 'amanah_my_tunai_tersayang' },
            { label: "3️⃣ Kebajikan peribadi", nextStep: 'amanah_my_tunai_kebajikan' },
            { label: "4️⃣ Jaminan dana pendidikan", nextStep: 'amanah_my_tunai_pendidikan' },
            { label: "5️⃣ Perlindungan aset", nextStep: 'amanah_my_tunai_aset' },
            { label: "6️⃣ Perlindungan daripada pembaziran", nextStep: 'amanah_my_tunai_daripada' }
        ]
    },
    amanah_my_tunai_sumbangan: {
        id: 'amanah_my_tunai_sumbangan',
        message: `Akaun amanah boleh dibuka bagi menyalurkan sumbangan secara berterusan, seperti derma kepada golongan memerlukan atau institusi kebajikan, selaras dengan hasrat penderma.\n\n KONSEP AMANAH KEBAJIKAN\n 1. Dikhaskan untuk tujuan kebajikan, sedekah dan amal jariah.\n 2. Penderma boleh menubuhkan Jawatankuasa Pengurusan bagi mengendalikan urusan berkaitan akaun amanah ini mengikut SuratIkatan Amanah yang ditetapkan.\n 3. Benefisiari boleh terdiri daripada sesiapa sahaja samada dalam kalangan waris, pusat kebajikan, anak yatim, masjid, gereja, kuil dan lain-lain (bergantung kepada syarat yang ditetapkan di dalam SuratIkatan Amanah).\n 4. Pengeluaran boleh dilakukan hanya dengan kebenaran atau kelulusan daripada Ahli Jawatankuasa Pengurusan yang dilantik mengikut terma yang ditetapkan di dalam SuratIkatan Amanah.\n\n AMANAH KEBAJIKAN\n 1. MODAL MINIMUM\n RM2,000.00.\n\n 2. HARTA YANG BOLEH DIAMANAHKAN\n Harta Alih (Tunai sahaja)\n\n 3. TEMPOH PERAMANAHAN\n Mengikut SuratIkatan Amanah.\n\n 4. AGIHAN KEUNTUNGAN\n 3.00% setahun\n\n 5. DOKUMEN YANG DIPERLUKAN\n a) Borang Permohonan Pembukaan Akaun Amanah\n b) Salinan Kad Pengenalan Penderma dan Ahli Jawatankuasa\n c) Salinan dokumen pendaftaran persatuan / syarikat daripada Jabatan Pendaftaran Pertubuhan Malaysia (ROS) atau Suruhanjaya Syarikat Malaysia (SSM) (sekiranya berkaitan).\n\n 6. BORANG YANG BERKAITAN\n a) Borang Permohonan Pembukaan Akaun Amanah\n b) Contoh Pengisian - Borang Permohonan Pembukaan Akaun Amanah\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan untuk membuat bayaran dengan membawa dokumen yang diperlukan. Bayaran boleh dibuat secara tunai (terhad kepada RM5,000), cek, kad debit/kredit atau pindahan wang atas talian. . **{name}** boleh buat temujanji di https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m \n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n 3. **{name}** akan dihubungi oleh pegawai cawangan bagi penyediaan Surat Ikatan Amanah.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    amanah_my_tunai_tersayang: {
        id: 'amanah_my_tunai_tersayang',
        message: `Perancangan dan penyediaan kewangan yang bertujuan untuk memastikan keperluan hidup, pendidikan, penjagaan kesihatan serta masa depan orang tersayang sentiasa terjamin, walaupun setelah ketiadaan atau ketidakupayaan ibu bapa atau penjaga utama.\n\n **{name}** boleh dapatkan dahulu maklumat di bawah dan pilih produk yang bersesuaian.\n\n AMANAH BIASA\n 1. MODAL MINIMUM\n RM2,000.00.\n\n 2. HARTA YANG BOLEH DIAMANAHKAN\n Harta Alih (Tunai sahaja)\n\n 3. TEMPOH PERAMANAHAN\n Mengikut SuratIkatan Amanah.\n\n 4. AGIHAN KEUNTUNGAN\n 3.00% setahun\n\n 5. DOKUMEN YANG DIPERLUKAN\n a. Salinan Kad Pengenalan Penderma\n b. Salinan Kad Pengenalan Benefisiari\n c. Salinan Kad Pengenalan Penjaga (sekiranya berkaitan)\n d. Salinan dokumen pendaftaran persatuan/syarikat daripada ROS / SSM (sekiranya berkaitan).\n\n AMANAH SAFECARE\n 1. MODAL MINIMUM\n RM50,000.00 / RM100,000.\n\n 2. HARTA YANG BOLEH DIAMANAHKAN\n Harta Alih (Tunai sahaja)\n\n 3. TEMPOH PERAMANAHAN\n Tempoh selama 36 bulan dengan pilihan untuk diperbaharui (roll over) selepas capai tempoh matang.\n\n  4. AGIHAN KEUNTUNGAN\n a) 4.25% setahun (RM50,000 < deposit <RM100,000)\n b) 4.35% setahun (RM100,000 < deposit <RM1,000,000)\n\n 5. DOKUMEN YANG DIPERLUKAN\n a. Salinan Kad Pengenalan Penderma\n b. Salinan Kad Pengenalan Benefisiari\n c. Salinan Kad Pengenalan Penjaga (sekiranya berkaitan)\n d. Salinan dokumen pendaftaran persatuan/syarikat daripada ROS / SSM (sekiranya berkaitan).\n\n AMANAH PREMIER SAFECARE\n 1. MODAL MINIMUM\n RM1,000,000.\n\n 2. HARTA YANG BOLEH DIAMANAHKAN\n Harta Alih (Tunai sahaja)\n\n 3. TEMPOH PERAMANAHAN\n Tempoh selama 60 bulan dengan pilihan untuk diperbaharui (roll over) selepas capai tempoh matang.\n\n 4. AGIHAN KEUNTUNGAN\n 4.45% setahun (Deposit ≥ RM1,000,000)\n\n 5. DOKUMEN YANG DIPERLUKAN\n a. Salinan Kad Pengenalan Penderma\n b. Salinan Kad Pengenalan Benefisiari\n c. Salinan Kad Pengenalan Penjaga (sekiranya berkaitan)\n  d. Salinan dokumen pendaftaran persatuan/syarikat daripada ROS / SSM (sekiranya berkaitan).\n\n BORANG YANG BERKAITAN\n a) Borang Permohonan Pembukaan Akaun Amanah\n b) Contoh Pengisian - Borang Permohonan Pembukaan Akaun Amanah\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan untuk membuat bayaran dengan membawa dokumen yang diperlukan. Bayaran boleh dibuat secara tunai (terhad kepada RM5,000), cek, kad debit/kredit atau pindahan wang atas talian. . **{name}** boleh buat temujanji di https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m \n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n 3. **{name}** akan dihubungi oleh pegawai cawangan bagi penyediaan Surat Ikatan Amanah.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    amanah_my_tunai_kebajikan: {
        id: 'amanah_my_tunai_kebajikan',
        message: `Penyediaan dana khas bagi memastikan kesejahteraan diri sendiri terus terpelihara di hari tua atau waktu keuzuran.\n\n **{name}** boleh dapatkan dahulu maklumat di bawah dan pilih produk yang bersesuaian.\n\n AMANAH BIASA\n 1. MODAL MINIMUM\n RM2,000.00.\n\n 2. HARTA YANG BOLEH DIAMANAHKAN\n Harta Alih (Tunai sahaja)\n\n 3. TEMPOH PERAMANAHAN\n Mengikut SuratIkatan Amanah.\n\n 4. AGIHAN KEUNTUNGAN\n 3.00% setahun\n\n 5. DOKUMEN YANG DIPERLUKAN\n a. Salinan Kad Pengenalan Penderma\n b. Salinan Kad Pengenalan Benefisiari\n c. Salinan Kad Pengenalan Penjaga (sekiranya berkaitan)\n d. Salinan dokumen pendaftaran persatuan/syarikat daripada ROS / SSM (sekiranya berkaitan).\n\n AMANAH SAFECARE\n 1. MODAL MINIMUM\n RM50,000.00 / RM100,000.\n\n 2. HARTA YANG BOLEH DIAMANAHKAN\n Harta Alih (Tunai sahaja)\n\n 3. TEMPOH PERAMANAHAN\n Tempoh selama 36 bulan dengan pilihan untuk diperbaharui (roll over) selepas capai tempoh matang.\n\n  4. AGIHAN KEUNTUNGAN\n a) 4.25% setahun (RM50,000 < deposit <RM100,000)\n b) 4.35% setahun (RM100,000 < deposit <RM1,000,000)\n\n 5. DOKUMEN YANG DIPERLUKAN\n a. Salinan Kad Pengenalan Penderma\n b. Salinan Kad Pengenalan Benefisiari\n c. Salinan Kad Pengenalan Penjaga (sekiranya berkaitan)\n d. Salinan dokumen pendaftaran persatuan/syarikat daripada ROS / SSM (sekiranya berkaitan).\n\n AMANAH PREMIER SAFECARE\n 1. MODAL MINIMUM\n RM1,000,000.\n\n 2. HARTA YANG BOLEH DIAMANAHKAN\n Harta Alih (Tunai sahaja)\n\n 3. TEMPOH PERAMANAHAN\n Tempoh selama 60 bulan dengan pilihan untuk diperbaharui (roll over) selepas capai tempoh matang.\n\n 4. AGIHAN KEUNTUNGAN\n 4.45% setahun (Deposit ≥ RM1,000,000)\n\n 5. DOKUMEN YANG DIPERLUKAN\n a. Salinan Kad Pengenalan Penderma\n b. Salinan Kad Pengenalan Benefisiari\n c. Salinan Kad Pengenalan Penjaga (sekiranya berkaitan)\n  d. Salinan dokumen pendaftaran persatuan/syarikat daripada ROS / SSM (sekiranya berkaitan).\n\n BORANG YANG BERKAITAN\n a) Borang Permohonan Pembukaan Akaun Amanah\n b) Contoh Pengisian - Borang Permohonan Pembukaan Akaun Amanah\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan untuk membuat bayaran dengan membawa dokumen yang diperlukan. Bayaran boleh dibuat secara tunai (terhad kepada RM5,000), cek, kad debit/kredit atau pindahan wang atas talian. . **{name}** boleh buat temujanji di https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m \n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n 3. **{name}** akan dihubungi oleh pegawai cawangan bagi penyediaan Surat Ikatan Amanah.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    amanah_my_tunai_pendidikan: {
        id: 'amanah_my_tunai_pendidikan',
        message: `Perancangan kewangan yang teratur bagi memastikan sumber kewangan tersedia untuk menampung kos pendidikan orang tersayang.\n\n **{name}** boleh dapatkan dahulu maklumat di bawah dan pilih produk yang bersesuaian.\n\n AMANAH BIASA\n 1. MODAL MINIMUM\n RM2,000.00.\n\n 2. HARTA YANG BOLEH DIAMANAHKAN\n Harta Alih (Tunai sahaja)\n\n 3. TEMPOH PERAMANAHAN\n Mengikut SuratIkatan Amanah.\n\n 4. AGIHAN KEUNTUNGAN\n 3.00% setahun\n\n 5. DOKUMEN YANG DIPERLUKAN\n a. Salinan Kad Pengenalan Penderma\n b. Salinan Kad Pengenalan Benefisiari\n c. Salinan Kad Pengenalan Penjaga (sekiranya berkaitan)\n d. Salinan dokumen pendaftaran persatuan/syarikat daripada ROS / SSM (sekiranya berkaitan).\n\n AMANAH SAFECARE\n 1. MODAL MINIMUM\n RM50,000.00 / RM100,000.\n\n 2. HARTA YANG BOLEH DIAMANAHKAN\n Harta Alih (Tunai sahaja)\n\n 3. TEMPOH PERAMANAHAN\n Tempoh selama 36 bulan dengan pilihan untuk diperbaharui (roll over) selepas capai tempoh matang.\n\n  4. AGIHAN KEUNTUNGAN\n a) 4.25% setahun (RM50,000 < deposit <RM100,000)\n b) 4.35% setahun (RM100,000 < deposit <RM1,000,000)\n\n 5. DOKUMEN YANG DIPERLUKAN\n a. Salinan Kad Pengenalan Penderma\n b. Salinan Kad Pengenalan Benefisiari\n c. Salinan Kad Pengenalan Penjaga (sekiranya berkaitan)\n d. Salinan dokumen pendaftaran persatuan/syarikat daripada ROS / SSM (sekiranya berkaitan).\n\n AMANAH PREMIER SAFECARE\n 1. MODAL MINIMUM\n RM1,000,000.\n\n 2. HARTA YANG BOLEH DIAMANAHKAN\n Harta Alih (Tunai sahaja)\n\n 3. TEMPOH PERAMANAHAN\n Tempoh selama 60 bulan dengan pilihan untuk diperbaharui (roll over) selepas capai tempoh matang.\n\n 4. AGIHAN KEUNTUNGAN\n 4.45% setahun (Deposit ≥ RM1,000,000)\n\n 5. DOKUMEN YANG DIPERLUKAN\n a. Salinan Kad Pengenalan Penderma\n b. Salinan Kad Pengenalan Benefisiari\n c. Salinan Kad Pengenalan Penjaga (sekiranya berkaitan)\n  d. Salinan dokumen pendaftaran persatuan/syarikat daripada ROS / SSM (sekiranya berkaitan).\n\n BORANG YANG BERKAITAN\n a) Borang Permohonan Pembukaan Akaun Amanah\n b) Contoh Pengisian - Borang Permohonan Pembukaan Akaun Amanah\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan untuk membuat bayaran dengan membawa dokumen yang diperlukan. Bayaran boleh dibuat secara tunai (terhad kepada RM5,000), cek, kad debit/kredit atau pindahan wang atas talian. . **{name}** boleh buat temujanji di https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m \n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n 3. **{name}** akan dihubungi oleh pegawai cawangan bagi penyediaan Surat Ikatan Amanah.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    amanah_my_tunai_aset: {
        id: 'amanah_my_tunai_aset',
        message: `Melindungi harta daripada tuntutan, hutang atau risiko lain, supaya ia kekal terjaga dan boleh diagihkan kepada benefisiari tanpa halangan.\n\n **{name}** boleh dapatkan dahulu maklumat di bawah dan pilih produk yang bersesuaian.\n\n AMANAH BIASA\n 1. MODAL MINIMUM\n RM2,000.00.\n\n 2. HARTA YANG BOLEH DIAMANAHKAN\n Harta Alih (Tunai sahaja)\n\n 3. TEMPOH PERAMANAHAN\n Mengikut SuratIkatan Amanah.\n\n 4. AGIHAN KEUNTUNGAN\n 3.00% setahun\n\n 5. DOKUMEN YANG DIPERLUKAN\n a. Salinan Kad Pengenalan Penderma\n b. Salinan Kad Pengenalan Benefisiari\n c. Salinan Kad Pengenalan Penjaga (sekiranya berkaitan)\n d. Salinan dokumen pendaftaran persatuan/syarikat daripada ROS / SSM (sekiranya berkaitan).\n\n AMANAH SAFECARE\n 1. MODAL MINIMUM\n RM50,000.00 / RM100,000.\n\n 2. HARTA YANG BOLEH DIAMANAHKAN\n Harta Alih (Tunai sahaja)\n\n 3. TEMPOH PERAMANAHAN\n Tempoh selama 36 bulan dengan pilihan untuk diperbaharui (roll over) selepas capai tempoh matang.\n\n  4. AGIHAN KEUNTUNGAN\n a) 4.25% setahun (RM50,000 < deposit <RM100,000)\n b) 4.35% setahun (RM100,000 < deposit <RM1,000,000)\n\n 5. DOKUMEN YANG DIPERLUKAN\n a. Salinan Kad Pengenalan Penderma\n b. Salinan Kad Pengenalan Benefisiari\n c. Salinan Kad Pengenalan Penjaga (sekiranya berkaitan)\n d. Salinan dokumen pendaftaran persatuan/syarikat daripada ROS / SSM (sekiranya berkaitan).\n\n AMANAH PREMIER SAFECARE\n 1. MODAL MINIMUM\n RM1,000,000.\n\n 2. HARTA YANG BOLEH DIAMANAHKAN\n Harta Alih (Tunai sahaja)\n\n 3. TEMPOH PERAMANAHAN\n Tempoh selama 60 bulan dengan pilihan untuk diperbaharui (roll over) selepas capai tempoh matang.\n\n 4. AGIHAN KEUNTUNGAN\n 4.45% setahun (Deposit ≥ RM1,000,000)\n\n 5. DOKUMEN YANG DIPERLUKAN\n a. Salinan Kad Pengenalan Penderma\n b. Salinan Kad Pengenalan Benefisiari\n c. Salinan Kad Pengenalan Penjaga (sekiranya berkaitan)\n  d. Salinan dokumen pendaftaran persatuan/syarikat daripada ROS / SSM (sekiranya berkaitan).\n\n BORANG YANG BERKAITAN\n a) Borang Permohonan Pembukaan Akaun Amanah\n b) Contoh Pengisian - Borang Permohonan Pembukaan Akaun Amanah\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan untuk membuat bayaran dengan membawa dokumen yang diperlukan. Bayaran boleh dibuat secara tunai (terhad kepada RM5,000), cek, kad debit/kredit atau pindahan wang atas talian. . **{name}** boleh buat temujanji di https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m \n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n 3. **{name}** akan dihubungi oleh pegawai cawangan bagi penyediaan Surat Ikatan Amanah.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    amanah_my_tunai_daripada: {
        id: 'amanah_my_tunai_daripada',
        message: `Melindungi benefisiari daripada pembaziran dengan menetapkan penyaluran harta secara terkawal.\n\n **{name}** boleh dapatkan dahulu maklumat di bawah dan pilih produk yang bersesuaian.\n\n AMANAH BIASA\n 1. MODAL MINIMUM\n RM2,000.00.\n\n 2. HARTA YANG BOLEH DIAMANAHKAN\n Harta Alih (Tunai sahaja)\n\n 3. TEMPOH PERAMANAHAN\n Mengikut SuratIkatan Amanah.\n\n 4. AGIHAN KEUNTUNGAN\n 3.00% setahun\n\n 5. DOKUMEN YANG DIPERLUKAN\n a. Salinan Kad Pengenalan Penderma\n b. Salinan Kad Pengenalan Benefisiari\n c. Salinan Kad Pengenalan Penjaga (sekiranya berkaitan)\n d. Salinan dokumen pendaftaran persatuan/syarikat daripada ROS / SSM (sekiranya berkaitan).\n\n AMANAH SAFECARE\n 1. MODAL MINIMUM\n RM50,000.00 / RM100,000.\n\n 2. HARTA YANG BOLEH DIAMANAHKAN\n Harta Alih (Tunai sahaja)\n\n 3. TEMPOH PERAMANAHAN\n Tempoh selama 36 bulan dengan pilihan untuk diperbaharui (roll over) selepas capai tempoh matang.\n\n  4. AGIHAN KEUNTUNGAN\n a) 4.25% setahun (RM50,000 < deposit <RM100,000)\n b) 4.35% setahun (RM100,000 < deposit <RM1,000,000)\n\n 5. DOKUMEN YANG DIPERLUKAN\n a. Salinan Kad Pengenalan Penderma\n b. Salinan Kad Pengenalan Benefisiari\n c. Salinan Kad Pengenalan Penjaga (sekiranya berkaitan)\n d. Salinan dokumen pendaftaran persatuan/syarikat daripada ROS / SSM (sekiranya berkaitan).\n\n AMANAH PREMIER SAFECARE\n 1. MODAL MINIMUM\n RM1,000,000.\n\n 2. HARTA YANG BOLEH DIAMANAHKAN\n Harta Alih (Tunai sahaja)\n\n 3. TEMPOH PERAMANAHAN\n Tempoh selama 60 bulan dengan pilihan untuk diperbaharui (roll over) selepas capai tempoh matang.\n\n 4. AGIHAN KEUNTUNGAN\n 4.45% setahun (Deposit ≥ RM1,000,000)\n\n 5. DOKUMEN YANG DIPERLUKAN\n a. Salinan Kad Pengenalan Penderma\n b. Salinan Kad Pengenalan Benefisiari\n c. Salinan Kad Pengenalan Penjaga (sekiranya berkaitan)\n  d. Salinan dokumen pendaftaran persatuan/syarikat daripada ROS / SSM (sekiranya berkaitan).\n\n BORANG YANG BERKAITAN\n a) Borang Permohonan Pembukaan Akaun Amanah\n b) Contoh Pengisian - Borang Permohonan Pembukaan Akaun Amanah\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan untuk membuat bayaran dengan membawa dokumen yang diperlukan. Bayaran boleh dibuat secara tunai (terhad kepada RM5,000), cek, kad debit/kredit atau pindahan wang atas talian. . **{name}** boleh buat temujanji di https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m \n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n 3. **{name}** akan dihubungi oleh pegawai cawangan bagi penyediaan Surat Ikatan Amanah.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    amanah_my_insuran: {
        id: 'amanah_my_insuran',
        message: `Sekiranya berlaku kematian atau hilang keupayaan kekal, wang pampasan daripada syarikat insurans / takaful akan dipindahkan ke dalam akaun amanah ini. Bayaran akan dibuat kepada benefisiari mengikut arahan yang telah dinyatakan di dalam SuratIkatan Amanah.\n\n ARB akan dilantik sebagai pemegang amanah melalui konsep Serah Hak dengan penyempurnaan Borang Serah Hak daripada syarikat insurans dan SuratIkatan Amanah bersama ARB.\n\n Jenis insurans yang dibenarkan bagi produk ini adalah:\n 1. Insurans Bertempoh (Term Insurance)\n 2. Insurans Hayat Seumur Hidup (Whole Life Insurance)\n 3. Insurans Endowmen\n 4. Insurans Berkaitan Pelaburan (Investment Linked Insurance) Bagi Takaful, hanya Takaful Keluarga sahaja yang dibenarkan.\n\n Terdapat 2 jenis produk amanah insurans / takaful yang ditawarkan\n\n AMANAH TAKAFUL / INSURANS CARE ASAS\n 1. FI YANG DIKENAKAN\n a) Fi : RM750.00 (setiap polisi)\n b) Fi Guaman: RM200.00\n c) Fi Pengurusan : 0.5% setahun terhadap modal Amanah (setelah menerima wang pampasan selepas kematian daripada Syarikat Insurans yang dilantik)\n\n 2. PENDERMA & BENEFISIARI\n Mana-mana individu, agensi, pertubuhan atau syarikat.\n\n 3. SYARAT SURATIKATAN AMANAH\n a) Penderma dibenarkan meletakkan hanya terhad kepada 2 benefisiari sahaja.\n b) Peratusan diletakkan untuk setiap benefisiari.\n 4. PINDAAN Tidak dibenarkan sebarang pindaan / tambahan klausa.\n\n AMANAH TAKAFUL / INSURANS CARE KOMPREHENSIF\n 1. FI YANG DIKENAKAN\n a) Fi : RM1,200.00 (setiap polisi)\n b) Fi Guaman: RM200.00\n c) Fi Pengurusan : 0.5% setahun terhadap modal Amanah (setelah menerima wang pampasan selepas kematian daripada Syarikat Insurans yang dilantik)\n\n 2. PENDERMA & BENEFISIARI\n Mana-mana individu, agensi, pertubuhan atau syarikat.\n\n 3. SYARAT SURATIKATAN AMANAH\n SuratIkatan Amanah boleh ditulis mengikut hasrat penderma.\n\n 4. PINDAAN\n Sekiranya terdapat pindaan SIA, kos tambahan adalah sebanyak RM200.00. Jika terdapat tambahan klausa, RM100.00 akan dikenakan.\n\n DOKUMEN YANG DIPERLUKAN\n a) 1 salinan Polisi Insurans\n b) Borang Serah Hak daripada Syarikat Insurans\n c) 1 salinan Kad Pengenalan pemilik polisi\n d) 1 salinan Kad Pengenalan benefisiari\n e) 1 salinan Kad Pengenalan penjaga (jika berkaitan)\n\n BORANG YANG BERKAITAN\n a) Borang Permohonan Amanah Insurans / Takaful Care\n b) Contoh Pengisian - Borang Permohonan Amanah Insurans / Takaful Caren\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan untuk membuat bayaran dengan membawa dokumen yang diperlukan. Bayaran boleh dibuat secara tunai (terhad kepada RM5,000), cek, kad debit/kredit atau pindahan wang atas talian. . **{name}** boleh buat temujanji di https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m \n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n 3. **{name}** akan dihubungi oleh pegawai cawangan bagi penyediaan Surat Ikatan Amanah.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    amanah_my_manfaat: {
        id: 'amanah_my_manfaat',
        message: `Ditubuhkan oleh majikan bagi manfaat pekerjanya. Majikan boleh menamakan hartapampasan insurans, hadiah atau sebarang sumbangan lain sebagai harta amanah untuk ditadbir oleh ARB sebagai Pemegang Amanah bagi Manfaat Pekerja.\n\n KELEBIHAN AMANAH MANFAAT PEKERJA\n 1. Pekerja dapat mencadangkan kaedah pengagihan wang pampasan manfaat pekerja berkenaan.\n\n 2. Pekerja dapat menentukan terlebih dahulu kadar pengagihan kepada benefisiari yang dinamakan.\n\n 3. Pekerja dapat melantik penjaga bagi benefisiari minor / OKU / Ibu bapa / tanggungan lain\n\n 4. Pekerja dapat memberikan wang pampasan tersebut melalui kebajikan atau kepada orang yang diinginkan termasuk selain waris.\n\n KONSEP AMANAH MANFAAT PEKERJA\n 1. Perjanjian kerjasama akan dibuat antara Majikan dan ARB berkenaan kaedah dan terma pengagihan manfaat kepada benefisiari.\n 2. Pekerja diberikan peluang untuk menyenaraikan cadangan benefisiari (termasuk bukan waris atau untuk kebajikan) dan pengagihan pampasan dengan melengkapkan Borang Cadangan.\n 3. Wang pampasan diterima oleh ARB setelah\n pekerja meninggal dunia.\n 4. Agihan dibuat kepada benefisiari mengikut cadangan yang diberikan oleh pekerja semasa hayat.\n\n **{name}** berminat untuk daftar produk ini?`,
        options: [
            { label: '1️⃣ Tidak berminat', nextStep: 'amanah_my_manfaat_berminat' },
            { label: '2️⃣ Ya, berminat', nextStep: 'retrieve_page1_my' }
        ]
    },
    amanah_my_manfaat_berminat: {
        id: 'amanah_my_manfaat_berminat',
        message: `Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    //Wasiat BM starts from here
    wasiat_my: {
        id: 'wasiat_my',
        message: `Boleh ARIA tahu, **{name}** ingin tahu berkenaan apa?`,
        options: [
            { label: "1️⃣ Maklumat Am", nextStep: 'wasiat_my_maklumat' },// Need to discuss with Sanjay
            { label: '2️⃣ Permohonan Wasiat', nextStep: 'wasiat_my_permohonan' },
            { label: "3️⃣ Penyimpanan Wasiat Luar di ARB", nextStep: 'wasiat_my_penyimpanan' },
        ]
    },
    wasiat_my_permohonan: {
        id: 'wasiat_my_permohonan',
        message: `**{name}** pernah membuat wasiat dengan pihak lain?`,
        options: [
            { label: '1️⃣ Ya', nextStep: 'wasiat_my_permohonan_ya' },
            { label: '2️⃣ Tidak', nextStep: 'wasiat_my_permohonan_tidak' }
        ]
    },
    wasiat_my_permohonan_ya: {
        id: 'wasiat_my_permohonan_ya',
        message: `Tahniah kerana telah membuat perancangan harta.\n\n ARIA nak maklumkan, wasiat yang pernah dibuat sebelum ini akan terbatal sekiranya **{name}** membuat wasiat baru di AmanahRaya.\n\n Boleh ARIA teruskan?`,
        options: [
            { label: '1️⃣ Ya', nextStep: 'wasiat_my_permohonan_tidak' },
            { label: '2️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    wasiat_my_permohonan_tidak: {
        id: 'wasiat_my_permohonan_tidak',
        message: `**{name}** ingin tahu mengenai Wasiat Islam atau Wasiat Bukan Islam?`,
        options: [
            { label: '1️⃣ Wasiat Islam', nextStep: 'wasiat_my_permohonan_tidak_waisiat_islam' },
            { label: '2️⃣ Wasiat Bukan Islam', nextStep: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam' }
        ]
    },
    wasiat_my_permohonan_tidak_waisiat_islam: {
        id: 'wasiat_my_permohonan_tidak_waisiat_islam',
        message: `AmanahRaya ada menawarkan 2 jenis wasiat.\n\n Wasiat Asas: Dokumen yang menetapkan pelantikan pentadbir untuk mengurus pusaka, termasuk penyelesaian hutang serta pembahagian baki harta mengikut hukum faraid. Selain itu, ia juga membolehkan pemilik harta mengagihkan sehingga 1/3 daripada keseluruhan hartanya kepada bukan waris.\n\n Wasiat Komprehensif: Suatu ketetapan yang dibuat oleh seseorang sebelum kematiannya untuk mengagihkan sebahagian hartanya kepada penerima tertentu, sama ada waris atau bukan waris, selaras dengan hukum syarak. Wasiat ini bertujuan untuk memastikan pengurusan harta dilakukan dengan adil, termasuk menyelesaikan hutang serta memberikan sehingga satu pertiga daripada harta kepada waris (tertakluk kepada Enakmen Wasiat Negeri masing-masing dan Hukum Syarak) dan bukan waris, tanpa menjejaskan hak waris yang ditetapkan dalam hukum faraid. Selain itu, ia juga boleh meliputi arahan khusus seperti penjagaan anak di bawah umur, pemenuhan tanggungan kewangan, derma kepada badan amal, dan pesanan kepada waris. Wasiat komprehensif memastikan perancangan pusaka yang lebih jelas, mengelakkan pertikaian dalam kalangan waris, serta memudahkan proses pentadbiran harta selepas kematian pewasiat.\n\n Untuk perbandingan Wasiat Asas dan Wasiat Komprehensif secara terperinci, sila klik https://www.amanahraya.my/ms/perkhidmatan-wasiat/ \n\n **{name}** berminat wasiat yang mana?`,
        options: [
            { label: '1️⃣ Wasiat Asas', nextStep: 'wasiat_my_permohonan_tidak_waisiat_islam_asas' },
            { label: '2️⃣ Wasiat Komprehensif', nextStep: 'wasiat_my_permohonan_tidak_waisiat_islam_komprehensif' }
        ]
    },
    wasiat_my_permohonan_tidak_waisiat_islam_asas: {
        id: 'wasiat_my_permohonan_tidak_waisiat_islam_asas',
        message: `Tahniah. **{name}** telah mengambil langkah bijak dalam merancang masa depan.\n\n Wasi: AmanahRaya Tempoh Penyediaan: 1 hari bekerja Fi Wasiat: RM500 (Fi adalah termasuk khidmat rundingan, penyediaan wasiat dan penyimpanan wasiat)\n\n Boleh ARIA terus ke proses permohonan? proses permohonan?`,
        options: [
            { label: '1️⃣ Teruskan', nextStep: 'wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan' },
            { label: '2️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan: {
        id: 'wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan',
        message: `Permohonan boleh dibuat melalui beberapa cara. **{name}** nak pilih yang mana?`,
        options: [
            { label: "1️⃣ MyAmanahRaya Apps", nextStep: 'wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan_arb_app' },
            { label: '2️⃣ Wasiat atas talian', nextStep: 'wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan_arb_app_talian' },
            { label: "3️⃣ Kaunter", nextStep: 'wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan_kaunter' },
        ]
    },
    wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan_arb_app: {
        id: 'wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan_arb_app',
        message: `1. **{name}** boleh muat turun MyAmanahRaya Apps melalui Google Play atau Apple Apps Store.\n 2. Daftar untuk penggunaan.\n 3. Pilih 'Wasiat'\n 4. Pilih Ejen untuk urusan secara bersemuka atau boleh terus membuat permohonan melalui aplikasi ini.\n\n **{name}** ingin buat melalui ejen atau atas talian?\n\n `,
        options: [
            { label: '1️⃣ Ejen', nextStep: 'wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan_arb_app_ejen' },
            { label: '2️⃣ Atas talian', nextStep: 'wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan_arb_app_talian' }
        ]
    },
    wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan_arb_app_ejen: {
        id: 'wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan_arb_app_ejen',
        message: `1. Pilih ejen berdekatan.\n 2. Ejen akan hubungi untuk temujanji.\n 3. Rundingan dijalankan pada tarikh ditetapkan.\n 4. Ejen bantu permohonan dan pembayaran atas talian.\n 5. Cetak dan tandatangan Wasiat Asas bersama ejen.\n 6. Wasiat Asal dihantar oleh ejen ke cawangan berdekatan.\n 7. Wasiat Pendua akan diserahkan kepada **{name}** untuk simpanan.\n\n **{name}** akan menerima e-mel pengesahan dan e-card Wasiat selepas Wasiat Asal diterima serta disimpan selamat oleh AmanahRaya.\n\n Sekiranya **{name}** telah sampai ke peringkat ini, ARIA mengucapkan TAHNIAH kerana telah berjaya merancang masa depan `,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan_arb_app_talian: {
        id: 'wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan_arb_app_talian',
        message: `1. Sila klik https://willwriting.amanahraya.com.my/.\n 2. Daftar untuk penggunaan.\n 3. Sila teruskan penulisan wasiat dan pembayaran mengikut arahan yang tertera atas talian tersebut.\n\n 1. Wasiat Asas boleh dicetak sendiri atau melalui cawangan kami.\n 2. Sekiranya **{name}** membuat cetakan sendiri, sila ikut arahan seperti atas talian.\n 3. Sekiranya cetakan ingin dibuat di cawangan, sila buat temujanji dengan menghubungi Talian Mesra 03-27237273.\n 4. Tandatangan akan dilakukan bersama pegawai kami pada tarikh tersebut.\n 5. Wasiat Asal disimpan oleh AmanahRaya, manakala Wasiat Pendua diberikan kepada **{name}** untuk simpanan\n\n **{name}** akan menerima e-mel pengesahan dan e-card Wasiat selepas Wasiat Asal diterima serta disimpan selamat oleh AmanahRaya.\n\n Sekiranya **{name}** telah sampai ke peringkat ini, ARIA mengucapkan TAHNIAH kerana telah berjaya merancang masa depan`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan_kaunter: {
        id: 'wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan_kaunter',
        message: `Sila kemukakan borang permohonan beserta dokumen berikut:\n 1. Borang Permohonan Wasiat Asas (link)\n 2. Salinan Kad Pengenalan pewasiat\n 3. Salinan Kad Pengenalan penerima\n 4. Fi Wasiat Asas : RM500. (pembayaran boleh melalui tunai, kad debit/kredit, kod QR)\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan. **{name}** boleh buat temujanji di https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n 3. Tandatangan akan dilakukan bersama pegawai kami.\n 4. Wasiat Asal akan disimpan di AmanahRaya.\n 5. Wasiat Pendua akan diserahkan kepada **{name}** untuk simpanan.\n\n **{name}** akan menerima e-mel pengesahan dan e-card Wasiat selepas Wasiat Asal diterima serta disimpan selamat oleh AmanahRaya.\n\n Sekiranya **{name}** telah sampai ke peringkat ini, ARIA mengucapkan TAHNIAH kerana telah berjaya merancang masa depans`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    wasiat_my_permohonan_tidak_waisiat_islam_komprehensif: {
        id: 'wasiat_my_permohonan_tidak_waisiat_islam_komprehensif',
        message: `Tahniah. **{name}** telah mengambil langkah bijak dalam merancang masa depan.\n\n Wasi: AmanahRaya Tempoh Penyediaan: 7 hari bekerja Fi Wasiat: RM1,200 (Fi adalah termasuk khidmat rundingan, penyediaan wasiat dan penyimpanan wasiat)\n\n Boleh ARIA terus ke Boleh ARIA terus ke proses permohonan?`,
        options: [
            { label: '1️⃣ Teruskan', nextStep: 'wasiat_my_permohonan_tidak_waisiat_islam_komprehensif_teruskan' },
            { label: '2️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    wasiat_my_permohonan_tidak_waisiat_islam_komprehensif_teruskan: {
        id: 'wasiat_my_permohonan_tidak_waisiat_islam_komprehensif_teruskan',
        message: `Permohonan boleh dibuat melalui beberapa cara. **{name}** nak pilih yang mana?`,
        options: [
            { label: "1️⃣ MyAmanahRaya Apps", nextStep: 'wasiat_my_permohonan_tidak_waisiat_islam_komprehensif_teruskan_arb_app' },
            { label: '2️⃣ Wasiat atas talian', nextStep: 'wasiat_my_permohonan_tidak_waisiat_islam_komprehensif_teruskan_arb_app_talian' },
            { label: "3️⃣ Kaunter", nextStep: 'wasiat_my_permohonan_tidak_waisiat_islam_komprehensif_teruskan_kaunter' },
        ]
    },
    wasiat_my_permohonan_tidak_waisiat_islam_komprehensif_teruskan_arb_app: {
        id: 'wasiat_my_permohonan_tidak_waisiat_islam_komprehensif_teruskan_arb_app',
        message: ``,
        options: [
            { label: '1️⃣ Ejen', nextStep: 'wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan_arb_app_ejen' },
            { label: '2️⃣ Atas talian', nextStep: 'wasiat_my_permohonan_tidak_waisiat_islam_komprehensif_teruskan_arb_app_talian' }
        ]
    },
    wasiat_my_permohonan_tidak_waisiat_islam_komprehensif_teruskan_arb_app_talian: {
        id: 'wasiat_my_permohonan_tidak_waisiat_islam_komprehensif_teruskan_arb_app_talian',
        message: `1. Sila klik https://willwriting.amanahraya.com.my/.\n 2. Daftar untuk penggunaan.\n 3. Sila teruskan penulisan wasiat dan pembayaran mengikut arahan yang tertera atas talian tersebut.\n\n 1. Penulis wasiat kami akan menyediakan draf dalam 7 hari bekerja dari tarikh pendaftaran permohonan dan akan dihantar melalui e-mel.\n 2. Sila berikan maklum balas sama ada bersetuju atau perlukan pindaan.\n 3. Jika setuju, tetapkan tarikh temujanji di cawangan berdekatan untuk tandatangan.\n 4. Tandatangan akan dilakukan bersama pegawai kami pada tarikh tersebut.\n 5. Wasiat Asal disimpan oleh AmanahRaya, manakala Wasiat Pendua diberikan kepada **{name}** untuk simpanan.\n\n **{name}** akan menerima e-mel pengesahan dan e-card Wasiat selepas Wasiat Asal diterima serta disimpan selamat oleh AmanahRaya.\n\n Sekiranya **{name}** telah sampai ke peringkat ini, ARIA mengucapkan TAHNIAH kerana telah berjaya merancang masa depan`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    wasiat_my_permohonan_tidak_waisiat_islam_komprehensif_teruskan_kaunter: {
        id: 'wasiat_my_permohonan_tidak_waisiat_islam_komprehensif_teruskan_kaunter',
        message: `Sila kemukakan borang permohonan beserta dokumen berikut:\n 1. Borang Permohonan Wasiat (link)\n 2. Salinan Kad Pengenalan pewasiat\n 3. Salinan Kad Pengenalan penerima\n 4. Salinan Kad Pengenalan penjaga (sekiranya berkaitan)\n 5. Salinan dokumen aset/hutang yang dinyatakan di dalam wasiat.\n 6. Fi Wasiat Komprehensif : RM1200. (pembayaran boleh melalui tunai, kad debit/kredit, kod QR)\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan. **{name}** boleh buat temujanji di https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m \n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n 3. Penulis wasiat kami akan menyediakan draf dalam 7 hari bekerja dari tarikh pendaftaran permohonan dan akan dihantar melalui e-mel.\n 4. Sila berikan maklum balas sama ada bersetuju atau perlukan pindaan.\n 5. Jika setuju, tetapkan tarikh temujanji di cawangan berdekatan untuk tandatangan.\n 6. Tandatangan akan dilakukan bersama pegawai kami pada tarikh tersebut\n 7. Wasiat Asal akan disimpan di AmanahRaya.\n 8. Wasiat Pendua akan diserahkan kepada **{name}** untuk simpanan.\n\n **{name}** akan menerima e-mel pengesahan dan e-card Wasiat selepas Wasiat Asal diterima serta disimpan selamat oleh AmanahRaya.\n\n Sekiranya **{name}** telah sampai ke peringkat ini, ARIA mengucapkan TAHNIAH kerana telah berjaya merancang masa depan`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    wasiat_my_permohonan_tidak_bukan_wasiat_islam: {
        id: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam',
        message: `AmanahRaya ada menawarkan 2 jenis wasiat.\n\n Wasiat Asas : Dokumen yang menetapkan pelantikan Amanah Raya Berhad untuk menguruskan harta, termasuk penyelesaian hutang, mengikut Akta Wasiat 1959. Wasiat ini hanya menyatakan nama penerima dan bahagian yang akan diterima tanpa menyenaraikan jenis aset secara terperinci.\n\n Wasiat Komprehensif : Dokumen perundangan yang lebih terperinci dan menyeluruh, yang menyatakan kehendak pewasiat mengenai pengurusan serta pengagihan hartanya selepas kematian. Wasiat ini bukan sahaja merangkumi pelantikan pentadbir dan pembahagian aset kepada penerima pilihan, tetapi juga boleh meliputi arahan khusus seperti penjagaan anak di bawah umur, pemenuhan tanggungan kewangan, derma kepada badan amal, dan pesanan kepada waris. Wasiat komprehensif memastikan perancangan pusaka yang lebih jelas, mengelakkan pertikaian dalam kalangan waris, serta memudahkan proses pentadbiran harta selepas kematian pewasiat.\n\n Untuk perbandingan Wasiat Asas dan Wasiat Komprehensif secara terperinci, sila klik https://www.amanahraya.my/ms/perkhidmatan-wasiat/ \n\n **{name}** berminat wasiat yang mana?`,
        options: [
            { label: '1️⃣ Wasiat Asas', nextStep: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_asas' },
            { label: '2️⃣ Wasiat Komprehensif', nextStep: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_komprehensif' }
        ]
    },
    wasiat_my_permohonan_tidak_bukan_wasiat_islam_asas: {
        id: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_asas',
        message: `Hebat!!!**{name}** telah mengambil langkah bijak dalam merancang masa depan.\n\n Wasi: AmanahRaya Tempoh Penyediaan: 1 hari bekerja Fi Wasiat: RM500 (Fi adalah termasuk khidmat rundingan, penyediaan wasiat dan penyimpanan wasiat)\n\n Boleh ARIA terus ke proses permohonan?`,
        options: [
            { label: '1️⃣ Teruskan', nextStep: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_asas_tersukan' },
            { label: '2️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    wasiat_my_permohonan_tidak_bukan_wasiat_islam_asas_tersukan: {
        id: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_asas_tersukan',
        message: ``,
        options: [
            { label: "1️⃣ MyAmanahRaya Apps", nextStep: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_asas_tersukan_arb_app' },
            { label: '2️⃣ Wasiat atas talian', nextStep: ' wasiat_my_permohonan_tidak_bukan_wasiat_islam_asas_tersukan_arb_app_talian' },
            { label: "3️⃣ Kaunter", nextStep: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_asas_tersukan_kaunter' },
        ]
    },
    wasiat_my_permohonan_tidak_bukan_wasiat_islam_asas_tersukan_arb_app: {
        id: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_asas_tersukan_arb_app',
        message: ``,
        options: [
            { label: '1️⃣ Ejen', nextStep: 'wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan_arb_app_ejen' },
            { label: '2️⃣ Atas talian', nextStep: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_asas_tersukan_arb_app_talian' }
        ]
    },
    wasiat_my_permohonan_tidak_bukan_wasiat_islam_asas_tersukan_arb_app_talian: {
        id: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_asas_tersukan_arb_app_talian',
        message: `1. Sila klik https://willwriting.amanahraya.com.my/.\n 2. Daftar untuk penggunaan.\n 3. Sila teruskan penulisan wasiat dan pembayaran mengikut arahan yang tertera atas talian tersebut.\n\n 1. Wasiat Asas boleh dicetak sendiri atau melalui cawangan kami.\n 2. Sekiranya **{name}** membuat cetakan sendiri, sila ikut arahan seperti atas talian.\n 3. Sekiranya cetakan ingin dibuat di cawangan, temujanji perlu dibuat dengan menghubungi Talian Mesra 03-2723 7273.\n 4. Tandatangan akan dilakukan bersama pegawai kami pada tarikh tersebut.\n 5. Wasiat Asal disimpan oleh AmanahRaya, manakala Wasiat Pendua diberikan kepada **{name}** untuk simpanan.\n\n **{name}** akan menerima e-mel pengesahan dan e-card Wasiat selepas Wasiat Asal diterima serta disimpan selamat oleh AmanahRaya\n\n ekiranya **{name}** telah sampai ke peringkat ini, ARIA mengucapkan TAHNIAH kerana telah berjaya merancang masa depan.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    wasiat_my_permohonan_tidak_bukan_wasiat_islam_asas_tersukan_kaunter: {
        id: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_asas_tersukan_kaunter',
        message: `Sila kemukakan borang permohonan beserta dokumen berikut:\n 1. Borang Permohonan Wasiat Asas (link)\n 2. Salinan Kad Pengenalan pewasiat\n 3. Salinan Kad Pengenalan penerima\n 4. Salinan dokumen aset/hutang yang dinyatakan di dalam wasiat.\n 5. Fi Wasiat Asas : RM500. (pembayaran boleh melalui tunai, kad debit/kredit, kod QR)\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan. **{name}** boleh buat temujanji di https://arb.nubitel.co/arb/Appointment/ AppointmentForm.aspx?para=m\n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n 3. Tandatangan akan dilakukan bersama pegawai kami.\n 4. Wasiat Asal akan disimpan di AmanahRaya.\n 5. Wasiat Pendua akan diserahkan kepada **{name}** untuk simpanan.\n\n **{name}** akan menerima e-mel pengesahan dan e-card Wasiat selepas Wasiat Asal diterima serta disimpan selamat oleh AmanahRaya\n\n ekiranya **{name}** telah sampai ke peringkat ini, ARIA mengucapkan TAHNIAH kerana telah berjaya merancang masa depan.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    wasiat_my_permohonan_tidak_bukan_wasiat_islam_komprehensif: {
        id: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_komprehensif',
        message: `Hebat!!!**{name}** telah mengambil langkah bijak dalam merancang masa depan.\n\n Wasi: AmanahRaya Tempoh Penyediaan: 7 hari bekerja Fi Wasiat: RM1,200 (Fi adalah termasuk khidmat rundingan, penyediaan wasiat dan penyimpanan wasiat)\n\n Boleh ARIA terus ke proses permohonan?`,
        options: [
            { label: '1️⃣ Teruskan', nextStep: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_komprehensif_tersukan' },
            { label: '2️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    wasiat_my_permohonan_tidak_bukan_wasiat_islam_komprehensif_tersukan: {
        id: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_komprehensif_tersukan',
        message: `Permohonan boleh dibuat melalui beberapa cara. **{name}** nak pilih yang mana?`,
        options: [
            { label: "1️⃣ MyAmanahRaya Apps", nextStep: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_komprehensif_tersukan_arb_app' },
            { label: '2️⃣ Wasiat atas talian', nextStep: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_komprehensif_tersukan_arb_app_talian' },
            { label: "3️⃣ Kaunter", nextStep: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_komprehensif_tersukan_kaunter' },
        ]
    },
    wasiat_my_permohonan_tidak_bukan_wasiat_islam_komprehensif_tersukan_arb_app: {
        id: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_komprehensif_tersukan_arb_app',
        message: `1. Sila muat turun MyAmanahRaya Apps melalui Google Play atau Apple Apps Store.\n 2. Daftar untuk penggunaan.\n 3. Pilih 'Wasiat'\n 4. Pilih Ejen untuk urusan secara bersemuka atau boleh terus membuat permohonan melalui aplikasi ini.\n\n **{name}** ingin buat melalui ejen atau atas talian?`,
        options: [
            { label: '1️⃣ Ejen', nextStep: 'wasiat_my_permohonan_tidak_waisiat_islam_asas_teruskan_arb_app_ejen' },
            { label: '2️⃣ Atas talian', nextStep: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_komprehensif_tersukan_arb_app_talian' }
        ]
    },
    wasiat_my_permohonan_tidak_bukan_wasiat_islam_komprehensif_tersukan_arb_app_talian: {
        id: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_komprehensif_tersukan_arb_app_talian',
        message: `1. Sila klik https://willwriting.amanahraya.com.my/.\n 2. Daftar untuk penggunaan.\n 3. Sila teruskan penulisan wasiat dan pembayaran mengikut arahan yang tertera atas talian tersebut.\n\n 1. Penulis wasiat kami akan menyediakan draf dalam 7 hari bekerja dari tarikh pendaftaran permohonan dan akan dihantar melalui e-mel.\n 2. Sila berikan maklum balas sama ada bersetuju atau perlukan pindaan.\n 3. Jika setuju, tetapkan tarikh temujanji di cawangan berdekatan untuk tandatangan.\n 4. Tandatangan akan dilakukan bersama pegawai kami pada tarikh tersebut.\n 5. Wasiat Asal disimpan oleh AmanahRaya, manakala Wasiat Pendua diberikan kepada **{name}** untuk simpanan.\n\n **{name}** akan menerima e-mel pengesahan dan e-card Wasiat selepas Wasiat Asal diterima serta disimpan selamat oleh AmanahRaya.\n\n Sekiranya **{name}** telah sampai ke peringkat ini, ARIA mengucapkan TAHNIAH kerana telah berjaya merancang masa depan.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    wasiat_my_permohonan_tidak_bukan_wasiat_islam_komprehensif_tersukan_kaunter: {
        id: 'wasiat_my_permohonan_tidak_bukan_wasiat_islam_komprehensif_tersukan_kaunter',
        message: `Sila kemukakan borang permohonan beserta dokumen berikut:\n 1. Borang Permohonan Wasiat (link)\n 2. Salinan Kad Pengenalan pewasiat\n 3. Salinan Kad Pengenalan penerima\n 4. Salinan Kad Pengenalan penjaga (sekiranya berkaitan)\n 5. Salinan dokumen aset/hutang yang dinyatakan di dalam wasiat.\n 6. Fi Wasiat Komprehensif : RM1200. (pembayaran boleh melalui tunai, kad debit/kredit, kod QR)\n\n Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan. **{name}** boleh buat temujanji di https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m\n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/\n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n 3. Penulis wasiat kami akan menyediakan draf dalam 7 hari bekerja dari tarikh pendaftaran permohonan dan akan dihantar melalui e-mel.\n 4. Sila berikan maklum balas sama ada bersetuju atau perlukan pindaan.\n 5. Jika setuju, tetapkan tarikh temujanji di cawangan berdekatan untuk tandatangan.\n 6. Tandatangan akan dilakukan bersama pegawai kami pada tarikh tersebut\n 7. Wasiat Asal akan disimpan di AmanahRaya.\n 8. Wasiat Pendua akan diserahkan kepada **{name}** untuk simpanan.\n\n **{name}** akan menerima e-mel pengesahan dan e-card Wasiat selepas Wasiat Asal diterima serta disimpan selamat oleh AmanahRaya.\n\n Sekiranya **{name}** telah sampai ke peringkat ini, ARIA mengucapkan TAHNIAH kerana telah berjaya merancang masa depan.`,
        options: []
    },
    wasiat_my_penyimpanan: {
        id: 'wasiat_my_penyimpanan',
        message: `ARIA nak maklumkan wasiat luar adalah merujuk kepada wasiat yang ditulis dengan pihak selain ARB namun tetap boleh disimpan selamat di ARB\n\n Kelebihan penyimpanan wasiat di ARB:\n 1. Keselamatan terjamin\n 2. Akses mudah dan teratur\n 3. Kerahsiaan terpelihara\n 4. Memudahkan urusan waris\n\n **{name}** ingin simpan wasiat siapa?`,
        options: [
            { label: "1️⃣ Wasiat saya ", nextStep: 'wasiat_my_penyimpanan_saya' },
            { label: '2️⃣ Wasiat anak guam saya', nextStep: 'wasiat_my_penyimpanan_saya' },
            { label: "3️⃣ Wasiat pelanggan saya", nextStep: 'wasiat_my_penyimpanan_saya' },
        ]
    },
    wasiat_my_penyimpanan_saya: {
        id: 'wasiat_my_penyimpanan_saya',
        message: `Boleh ARIA tahu, siapa wasi yang dilantik di dalam wasiat?\n\n Wasi adalah merujuk kepada individu yang dilantik di dalam wasiat bagi menguruskan harta pusaka setelah berlaku kematian pewasiat.`,
        options: [
            { label: "1️⃣ Amanah Raya Berhad", nextStep: 'wasiat_my_penyimpanan_saya_raya' },
            { label: '2️⃣ Selain Amanah Raya Berhad', nextStep: 'wasiat_my_penyimpanan_saya_raya_berhad' },
        ]
    },
    wasiat_my_penyimpanan_saya_raya: {
        id: 'wasiat_my_penyimpanan_saya_raya',
        message: `Terbaik!!! **{name}** telah memilih wasi yang tepat.Sila hadir ke mana-mana cawangan kami yang berdekatan dan bawa bersama dokumen-dokumen berikut:\n 1. Borang Permohonan Wasiat (link)\n 2. Wasiat asal\n 3. Salinan Kad Pengenalan pewasiat\n 4. Fi Penyimpanan : RM600 (pembayaran boleh melalui tunai, kad debit/kredit, kod QR)\n 1. Borang Permohonan Wasiat (link)\n 2. Wasiat asal\n 3. Salinan Kad Pengenalan pewasiat dan saksi-saksi wasiat\n 4. Fi Penyimpanan : RM400 (pembayaran boleh melalui tunai, kad debit/kredit, kod QR)\n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n **{name}** akan terima e-mel pengesahan penyimpanan wasiat setelah proses penyimpanan selesai dilaksanakan.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    wasiat_my_penyimpanan_saya_raya_berhad: {
        id: 'wasiat_my_penyimpanan_saya_raya_berhad',
        message: `Sila hadir ke mana-mana cawangan kami yang berdekatan dan bawa bersama dokumen- dokumen berikut:\n 1. Borang Permohonan Wasiat (link)\n 2. Wasiat asal\n 3. Salinan Kad Pengenalan pewasiat\n 4. Fi Penyimpanan : RM600 (pembayaran boleh melalui tunai, kad debit/kredit, kod QR)\n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n **{name}** akan terima e-mel pengesahan penyimpanan wasiat setelah proses penyimpanan selesai dilaksanakan.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    // Pusaka asset starts from here
    pusaka_my_aset: {
        id: 'pusaka_my_aset',
        message: `Boleh ARIA tahu, apa aset tambahan yang hendak ditadbir?`,
        options: [
            { label: "1️⃣ Kenderaan sahaja (nilaian semasa kurang dari RM10,000)", nextStep: 'pusaka_my_aset_kenderaan' },
            { label: '2️⃣ Aset alih sahaja', nextStep: 'pusaka_my_aset_alih_sahaja' },
            { label: "3️⃣ Kenderaan sahaja (nilaian semasa melebihi RM10,000)", nextStep: 'pusaka_my_aset_alih_sahaja' },
            { label: "4️⃣ Aset alih dan aset tak alih ", nextStep: 'pusaka_my_aset_alih_sahaja' },
            { label: "5️⃣ Aset tak alih sahaja", nextStep: 'pusaka_my_aset_alih_sahaja' },
        ]
    },
    pusaka_my_aset_kenderaan: {
        id: 'pusaka_my_aset_kenderaan',
        message: `ARIA maklumkan pentadbiran ini boleh dibuat secara prosedur Fast Lane iaitu Surat Kuasa Mentadbir (SKM) dikeluarkan dalam tempoh 30 hari dari tarikh penerimaan dokumen lengkap. Prosedur ini hanya terpakai bagi SKM yang dikeluarkan oleh ARB sahaja.\n\n 1. SIMATI\n a. Sijil Kematian asal & 1 salinan\n b. 1 salinan Sijil Kelahiran simati (Jika waris simati adalah ibubapa / adik beradik)\n\n 2. WAKIL WARIS\n a. 1 salinan kad pengenalan / passport\n b. 1 salinan dokumen pembuktian pertalian dengan simati\n i. Sijil Kelahiran (jika waris adalah anak / adik beradik)\n ii. Sijil Perkahwinan (jika waris adalah pasangan)\n\n 3. PEMBELI (JIKA PENERIMA KENDERAAN ADALAH PEMBELI)\n a. 1 salinan kad pengenalan / passport\n b. Bukti pembelian kenderaan\n\n 4. HARTA ALIH - KENDERAAN\n a. Geran baru - 1 salinan geran kenderaan (depan sahaja)\n * Perlu sertakan carian e-hakmilik kenderaan / bukti penyelesaian hutang / bukti pembelian tunai\n b. Geran lama - 1 salinan geran kenderaan (depan dan belakang sahaja)\n * Jika masih mempunyai hakmilik dituntut yang belum dibatalkan dan pinjaman telah selesai, perlu sertakan carian e-hakmilik / bukti penyelesaian hutang\n\n 5. MINIMUM DEPOSIT\n RM50\n\n 6. TEMPOH PENTADBIRAN\n 30 hari dari tarikh pembukaan fail dan dokumen lengkap\n\n 7. BORANG YANG BERKAITAN\n a. Borang Permohonan Pusaka Aset atau Liabiliti Tambahan\n b. Surat Akuan Pindahmilik Kenderaan\n c. Contoh Pengisian - Borang Permohonan Pusaka Aset atau Liabiliti Tambahan\n d. Contoh Pengisian - Surat Akuan Pindahmilik Kenderaan\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini.\n a. Jumlah nilaian RM3,000 dan ke bawah : RM50\n b. Jumlah nilaian RM3,000.01 - RM5,000 : RM150\n c. Jumlah nilaian RM5,000.01 - RM10,000 : 5.00% ke atas nilai kenderaan\n\n Untuk makluman, nilaian kenderaan akan dibuat melalui laman web di kaunter cawangan ketika proses pembukaan fail. **{name}** perlu tandatangan bagi menyatakan persetujuan ke atas nilaian yang dikeluarkan.\n\n Borang yang lengkap beserta dokumen yang diperlukan mestilah dihantar ke cawangan AmanahRaya yang sama mengikut pentadbiran terdahulu.\n\n Cara penghantaran mana yang lebih mudah untuk **{name}**?`,
        options: [
            { label: "1️⃣ Kaunter", nextStep: 'pusaka_my_aset_kenderaan_kaunter' },
            { label: '2️⃣ Pos', nextStep: 'pusaka_my_aset_kenderaan_pos' },
            { label: "3️⃣ E-mel / WhatsApp", nextStep: 'pusaka_my_aset_kenderaan_email' },
        ]
    },
    pusaka_my_aset_alih_sahaja: {
        id: 'pusaka_my_aset_alih_sahaja',
        message: `Ok jelas. ARIA akan senaraikan keperluan dokumen.\n\n 1. SIMATI\n a. Sijil Kematian asal & 1 salinan\n\n 2. WARIS SIMATI\n a. 1 salinan Sijil Kematian (jika terdapat waris yang meninggal selepas pentadbiran awal selesai)\n\n 3. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang) dan tidak mempunyai tanggungan / selesai pinjaman\n b. 1 salinan penyata akaun / buku simpanan akaun simati (ASB / Bank / Tabung Haji)\n c. 1 salinan penyata akaun semasa\n d. 1 salinan penyata / buku simpanan akaun bersama\n e. 1 salinan penyata Saham Bursa Malaysia\n f. 1 salinan penyata Deposit Tetap\n g. 1 salinan slip Peti Simpanan Selamat (Safe Deposit Box)\n h. 1 salinan sijil Saham Syarikat\n i. 1 salinan penyata KWSP\n j. 1 salinan polisi Insuran\n k. 1 salinan lesen vessel\n\n 4. HARTA TAK ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan perjanjian jual beli (S&P) untuk rumah yang belum memilik hakmilik strata\n b. 1 salinan hakmilik strata rumah\n c. 1 salinan geran rumah\n d. 1 salinan geran tanah\n e. Resit asal cukai tanah terkini dan 1 salinan\n f. Resit asal cukai pintu terkini dan 1 salinan\n\n 5. DEPOSIT\n a. RM50 - RM1000 (jumlah sebenar akan dimaklumkan\n setelah semakan dokumen dibuat)\n\n 6. BORANG YANG BERKAITAN\n a. Borang Permohonan Pusaka Aset atau Liabiliti Tambahan\n b. Contoh Pengisian - Borang Permohonan Pusaka Aset atau Liabiliti Tambahan\n\n Borang yang lengkap beserta dokumen yang diperlukan mestilah dihantar ke cawangan AmanahRaya yang sama mengikut pentadbiran terdahulu.\n\n Cara penghantaran mana yang lebih mudah untuk **{name}**?`,
        options: [
            { label: "1️⃣ Kaunter", nextStep: 'pusaka_my_aset_kenderaan_kaunter' },
            { label: '2️⃣ Pos', nextStep: 'pusaka_my_aset_kenderaan_pos' },
            { label: "3️⃣ E-mel / WhatsApp", nextStep: 'pusaka_my_aset_kenderaan_email' },
        ]
    },
    pusaka_my_aset_kenderaan_kaunter: {
        id: 'pusaka_my_aset_kenderaan_kaunter',
        message: `Sila hadir ke mana-mana kaunter cawangan kami yang berdekatan. **{name}** boleh buat temujanji di https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m \n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n Ada apa-apa lagi yang boleh AIRA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    pusaka_my_aset_kenderaan_pos: {
        id: 'pusaka_my_aset_kenderaan_pos',
        message: `Sila poskan ke cawangan di mana fail telah didaftarkan.\n\n https://www.amanahraya.my/contact-us/branch-locator/ \n\n **{name}** akan dihubungi bagi pembayaran atas talian setelah dokumen diterima.\n\n Ada apa-apa lagi yang boleh AIRA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    pusaka_my_aset_kenderaan_email: {
        id: 'pusaka_my_aset_kenderaan_email',
        message: `Dokumen yang jelas boleh dihantar melalui e-mel ke crmd@arb.com.my atau WhatsApp kami di 03-2055 7557.\n\n **{name}** akan dihubungi bagi pembayaran atas talian setelah dokumen diterima.\n\n Ada apa-apa lagi yang boleh AIRA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    sabah_my: {
        id: 'sabah_my',
        message: `Pentadbiran pusaka di Sabah hanya terpakai sekiranya harta Simati (alih dan tak alih) berada di Sabah. Jika harta di Semenanjung, Sarawak atau Labuan, pentadbiran pusaka hendaklah dibuat di Semenanjung, Sarawak atau Labuan.\n\n Sepanjang pengetahuan **{name}**, adakah pentadbiran pusaka Simati pernah dibuat sebelum ini?`,
        options: [
            { label: "1️⃣ Ya, pernah dibuat", nextStep: 'sabah_my_ya' },
            { label: '2️⃣ Tidak pernah dibuat sebelum ini', nextStep: 'sabah_my_tidak' },
        ]
    },
    sabah_my_ya: {
        id: 'sabah_my_ya',
        message: `Boleh ARIA tahu, di mana pentadbiran sebelum ini dibuat?`,
        options: [
            { label: '1️⃣ Mahkamah Tinggi Sivil (Semenanjung)', nextStep: 'sabah_my_ya_tinggi_sivil' },
            { label: '2️⃣ Mahkamah Tinggi Sivil (Kota Kinabalu / Tawau / Sandakan)', nextStep: 'sabah_my_ya_tawau' },
            { label: '3️⃣ Mahkamah Syariah (Kota Kinabalu / Tawau / Sandakan)', nextStep: 'esabah_my_ya_kota_kinabalu' },
            { label: '4️⃣ Pejabat Daerah / Amanah Raya Berhad (Sarawak)', nextStep: 'sabah_my_ya_arb_sarawak' },
            { label: '5️⃣ Amanah Raya Berhad (Semenanjung)', nextStep: 'sabah_my_ya_arb_sarawak' },
            { label: '6️⃣ Pejabat Pembahagian Pusaka (Semenanjung / Labuan)', nextStep: 'sabah_my_ya_arb_sarawak' },
            { label: '7️⃣ Mahkamah Anak Negeri (Sabah)', nextStep: 'sabah_my_ya_anak_negari_sabah' },
            { label: '8️⃣ Amanah Raya Berhad (Sabah)', nextStep: 'sabah_my_ya_arb_sabah' },
        ]
    },
    sabah_my_ya_tinggi_sivil: {
        id: 'sabah_my_ya_tinggi_sivil',
        message: `Adakah hartanah di Sabah telah dimasukkan di dalam pentadbiran pusaka yang dibuat?`,
        options: [
            { label: '1️⃣ Ya', nextStep: 'sabah_my_ya_tinggi_sivil_ya' },
            { label: '2️⃣ Tidak', nextStep: 'sabah_my_ya_tinggi_sivil_tidak' },
        ]
    },
    sabah_my_ya_tinggi_sivil_ya: {
        id: 'sabah_my_ya_tinggi_sivil_ya',
        message: `Bagi bukan Islam, pindahmilik hanya boleh dibuat sekiranya **{name}** mengemukakan perintah tersebut ke ARB Kota Kinabalu untuk tujuan resealing di Mahkamah Tinggi Sabah. Bagi Islam, **{name}** perlu mengemukakan permohonan pusaka baharu di ARB Kota Kinabalu untuk difailkan melalui Mahkamah Syariah.\n\n Adakah **{name}** ingin teruskan?`,
        options: [
            { label: '1️⃣ Teruskan', nextStep: 'sabah_my_tidak' },
            { label: '2️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    sabah_my_ya_tinggi_sivil_tidak: {
        id: 'sabah_my_ya_tinggi_sivil_tidak',
        message: `**{name}** boleh mengemukakan permohonan pusaka baharu di ARB Kota Kinabalu untuk difailkan melalui Mahkamah TInggi Sivil (bagi Bukan Islam) atau Mahkamah Syariah (bagi Islam).\n\n Adakah **{name}** ingin teruskan?`,
        options: [
            { label: '1️⃣ Teruskan', nextStep: 'sabah_my_tidak' },
            { label: '2️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    sabah_my_ya_tawau: {
        id: 'sabah_my_ya_tawau',
        message: `Sekiranya Pentadbir telah dilantik oleh Mahkmah Tinggi, **{name}** boleh meneruskan pentadbiran yang telah dibuat di Mahkamah Tinggi. Namun, sekiranya Pentadbir yang dilantik gagal menjalankan tugas, **{name}** boleh melantik ARB Kota Kinabalu sebagai pentadbr gantian dengan mengemukakan permohonan di ARB Kota Kinabalu.\n\n  Adakah **{name}** ingin teruskan?`,
        options: [
            { label: '1️⃣ Teruskan', nextStep: 'sabah_my_tidak' },
            { label: '2️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    esabah_my_ya_kota_kinabalu: {
        id: 'esabah_my_ya_kota_kinabalu',
        message: `Sekiranya Wasi @ Wali Harta telah dilantik oleh Mahkmah Syariah, **{name}** boleh meneruskan pentadbiran yang telah dibuat di Mahkamah Syariah. Namun, sekiranya Wasi @ Wali Harta yang dilantik gagal menjalankan tugas, **{name}** boleh melantik ARB Kota Kinabalu sebagai Wasi @ Wali Harta yang baharu dengan mengemukakan permohonan di ARB Kota Kinabalu.\n\n Adakah **{name}** ingin teruskan?`,
        options: [
            { label: '1️⃣ Teruskan', nextStep: 'sabah_my_tidak' },
            { label: '2️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    sabah_my_ya_arb_sarawak: {
        id: 'sabah_my_ya_arb_sarawak',
        message: `**{name}** boleh mengemukakan permohonan pusaka baharu di ARB Kota Kinabalu untuk difailkan melalui Mahkamah TInggi Sivil (bagi Bukan Islam) atau Mahkamah Syariah (bagi Islam).\n\n Adakah **{name}** ingin teruskan?`,
        options: [
            { label: '1️⃣ Teruskan', nextStep: 'sabah_my_tidak' },
            { label: '2️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    sabah_my_ya_anak_negari_sabah: {
        id: 'sabah_my_ya_anak_negari_sabah',
        message: `Bagi harta Simati yang tidak boleh ditadbir melalui Mahkamah Anak Negeri, **{name}** boleh mengemukakan permohonan pusaka baharu di ARB Kota Kinabalu untuk difailkan melalui Mahkamah TInggi Sivil.\n\n Adakah **{name}** ingin teruskan?`,
        options: [
            { label: '1️⃣ Teruskan', nextStep: 'sabah_my_tidak' },
            { label: '2️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    sabah_my_ya_arb_sabah: {
        id: 'sabah_my_ya_arb_sabah',
        message: `**{name}** boleh melengkapkan borang aset tambahan di bawah dan menghantar borang serta dokumen yang lengkap ke ARB Kota Kinabalu.\n\n [BORANG PERMOHONAN ASET TAMBAHAN](https://drive.google.com/file/d/1sMYoAe-0iOpgoTc-U50FwTi9-zsbshOO/view)`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    sabah_my_tidak: {
        id: 'sabah_my_tidak',
        message: `Sebelum ARIA berikan penerangan lanjut, **{name}** boleh mendapatkan maklumat berkenaan pentadbiran pusaka di ARB Kota Kinabalu.\n\n 1. Pentadbiran pusaka\n a. Jika Simati beragama Islam, permohonan akan dibuat melalui Mahkamah Syariah.\n b. Jika Simati bukan Islam (Bukan Bumiputera), permohonan akan dibuat melalui Mahkamah Tinggi Sivil.\n\n 2. Status hartanah\n a. Bagi hartanah berstatus Native Land (NT), penerima mestilah berstatus Anak Negeri (Bumiputera / Peribumi Sabah).\n b. Bagi hartanah selain NT, tiada syarat yang ditetapkan ke atas penerima.\n c. Jika lokasi hartanah berada di luar kawasan Kota Kinabalu, proses pindahmilik hartanah akan dibuat di Jabatan Tanah Daerah yang terlibat.\n\n 3. Status pemilikan hartanah\n a. Jika Simati beragama Islam, hartanah mestilah bebas daripada hutang dan mempunyai geran individu asal ketika permohonan dibuat di Mahkamah Syariah.\n b. Jika Simati bukan Islam, permohonan boleh dibuat di Mahkamah Tinggi Sivil walaupun hartanah masih mempunyai hutang. Namun, proses pindahmilik akan ditangguhkan sehingga hutang selesai dilaksanakan dan mempunyai geran individu asal.\n *disclaimer bhw penerangan atas memang untuk hartanah di Sabah ahaja. Untuk harta alih di Sabah, boleh failkan di mana-mana (tidak semestinya dibuat di Sabah).\n\n Penerangan selanjutnya hanya terpakai sekiranya maklumat **{name}** memenuhi kriteria yang ditetapkan.\n\n Apakah agama yang dianuti oleh Simati?`,
        options: [
            { label: '1️⃣ Islam', nextStep: 'sabah_my_tidak_islam' },
            { label: '2️⃣ Bukan Islam', nextStep: 'sabah_my_tidak_bulkan_islam' }
        ]
    },
    sabah_my_tidak_islam: {
        id: 'sabah_my_tidak_islam',
        message: `1. SIMATI\n a. Sijil Kematian asal Simati & 3 salinan yang telah disahkan oleh JPN (jika meninggal luar negara, kemukakan Laporan Kematian Luar Negara oleh JPN)\n b. 3 salinan Sijil Kelahiran Simati yang telah disahkan oleh JPN\n c. Wasiat asal Simati & 1 salinan (sekiranya ada)\n\n 2. WARIS SIMATI\n a. 3 salinan Kad Pengenalan setiap waris yang telah disahkan oleh JPN.\n b. Bukti pertalian waris dengan Simati\n i. Pasangan - Sijil Pernikahan asal & 3 salinan yang telah disahkan oleh Jab. Hal Ehwal Agama Islam Negeri Sabah (JHEAINS) / Majlis Ugama Islam Sabah (MUIS))\n ii. Anak – 3 salinan Sijil Kelahiran setiap waris yang telah disahkan oleh JPN.\n c. 3 salinan Sijil Kematian (bagi waris yang meninggal sebelum / selepas simati) yang telah disahkan oleh JPN.\n * Jika dokumen seperti Sijil Kelahiran / Sijil Kematian tidak dapat dikemukakan, sila dapatkan di JPN.\n * Bagi Sijil Nikah, pasangan perlu dapatkan di JHEAINS/MUIS.\n\n 3. AKUAN (SEDIAKAN YANG BERKAITAN SAHAJA) Perlu ditandatangan oleh saksi bebas di hadapan Pesuruhjaya Sumpah dan membuat penyeteman di laman web Lembaga Hasil Dalam Negeri (LHDN). Salinan kad pengenalan saksi perlu disertakan)\n a. Akuan Berkanun Bujang (jika Simati meninggal Bujang)\n b. Akuan Tiada Zuriat (jika Simati tidak mempunyai anak)\n c. Akuan Waris Tunggal (jika Simati hanya meninggalkan seorang waris sahaja)\n\n 4. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang) dan tidak mempunyai tanggungan / selesai pinjaman\n b. 1 salinan penyata akaun / buku simpanan akaun simati (ASB / Bank / Tabung Haji)\n c. 1 salinan penyata akaun semasa\n d. 1 salinan penyata / buku simpanan akaun bersama\n e. 1 salinan penyata Saham Bursa Malaysia\n f. 1 salinan penyata Deposit Tetap\n g. 1 salinan slip Peti Simpanan Selamat (Safe Deposit Box)\n h. 1 salinan sijil Saham Syarikat\n i. 1 salinan penyata KWSP\n j. 1 salinan polisi Insuran\n k. 1 salinan lesen vessel\n\n 5. HARTA TAK ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. Geran tanah asal atas nama Simati & 1 salinan geran tanah\n b. Pengesahan anak negeri (untuk tanah statys Native Title) sekiranya penerima bukan 100% bumiputera sabah\n\n 6. MINIMUM DEPOSIT\n a. RM1,500.00 bagi aset alih sahaja.\n b. RM2,000.00 bagi setiap aset tak alih.\n 7. TEMPOH PENTADBIRAN Minimum 1 tahun 6 bulan dari tarikh pembukaan fail\n\n 8. BORANG YANG BERKAITAN\n a. Borang Permohonan Pentadbiran Harta Pusaka\n b. Contoh Pengisian - Borang Permohonan Pentadbiran Harta Pusaka\n c. Senarai Semakan Dokumen Yang Perlu Disertakan\n d. Borang-borang lain (mahkamah) yang perlu dilengkapkan dari semasa ke semasa, setelah pendaftaran kes mal dibuat di Mahkamah Syariah.\n Cth: Borang Akuan Perlantikan Wali/Wasi Harta & Borang Persetujuan Pembahagian & Borang Penolakan.\n\n * Borang Permohonan perlu dilengkapkan dan ditandatangan oleh Pemohon di hadapan Pesuruhjaya Sumpah. Borang yang telah lengkap perlu dibuat penyeteman RM10.00 secara atas talian melalui laman sesawang Lembaga Hasil Dalam Negeri melalui pautan https://stamps.hasil.gov.my/stamps.\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini.\n 5% x RM25,000 yang pertama\n 4% x RM225,000 yang berikutnya\n 3% x RM250,000 yang berikutnya\n 2% x RM500,000 yang berikutnya\n 1% x baki selebihnya\n\n *Tidak termasuk fi perundangan & caj pihak ketiga (cth: Mahkamah, LHDN, JPPH dll).\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke ARB Kota Kinabalu untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/.\n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    sabah_my_tidak_bulkan_islam: {
        id: 'sabah_my_tidak_bulkan_islam',
        message: `1. SIMATI\n a. Sijil Kematian asal Simati & 3 salinan yang telah disahkan oleh JPN (jika meninggal luar negara, kemukakan Laporan Kematian Luar Negara oleh JPN)\n b. Wasiat asal Simati & 1 salinan (sekiranya ada)\n\n 2. WARIS SIMATI\n a. 3 salinan Kad Pengenalan setiap waris yang telah disahkan oleh JPN.\n b. Bukti pertalian waris dengan Simati\n i. Sijil Pekahwinan asal & 3 salinan yang telah disahkan oleh JPN) - sekiranya Simati tiada wasiat.\n ii. Anak – 3 salinan Sijil Kelahiran setiap waris yang telah disahkan oleh JPN.\n c. 3 salinan Sijil Kematian (bagi waris yang meninggal sebelum / selepas simati) yang telah disahkan oleh JPN.\n * Jika dokumen seperti Sijil Kelahiran / Sijil Kematian / Sijil Perkahwinan tidak dapat dikemukakan, sila dapatkan di JPN.\n\n 3. AKUAN (SEDIAKAN YANG BERKAITAN SAHAJA) Perlu ditandatangan oleh saksi bebas di hadapan Pesuruhjaya Sumpah dan membuat penyeteman di laman web Lembaga Hasil Dalam Negeri (LHDN). Salinan kad pengenalan saksi perlu disertakan)\n a. Akuan Berkanun Bujang (jika Simati meninggal Bujang)\n b. Akuan Tiada Zuriat (jika Simati tidak mempunyai anak)\n c. Akuan Waris Tunggal (jika Simati hanya meninggalkan seorang waris sahaja)\n\n 4. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang) dan tidak mempunyai tanggungan / selesai pinjaman\n b. 1 salinan penyata akaun / buku simpanan akaun simati (ASB / Bank / Tabung Haji)\n c. 1 salinan penyata akaun semasa\n d. 1 salinan penyata / buku simpanan akaun bersama\n e. 1 salinan penyata Saham Bursa Malaysia\n f. 1 salinan penyata Deposit Tetap\n g. 1 salinan slip Peti Simpanan Selamat (Safe Deposit Box)\n h. 1 salinan sijil Saham Syarikat\n i. 1 salinan penyata KWSP\n j. 1 salinan polisi Insuran\n k. 1 salinan lesen vessel\n\n 5. HARTA TAK ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. Geran tanah asal atas nama Simati & 1 salinan geran tanah\n b. Pengesahan anak negeri (untuk tanah statys Native Title) sekiranya penerima bukan 100% bumiputera sabah\n\n 6. MINIMUM DEPOSIT\n a. RM1,500.00 bagi aset alih sahaja.\n b. RM2,000.00 bagi setiap aset tak alih.\n\n 7. TEMPOH PENTADBIRAN\n a. Pusaka Berwasiat : Minimum 6 bulan dari tarikh pembukaan fail\n b. Pusaka tidak berwasiat : Minimum 1 tahun 6 bulan dari tarikh pembukaan fail\n\n 8. BORANG YANG BERKAITAN\n a. Borang Permohonan Pentadbiran Harta Pusaka\n b. Contoh Pengisian - Borang Permohonan Pentadbiran Harta Pusaka\n c. Senarai Semakan Dokumen Yang Perlu Disertakan\n\n * Borang Permohonan perlu dilengkapkan dan ditandatangan oleh Pemohon di hadapan Pesuruhjaya Sumpah. Borang yang telah lengkap perlu dibuat penyeteman RM10.00 secara atas talian melalui laman sesawang Lembaga Hasil Dalam Negeri melalui pautan https://stamps.hasil.gov.my/stamps.\n\n Terdapat fi pentadbiran yang dikenakan bagi pentadbiran harta pusaka ini.\n 5% x RM25,000 yang pertama\n 4% x RM225,000 yang berikutnya\n 3% x RM250,000 yang berikutnya\n 2% x RM500,000 yang berikutnya\n 1% x baki selebihnya\n\n *Tidak termasuk fi perundangan & caj pihak ketiga (cth: Mahkamah, LHDN, JPPH dll).\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke ARB Kota Kinabalu untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/.\n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    //Sarawk starts from here
    sarawak_my: {
        id: 'sarawak_my',
        message: `Sepanjang pengetahuan **{name}**, adakah pentadbiran pusaka simati pernah dibuat sebelum ini?`,
        options: [
            { label: "1️⃣ Ya, pernah dibuat", nextStep: 'sarawak_my_ya' },
            { label: '2️⃣ Tidak pernah dibuat sebelum ini', nextStep: 'sarawak_my_tidak' },
        ]
    },
    sarawak_my_ya: {
        id: 'sarawak_my_ya',
        message: `Boleh ARIA tahu, di mana pentadbiran sebelum ini dibuat?`,
        options: [
            { label: '1️⃣ Pejabat Daerah (Sarawak)', nextStep: 'sarawak_my_ya_daerah_sarawak' },
            { label: '2️⃣ Amanah Raya Berhad (Sarawak)', nextStep: 'sarawak_my_ya_arb_sarawak' },
            { label: '3️⃣ Mahkamah Tinggi Sivil (Semenanjung / Sabah)', nextStep: 'sarawak_my_ya_semenanjung' },
            { label: '4️⃣ Pejabat Pembahagian Pusaka (Semenanjung / Labuan)', nextStep: 'sarawak_my_tidak' },
            { label: '5️⃣ Mahkamah Syariah / Mahkamah Anak Negeri (Sabah)', nextStep: 'sarawak_my_tidak' },
            { label: '6️⃣ Amanah Raya Berhad (Semenanjung / Sabah)', nextStep: 'sarawak_my_tidak' },
        ]
    },
    sarawak_my_ya_daerah_sarawak: {
        id: 'sarawak_my_ya_daerah_sarawak',
        message: `**{name}** boleh membuat rujukan dengan Pejabat Daerah bagi pentadbiran aset tambahan Simati.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    sarawak_my_ya_arb_sarawak: {
        id: 'sarawak_my_ya_arb_sarawak',
        message: `**{name}** boleh melengkapkan borang aset tambahan di bawah dan menghantar borang serta dokumen yang lengkap ke cawangan Kuching untuk proses pengeluaran Surat Kuasa Tambahan\n\n [Borang Aset Tambahan](https://drive.google.com/file/d/187OrybkH0m6xPbS65gU6aj3L5lP5XZXZ/view)`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    sarawak_my_ya_semenanjung: {
        id: 'sarawak_my_ya_semenanjung',
        message: `Adakah hartanah di Sarawak telah dimasukkan di dalam pentadbiran pusaka yang dibuat?`,
        options: [
            { label: "1️⃣ Ya", nextStep: 'sarawak_my_ya_semenanjung_ya' },
            { label: '2️⃣ Tidak', nextStep: 'sarawak_my_tidak' },
        ]
    },
    sarawak_my_ya_semenanjung_ya: {
        id: 'sarawak_my_ya_semenanjung_ya',
        message: `Bagi urusan pindahmilik hartanah tersebut, **{name}** perlu membuat proses resealing di Amanah Raya Berhad Kuching\n\n **{name}** boleh hadir ke cawangan Kuching untuk mendapatkan penerangan lanjut.`,
        options: []
    },
    sarawak_my_tidak: {
        id: 'sarawak_my_tidak',
        message: `Untuk makluman, ARB Kuching hanya boleh mengeluarkan Surat Kuasa Mentadbir / Surat Probet bagi:\n 1. Lokasi hartanah\n a. Hartanah Simati dalam kawasan Kuching sahaja atau waris bermastautin di Kuching\n b. Bagi hartanah selain Kuching, pentadbiran perlu dibuat di Pejabat Daerah.\n\n 2. Penerima/Waris\n a. Warganegara Malaysia.\n b. Jika bukan warganegara, perlu kemukakan perintah Power of Attorney kepada Amanah Raya Berhad Kuching. (bagi harta yang melibatkan hartanah di Kuching sahaja).\n\n 3. Simati\n Berhad Kuching.\n a. Jika Simati bukan Melayu/Bumiputera, pentadbiran perlu dibuat di Amanah Raya\n b. Jika Simati adalah Melayu/Bumiputera, pentadbiran perlu dibuat di Pejabat Daerah.\n\n *Penjelasan di atas adalah khusus bagi urusan berkaitan hartanah yang terletak di Sarawak sahaja. Bagi harta alih di Sarawak, permohonan pentadbiran boleh difailkan di mana-mana cawangan Amanah Raya Berhad dan tidak semestinya dibuat di Sarawak.\n\n Penerangan selanjutnya hanya terpakai sekiranya maklumat **{name}** memenuhi kriteria yang ditetapkan.\n\n Adakah Simati meninggalkan wasiat dan siapakah Wasi di dalam wasiat Simati?`,
        options: [
            { label: '1️⃣ Tiada wasiat', nextStep: 'sarawak_my_tidak_tiada_wasiat' },
            { label: '2️⃣ Ada wasiat dan wasi adalah selain ARB', nextStep: 'sarawak_my_tidak_wasi' },
            { label: '3️⃣ Ada wasiat dan wasi adalah ARB', nextStep: 'sarawak_my_tidak_wasi' },
        ]
    },
    sarawak_my_tidak_tiada_wasiat: {
        id: 'sarawak_my_tidak_tiada_wasiat',
        message: `1. SIMATI\n a. Sijil Kematian asal Simati & 1 salinan (jika meninggal luar negara, kemukakan Sijil Kematian yang dikeluarkan oleh Negara terbabit dan disertakan pengesahan kematian daripada Kedutaan Malaysia atau Laporan Kematian Luar Negara oleh JPN ATAU\n b. Perintah Anggapan Kematian daripada Mahkamah Tinggi Sivil & 1 salinan.\n c. Salinan Sijil Pernikahan / Perkahwinan / Perceraian / Dikri Nisi Mutlak.\n\n 2. WARIS SIMATI\n a. 1 salinan Kad Pengenalan waris /pemohon\n b. 1 salinan bukti pertalian waris dengan Simati (contoh : Sijil Kelahiran, Sijil Pekahwinan)\n c. 1 salinan Sijil Kematian (bagi waris yang meninggal sebelum / selepas simati)\n\n 3. AKUAN\n a. Akuan Bersumpah oleh pemohon (Jika Sijil Kematian waris tidak dapat dikemukakan) – LA 1 (Swk. 1/2017).\n b. Akuan Bersumpah oleh pemohon dan 2 orang saksi bebas (jika Sijil Perkahwinan tidak dapat dikemukakan) – LA 2 (Swk. 1/2017) & LA 3 (Swk. 1/2017).\n c. Akuan Bersumpah oleh pemohon (bagi permohonan Surat Kuasa Mentadbir) – LA 5 (Swk. 1/2017).\n d. Akuan Bersumpah oleh seorang saksi bebas yang mengenali Simati untuk mengesahkan status perkahwinan Simati ATAU pengesahan daripada Persatuan Keturunan / Tua Kampung / Ketua Masyarakat / Ketua Badan Agama (jika Simati Bujang)\n\n * Akuan perlu ditandatangani oleh pemohon / saksi bebas di hadapan Pesuruhjaya Sumpah dan membuat penyeteman di laman web Lembaga Hasil Dalam Negeri (LHDN). Salinan kad pengenalan pemohon / saksi perlu disertakan.\n\n 4. LAIN-LAIN DOKUMEN\n a. Surat pengesahan oleh waris terdekat (Next-of-Kin) daripada Persatuan Keturunan / Temenggong / Penghulu – LA 4 (Swk. 1/2017).\n b. Surat persetujuan oleh benefisiari / waris terdekat Simati – LA 6 (Swk. 1/2017).\n c. Laporan Polis / Laporan Siasatan Polis Lengkap (jika kematian disebabkan kemalangan serta surat daripada pemohon menyatakan hasrat untuk mengambil tindakan undang-undang berkaitan).\n d. Surat daripada pemohon yang menyatakan tiada keperluan untuk membuat nilaian harta Simati seperti tanah, saham, kenderaan dan sebagainya. – LA 7 (Swk. 1/2017) e. Borang Aku Janji Amanah (Trust Undertaking) – TU (Swk. 1/2017) (jika berkaitan)\n\n 5. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Buku Akaun Simpanan / Penyata Akaun Semasa terkini / Penyata Akaun Tetap / resit deposit tetap / resit deposit keselamatan.\n b. 1 salinan Sijil Saham Bursa Malaysia / Penyata Akaun CDS.\n c. 1 salinan penyata KWSP atau surat pengesahan daripada KWSP mengenai jumlah keseluruhan.\n d. 1 salinan polisi Insuran atau Surat pengesahan daripada syarikat berkaitan menyatakan jumlah yang perlu dibayar.\n e. Bagi perniagaan (3 salinan Penyata Perdagangan, Untung Rugi dan Penyata Kunci Kira-kira pada tarikh kematian).\n i. Jika pemilikan tunggal, perlu disahkan oleh waris terdekat dan disertakan salinan cop syarikat. ii. Jika mempunyai pemilikan saham syarikat, maka perlu kemukakan Carian dari SSM. iii. Jika perkongsian, perlu disahkan oleh rakan kongsi yang masih hidup dan disertakan cop syarikat & salinan pendaftaran perniagaan dari LHDN / Pejabat Daerah.\n f. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang)\n g. 1 salinan Lesen Pemilikan Senjata Api.\n h. Surat daripada majikan Simati yang menyatakan gaji / bonus Simati (jika ada).\n\n 6. HARTA TAK ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. Salinan Geran Tanah dan Carian Rasmi daripada Pejabat Tanah / Memorandum Pemindahan / Perjanjian Jual Beli / Perjanjian Sewa / Surat Kuasa Wakil / Surat Wakil Kuasa.\n\n 7. FI PENTADBIRAN\n a. RM300.00 (Tiada nilaian harta alih dan harta tak alih)\n b. RM150.00 (Jika ada nilaian bagi harta alih dan harta tak alih kurang daripada <RM100K)\n c. RM300.00 (Jika harta alih dan harta tak alih bernilai RM100>RM1 juta)\n d. RM500.00 (jika harta alih dan harta tak alih bernilai RM1 juta dan ke atas)\n e. RM350.00 (Bagi permohonan oleh Warganegara Asing)\n\n 8. TEMPOH PENTADBIRAN\n 30 hari bekerja\n\n 9. BORANG YANG BERKAITAN\n a. Application for Letter of Administration\n b. Statutory Declaratin – LA 1 (Swk. 1/2017)\n c. Letter of Next-of-Kin – LA 4 (Swk. 1/2017)\n d. Statutory Declaration (by applicant) – LA 5 (1/2017)\n e. Consent to Grant of Letter of Administration – LA 6 (1/2017)\n f. No valuation letter – LA 7 (Swk.1/2017)\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke ARB Kuching untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/.\n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    sarawak_my_tidak_wasi: {
        id: 'sarawak_my_tidak_wasi',
        message: `1. SIMATI\n a. Sijil Kematian asal Simati & 1 salinan (jika meninggal luar negara, kemukakan Sijil Kematian yang dikeluarkan oleh Negara terbabit dan disertakan pengesahan kematian daripada Kedutaan Malaysia atau Laporan Kematian Luar Negara oleh JPN) ATAU\n b. Perintah Anggapan Kematian daripada Mahkamah Tinggi Sivil & 1 salinan.\n c. Wasiat asal Simati & 2 salinan (TIDAK perlu disahkan).\n\n 2. WASI / PENTADBIR\n a. 1 salinan Kad Pengenalan Wasi / Pentadbir Wasiat Simati.\n\n 3. AKUAN\n a. Akuan Bersumpah oleh 2 orang saksi Wasiat Simati (bagi tujuan pengesahan saksi).\n b. Akuan Bersumpah oleh Wasi / Pentadbir (bagi permohonan Geran Probet untuk pentadbiran pusaka Simati) – P1 (Swk. 1/2005).\n\n * Akuan perlu ditandatangani oleh saksi / wasi di hadapan Pesuruhjaya Sumpah dan membuat penyeteman di laman web Lembaga Hasil Dalam Negeri (LHDN). Salinan kad pengenalan wasi perlu disertakan.\n\n 4. LAIN-LAIN DOKUMEN\n a. Surat daripada Wasi yang menyatakan tiada keperluan untuk membuat nilaian harta Simati seperti tanah, saham, kenderaan dan sebagainya. – P2 (Swk. 1/2005).\n\n 5. HARTA ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. 1 salinan Buku Akaun Simpanan / Penyata Akaun Semasa terkini / Penyata Akaun Tetap / resit deposit tetap / resit deposit keselamatan.\n b. 1 salinan Sijil Saham Bursa Malaysia / Penyata Akaun CDS.\n c. 1 salinan penyata KWSP atau surat pengesahan daripada KWSP mengenai jumlah keseluruhan.\n d. 1 salinan polisi Insuran atau Surat pengesahan daripada syarikat berkaitan menyatakan jumlah yang perlu dibayar.\n e. Bagi perniagaan (3 salinan Penyata Perdagangan, Untung Rugi dan Penyata Kunci Kira-kira pada tarikh kematian).\n i. Jika pemilikan tunggal, perlu disahkan oleh waris terdekat dan disertakan salinan cop syarikat.\n ii. Jika mempunyai pemilikan saham syarikat, maka perlu kemukakan Carian dari SSM. iii. Jika perkongsian, perlu disahkan oleh rakan kongsi yang masih hidup dan disertakan cop syarikat & salinan pendaftaran perniagaan dari LHDN / Pejabat Daerah.\n f. 1 salinan Geran / Sijil Pemilikan Kenderaan (depan dan belakang)\n g. 1 salinan Lesen Pemilikan Senjata Api.\n h. Surat daripada majikan Simati yang menyatakan gaji / bonus Simati (jika ada).\n\n 6. HARTA TAK ALIH (SEDIAKAN YANG BERKAITAN SAHAJA)\n a. Salinan Geran Tanah dan Carian Rasmi daripada Pejabat Tanah / Memorandum Pemindahan / Perjanjian Jual Beli / Perjanjian Sewa / Surat Kuasa Wakil / Surat Wakil Kuasa.\n\n 7. FI PENTADBIRAN\n a. RM300.00 (Tiada nilaian harta alih dan harta tak alih)\n b. RM150.00 (Jika ada nilaian bagi harta alih dan harta tak alih kurang daripada <RM100K)\n c. RM300.00 (Jika harta alih dan harta tak alih bernilai RM100>RM1 juta)\n d. RM500.00 (jika harta alih dan harta tak alih bernilai RM1 juta dan ke atas)\n e. RM350.00 (Bagi permohonan oleh Warganegara Asing)\n\n 8. TEMPOH PENTADBIRAN\n 30 hari bekerja\n\n 9. BORANG YANG BERKAITAN\n a. Application for Probate of the Will\n b. Statutory Declaration – P1 (Swk. 1/2005)\n c. No valuation letter – P2 (Swk. 1/2005)\n\n Borang yang lengkap beserta dokumen yang diperlukan boleh dihantar ke ARB Kuching untuk proses pembukaan fail pusaka. **{name}** boleh membuat temujanji di https://www.amanahraya.my/.\n\n Maklumat cawangan boleh didapati di https://www.amanahraya.my/contact-us/branch-locator/ \n\n 1. Pada tarikh temujanji, rundingan dan khidmat nasihat boleh dibuat bersama pegawai kami.\n 2. Serahan dokumen dan pembayaran boleh dilakukan pada hari yang sama.\n\n Ada apa-apa lagi yang boleh ARIA bantu?`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    //Prenentuan Waris starts from here
    establishment_rightful_beneficiaries_my: {
        id: 'establishment_rightful_beneficiaries_my',
        message: `Boleh ARIA tahu, apakah agama simati semasa kematian?`,
        options: [
            { label: '1️⃣ Islam', nextStep: 'establishment_rightful_beneficiaries_my_islam' },
            { label: '2️⃣ Bukan Islam', nextStep: 'establishment_rightful_beneficiaries_my_bukan_islam' },
        ]
    },
    establishment_rightful_beneficiaries_my_islam: {
        id: 'establishment_rightful_beneficiaries_my_islam',
        message: `Bagi Simati Islam, pembahagian harta adalah mengikut Hukum Faraid selepas ditolak hutang dan disempurnakan wasiat (jika ada)\n\n Maklumat penentuan waris di bawah hanya terpakai untuk kes biasa, contohnya waris seperti pasangan atau anak masih hidup. Tidak termasuk kes kematian berlapis, contohnya waris seperti anak telah meninggal dunia selepas Simati.\n\n Sepanjang pengetahuan **{name}**, apakah status perkahwinan simati?`,
        options: [
            { label: '1️⃣ Bujang', nextStep: 'establishment_rightful_beneficiaries_my_islam_bujang' },
            { label: '2️⃣ Berkahwin', nextStep: 'establishment_rightful_beneficiaries_my_islam_berkahwin' },
        ]
    },
    establishment_rightful_beneficiaries_my_islam_bujang: {
        id: 'establishment_rightful_beneficiaries_my_islam_bujang',
        message: `Adakah ibubapa Simati masih hidup ketika kematian simati?`,
        options: [
            { label: '1️⃣ Kedua-dua telah meningga', nextStep: 'est_rightful_b_my_islam_bujang_kedua' },
            { label: '2️⃣ Ibu sahaja masih hidup', nextStep: 'est_rightful_b_my_islam_bujang_ibu' },
            { label: '3️⃣ Bapa sahaja masih hidup', nextStep: 'est_rightful_b_my_islam_bujang_bapa' },
            { label: '4️⃣ Ibu dan bapa masih hidup', nextStep: 'est_rightful_b_my_islam_bujang_ibu_dan_bapa' },
        ]
    },
    est_rightful_b_my_islam_bujang_kedua: {
        id: 'est_rightful_b_my_islam_bujang_kedua',
        message: `Adakah simati mempunyai adik beradik?`,
        options: [
            { label: '1️⃣ Telah meninggal sebelum Simati', nextStep: 'sest_rightful_b_my_islam_bujang_kedua_simati' },
            { label: '2️⃣ Adik beradik lelaki dan perempuan', nextStep: 'est_rightful_b_my_islam_bujang_kedua_lelaki_dan_perempuan' },
            { label: '3️⃣ Adik beradik perempuan sahaja', nextStep: 'est_rightful_b_my_islam_bujang_kedua_perempuan' },
            { label: '4️⃣ Adik beradik lelaki sahaja', nextStep: 'est_rightful_b_my_islam_bujang_kedua_lelaki' },
            { label: '5️⃣ Tiada adik beradik', nextStep: 'est_rightful_b_my_islam_bujang_kedua_adik' },
        ]
    },
    sest_rightful_b_my_islam_bujang_kedua_simati: {
        id: 'sest_rightful_b_my_islam_bujang_kedua_simati',
        message: `Harta akan dibahagikan kepada waris lain yang berhak mengikut turutan:\n\n 1. Datuk sebelah bapa\n 2. Anak saudara lelaki dari adik beradik lelaki\n 3. Bapa saudara sebelah\n bapa\n 4. Sepupu lelaki\n 5. Anak sepupu lelaki Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_bujang_kedua_lelaki_dan_perempuan: {
        id: 'est_rightful_b_my_islam_bujang_kedua_lelaki_dan_perempuan',
        message: `Pembahagian adalah seperti berikut:\n\n 1. Adik beradik - Asobah (baki)\n\n *Asobah - Nisbah pembahagian antara adik beradik lelaki dan perempuan adalah 2:1`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_bujang_kedua_perempuan: {
        id: 'est_rightful_b_my_islam_bujang_kedua_perempuan',
        message: `Pembahagian adalah seperti berikut :\n\n 1. Adik beradik -1/2 @ 2/3\n\n *Baki akan dibahagikan kepada waris lain yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Bapa saudara sebelah bapa\n 3. Sepupu lelaki\n 4. Anak sepupu lelaki Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_bujang_kedua_lelaki: {
        id: 'est_rightful_b_my_islam_bujang_kedua_lelaki',
        message: `Pembahagian adalah seperti berikut:\n\n 1. Adik beradik - Asobah (baki)\n\n *Asobah - Nisbah pembahagian adalah secara sama rata.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_bujang_kedua_adik: {
        id: 'est_rightful_b_my_islam_bujang_kedua_adik',
        message: `Harta akan dibahagikan kepada waris lain yang berhak mengikut turutan:\n\n 1. Datuk sebelah bapa\n 2. Bapa saudara sebelah bapa\n 3. Sepupu lelaki\n 4. Anak sepupu lelak  Jika tiada waris, baki akan dibahagikan kepada Baitulmal`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_bujang_ibu: {
        id: 'est_rightful_b_my_islam_bujang_ibu',
        message: `Adakah simati mempunyai adik beradik?`,
        options: [
            { label: '1️⃣ Telah meninggal sebelum Simati', nextStep: 'est_rightful_b_my_islam_bujang_ibu_simati' },
            { label: '2️⃣ Adik beradik lelaki dan perempuan', nextStep: 'est_rightful_b_my_islam_bujang_ibu_lelaki_dan_perempuan' },
            { label: '3️⃣ Adik beradik perempuan sahaja', nextStep: 'est_rightful_b_my_islam_bujang_ibu_perempuan' },
            { label: '4️⃣ Adik beradik lelaki sahaja', nextStep: 'est_rightful_b_my_islam_bujang_ibu_lelaki' },
            { label: '5️⃣ Tiada adik beradik', nextStep: 'est_rightful_b_my_islam_bujang_ibu_adik' },
        ]
    },
    est_rightful_b_my_islam_bujang_ibu_simati: {
        id: 'est_rightful_b_my_islam_bujang_ibu_simati',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/3\n\n *Baki akan dibahagikan kepada waris lain yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Anak saudara lelaki dari adik beradik lelaki\n 3. Bapa saudara sebelah bapa\n 4. Sepupu lelaki\n 5. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_bujang_ibu_lelaki_dan_perempuan: {
        id: 'est_rightful_b_my_islam_bujang_ibu_lelaki_dan_perempuan',
        message: `Pembahagian adalah seperti berikut:\n\n 1. Ibu - 1/3 @ 1/6\n 2. Adik beradik - Asobah (baki)\n\n *Asobah - Nisbah pembahagian antara adik beradik lelaki dan perempuan adalah 2:1`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_bujang_ibu_perempuan: {
        id: 'est_rightful_b_my_islam_bujang_ibu_perempuan',
        message: `Pembahagian adalah seperti berikut :\n\n 1. Ibu - 1/3 @ 1/6\n 2. Adik beradik -1/2 @ 2/3\n\n *Baki harta akan dibahagikan kepada waris lain yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Bapa saudara sebelah bapa\n 3. Sepupu lelaki\n 4. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_bujang_ibu_lelaki: {
        id: 'est_rightful_b_my_islam_bujang_ibu_lelaki',
        message: `Pembahagian adalah seperti berikut:\n\n 1. Ibu - 1/3 @ 1/6\n 2. Adik beradik - Asobah (baki) *Asobah - Nisbah pembahagian adalah secara sama rata.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_bujang_ibu_adik: {
        id: 'est_rightful_b_my_islam_bujang_ibu_adik',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/3\n\n * Baki harta akan dibahagikan kepada waris lain yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Bapa saudara sebelah bapa\n 3. Sepupu lelaki\n 4. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_bujang_bapa: {
        id: 'est_rightful_b_my_islam_bujang_bapa',
        message: `Pembahagian adalah seperti berikut:\n\n 1. Bapa - Asobah (baki).\n\n *Bapa mewarisi keseluruhan harta pusaka Simati`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_bujang_ibu_dan_bapa: {
        id: 'est_rightful_b_my_islam_bujang_ibu_dan_bapa',
        message: `Pembahagian adalah seperti berikut:\n\n 1. Ibu - 1/3 @ 1/6\n 2. Bapa - Asobah (baki).\n\n *Baki akan diberikan kepada bapa.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    establishment_rightful_beneficiaries_my_islam_berkahwin: {
        id: 'establishment_rightful_beneficiaries_my_islam_berkahwin',
        message: `Adakah Simati mempunyai anak?`,
        options: [
            { label: '1️⃣ Tiada anak', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak' },
            { label: '2️⃣ Anak lelaki dan perempuan', nextStep: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan' },
            { label: '3️⃣ Anak lelaki sahaja', nextStep: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan' },
            { label: '4️⃣ Anak perempuan sahaja', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak',
        message: ``,
        options: [
            { label: '1️⃣ Kedua-dua telah meninggal', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau' },
            { label: '2️⃣ Ibu sahaja masih hidup', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu' },
            { label: '3️⃣ Bapa sahaja masih hidup', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_bapa' },
            { label: '4️⃣ Ibu dan bapa masih hidup', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_dan_bapa' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_kedau: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau',
        message: `Adakah pasangan Simati masih hidup ketika kematian Simati?`,
        options: [
            { label: "1️⃣ Ya, masih hidup", nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya' },
            { label: '2️⃣ Tidak telah meninggal', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya',
        message: `Adakah simati mempunyai adik beradik?`,
        options: [
            { label: '1️⃣ Telah meninggal sebelum Simati', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya_simati' },
            { label: '2️⃣ Adik beradik lelaki dan perempuan', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya_lelaki_dan_perempuan' },
            { label: '3️⃣ Adik beradik perempuan sahaja', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya_perempuan' },
            { label: '4️⃣ Adik beradik lelaki sahaja', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya_lelaki' },
            { label: '5️⃣ Tiada adik beradik', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya_adik' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya_simati: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya_simati',
        message: `Pembahagian adalah seperti berikut:\n\n 1. Pasangan - 1/2 (Suami), 1/4 (Isteri)\n\n * Baki akan dibahagikan kepada waris lain yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Anak saudara lelaki dari adik beradik lelaki\n 3. Bapa saudara sebelah bapa\n 4. Sepupu lelaki\n 5. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya_lelaki_dan_perempuan: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya_lelaki_dan_perempuan',
        message: `Pembahagian adalah seperti berikut:\n\n 1. Pasangan - 1/2 (Suami), 1/4 (Isteri)\n 2. Adik beradik seibu - 1/3 @ 1/6 (jika ada)\n 3. Adik beradik kandung @ sebapa - Asobah (baki)\n\n *Asobah - Nisbah pembahagian antara adik beradik lelaki dan perempuan adalah 2:1.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya_perempuan: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya_perempuan',
        message: `Pembahagian adalah seperti berikut:\n\n 1. Pasangan - 1/2 (Suami), 1/4 (Isteri)\n 2. Adik beradik seibu - 1/3 @ 1/6 (jika ada)\n 3. Adik beradik kandung @ sebapa - 1/2 @ 2/3\n\n *Sekiranya masih terdapat baki, ianya akan dibahagikan kepada waris lain yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Bapa saudara sebelah bapa\n 3. Sepupu lelaki\n 4. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya_lelaki: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya_lelaki',
        message: `Pembahagian adalah seperti berikut:\n\n 1. Pasangan - 1/2 (Suami), 1/4 (Isteri)\n 2. Adik beradik seibu - 1/3 @ 1/6 (jika ada)\n 3. Adik beradik kandung @ sebapa - Asobah (baki)\n\n *Asobah - Nisbah pembahagian antara adik beradik lelaki adalah secara sama rata.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya_adik: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_ya_adik',
        message: `Pembahagian adalah seperti berikut:\n\n 1. Pasangan - 1/2 (Suami), 1/4 (Isteri)\n\n *Baki harta akan dibahagikan kepada waris lain yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Bapa saudara sebelah bapa\n 3. Sepupu lelaki\n 4. Anak sepupu lelaki\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak',
        message: `Adakah simati mempunyai adik beradik?`,
        options: [
            { label: '1️⃣ Telah meninggal sebelum Simati', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak_simati' },
            { label: '2️⃣ Adik beradik lelaki dan perempuan', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak_lelaki_dan_perempuan' },
            { label: '3️⃣ Adik beradik perempuan sahaja', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak_perempuan' },
            { label: '4️⃣ Adik beradik lelaki sahaja', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak_lelaki' },
            { label: '5️⃣ Tiada adik beradik', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak_adik' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak_simati: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak_simati',
        message: `Harta akan dibahagikan kepada waris lain yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Anak saudara lelaki dari adik beradik lelaki\n 3. Bapa saudara sebelah bapa\n 4. Sepupu lelaki\n 5. Anak sepupu lelaki\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak_lelaki_dan_perempuan: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak_lelaki_dan_perempuan',
        message: `Pembahagian adalah seperti berikut:\n 1. Adik beradik seibu - 1/3 @ 1/6 (jika ada)\n 2. Adik beradik kandung @ sebapa - Asobah (baki)\n\n * Asobah - Nisbah pembahagian antara adik beradik lelaki dan perempuan adalah 2:1.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak_perempuan: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak_perempuan',
        message: `Pembahagian adalah seperti berikut:\n 1. Adik beradik seibu - 1/3 @ 1/6 (jika ada)\n 2. Adik beradik kandung @ sebapa - 1/2 @ 2/3\n\n * Baki harta akan dibahagikan kepada waris lain yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Bapa saudara sebelah bapa\n 3. Sepupu lelaki\n 4. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak_lelaki: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak_lelaki',
        message: `Pembahagian adalah seperti berikut:\n 1. Adik beradik seibu - 1/3 @ 1/6 (jika ada)\n 2. Adik beradik kandung @ sebapa - Asobah (baki)\n\n * Asobah - Nisbah pembahagian antara adik beradik lelaki adalah secara sama rata.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak_adik: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_kedau_tidak_adik',
        message: `Harta akan dibahagikan kepada waris lain yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Bapa saudara sebelah bapa\n 3. Sepupu lelaki\n 4. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_ibu: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu',
        message: `Adakah pasangan Simati masih hidup ketika kematian Simati?`,
        options: [
            { label: "1️⃣ Ya, masih hidup", nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya' },
            { label: '2️⃣ Tidak telah meninggal', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya',
        message: `Adakah simati mempunyai adik beradik?`,
        options: [
            { label: '1️⃣ Telah meninggal sebelum Simati', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya_simati' },
            { label: '2️⃣ Adik beradik lelaki dan perempuan', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya_lelaki_dan_perempuan' },
            { label: '3️⃣ Adik beradik perempuan sahaja', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya_tidak_perempuan' },
            { label: '4️⃣ Adik beradik lelaki sahaja', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya_lelaki' },
            { label: '5️⃣ Tiada adik beradik', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya_adik' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya_simati: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya_simati',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/3 @ 1/6\n 2. Pasangan - 1/2 (Suami), 1/4 (Isteri)\n\n * Baki akan dibahagikan kepada waris lain yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Anak saudara lelaki dari adik beradik lelaki\n 3. Bapa saudara sebelah bapa\n 4. Sepupu lelaki\n 5. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya_lelaki_dan_perempuan: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya_lelaki_dan_perempuan',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/3 @ 1/6\n 2. Pasangan - 1/2 (Suami), 1/4 (Isteri)\n 3. Adik beradik seibu - 1/3 @ 1/6 (jika ada)\n 4. Adik beradik kandung @ sebapa - Asobah (baki)\n\n *Asobah - Nisbah pembahagian antara adik beradik lelaki dan perempuan adalah 2:1.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya_tidak_perempuan: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya_tidak_perempuan',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/3 @ 1/6\n 2. Pasangan - 1/2 (Suami), 1/4 (Isteri)\n 3. Adik beradik seibu - 1/3 @ 1/6 (jika ada)\n 4. Adik beradik kandung @ sebapa - 1/2 @ 2/3\n\n * Sekiranya terdapat baki. ianya akan dibahagikan kepada waris lain yang berhak mengikut turutan: 1. Datuk sebelah bapa\n 2. Bapa saudara sebelah bapa\n 3. Sepupu lelaki\n 4. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya_lelaki: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya_lelaki',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/3 @ 1/6\n 2. Pasangan - 1/2 (Suami), 1/4 (Isteri)\n 3. Adik beradik seibu - 1/3 @ 1/6 (jika ada)\n 4. Adik beradik kandung @ sebapa - Asobah (baki).\n\n *Asobah - Nisbah pembahagian antara adik beradik lelaki adalah secara sama rata.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya_adik: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_ya_adik',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/3\n 2. Pasangan - 1/2 (Suami),1/4 (Isteri).\n\n Baki akan dibahagikan kepada waris lain yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Bapa saudara sebelah bapa\n 3. Sepupu lelaki\n 4. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak',
        message: `Adakah simati mempunyai adik beradik?`,
        options: [
            { label: '1️⃣ Telah meninggal sebelum Simati', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak_simati' },
            { label: '2️⃣ Adik beradik lelaki dan perempuan', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak_lelaki_dan_perempuan' },
            { label: '3️⃣ Adik beradik perempuan sahaja', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak_tidak_perempuan' },
            { label: '4️⃣ Adik beradik lelaki sahaja', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak_lelaki' },
            { label: '5️⃣ Tiada adik beradik', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak_adik' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak_simati: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak_simati',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/3 @ 1/6 * Baki harta akan dibahagikan kepada waris lain yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Anak saudara lelaki dari adik beradik lelaki\n 3. Bapa saudara sebelah bapa\n 4. Sepupu lelaki\n 5. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak_lelaki_dan_perempuan: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak_lelaki_dan_perempuan',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/3 @ 1/6\n 2. Adik beradik seibu - 1/3 @ 1/6 (jika ada)\n 3. Adik beradik kandung @ sebapa - Asobah (baki).\n\n * Asobah - Nisbah pembahagian antara adik beradik lelaki dan perempuan adalah 2:1.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak_tidak_perempuan: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak_tidak_perempuan',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/3 @ 1/6\n 2. Adik beradik seibu - 1/3 @ 1/6 (jika ada)\n 3. Adik beradik kandung @ sebapa - 1/2 @ 2/3\n\n * Sekiranya terdapat baki, ianya akan dibahagikan kepada waris lain yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Bapa saudara sebelah bapa\n 3. Sepupu lelaki\n 4. Anak sepupu lelaki.\n]n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak_lelaki: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak_lelaki',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/3 @ 1/6\n 2. Adik beradik seibu - 1/ 3 @ 1/6 (jika ada)\n 3. Adik beradik kandung @ sebapa - Asobah (baki).\n\n * Asobah - Nisbah pembahagian antara adik beradik lelaki adalah secara sama rata`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak_adik: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_tidak_adik',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/3\n\n *Baki harta akan dibahagikan kepada waris lain yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Bapa saudara sebelah bapa\n 3. Sepupu lelaki\n 4. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_bapa: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_bapa',
        message: `Adakah pasangan Simati masih hidup ketika kematian Simati?`,
        options: [
            { label: "1️⃣ Ya, masih hidup", nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_bapa_ya' },
            { label: '2️⃣ Tidak telah meninggal', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_bapa_tidak' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_bapa_ya: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_bapa_ya',
        message: `Pembahagian adalah seperti berikut:\n 1. Bapa - Asobah\n 2. Pasangan - 1/2 (Suami), 1/4 (Isteri)`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_bapa_tidak: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_bapa_tidak',
        message: `Pembahagian adalah seperti berikut:\n 1. Bapa - Asobah\n\n * Bapa mewarisi keseluruhan harta Simati.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_dan_bapa: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_dan_bapa',
        message: `Adakah pasangan Simati masih hidup ketika kematian Simati?`,
        options: [
            { label: "1️⃣ Ya, masih hidup", nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_dan_bapa_ya' },
            { label: '2️⃣ Tidak telah meninggal', nextStep: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_dan_bapa_tidak' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_dan_bapa_ya: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_dan_bapa_ya',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/3 baki @ 1/6\n 2. Bapa - Asobah 3. Pasangan - 1/2 (Suami), 1/4 (Isteri)`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_dan_bapa_tidak: {
        id: 'est_rightful_b_my_islam_berkahwin_tiada_anak_ibu_dan_bapa_tidak',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/3 @ 1/6\n 2. Bapa - Asobah\n\n * Bapa mewarisi keseluruhan harta Simati.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan: {
        id: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan',
        message: `Adakah ibubapa Simati masih hidup ketik kematian Simati?`,
        options: [
            { label: '1️⃣ Ibu / bapa sahaja masih hidup', nextStep: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_bapa' },
            { label: '2️⃣ Ibu dan bapa masih hidup', nextStep: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_dan_bapa' },
            { label: '3️⃣ Kedua-dua Telah meninggal', nextStep: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_meninggal' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_bapa: {
        id: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_bapa',
        message: `Adakah pasangan Simati masih hidup ketika kematian Simati?`,
        options: [
            { label: "1️⃣ Ya, masih hidup", nextStep: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_bapa_ya' },
            { label: '2️⃣ Tidak telah meninggal', nextStep: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_bapa_tidak' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_bapa_ya: {
        id: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_bapa_ya',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu @ bapa - 1/6 2. Pasangan - 1/4 (Suami), 1/8 (Isteri)\n 3. Anak - Asobah\n\n * Nisbah pembahagian antara anak lelaki dan perempuan adalah 2:1.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_bapa_tidak: {
        id: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_bapa_tidak',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu @ bapa - 1/6\n 2. Anak - Asobah\n\n * Nisbah pembahagian antara anak lelaki dan perempuan adalah 2:1.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_dan_bapa: {
        id: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_dan_bapa',
        message: `Adakah pasangan Simati masih hidup ketika kematian Simati?`,
        options: [
            { label: "1️⃣ Ya, masih hidup", nextStep: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_dan_bapa_ya' },
            { label: '2️⃣ Tidak telah meninggal', nextStep: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_dan_bapa_tidak' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_dan_bapa_ya: {
        id: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_dan_bapa_ya',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/6\n 2. Bapa - 1/6\n 3. Pasangan - 1/4 (Suami), 1/8 (Isteri)\n 4. Anak - Asobah\n\n * Nisbah pembahagian antara anak lelaki dan perem`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_dan_bapa_tidak: {
        id: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_ibu_dan_bapa_tidak',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/6\n 2. Bapa - 1/6\n 3. Anak - Asobah\n\n * Nisbah pembahagian antara anak lelaki dan perempuan adalah 2:1.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_meninggal: {
        id: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_meninggal',
        message: `Adakah pasangan Simati masih hidup ketika kematian Simati?`,
        options: [
            { label: "1️⃣ Ya, masih hidup", nextStep: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_meninggal_ya' },
            { label: '2️⃣ Tidak telah meninggal', nextStep: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_meninggal_tidak' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_meninggal_ya: {
        id: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_meninggal_ya',
        message: `Pembahagian adalah seperti berikut:\n 1. Pasangan - 1/4 (Suami), 1/8 (Isteri)\n 2. Anak - Asobah\n\n * Nisbah pembahagian antara anak lelaki dan perempuan adalah 2:1.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_meninggal_tidak: {
        id: 'est_rightful_b_my_islam_berkahwin_lelaki_dan_perempuan_meninggal_tidak',
        message: `Pembahagian adalah seperti berikut:\n 1. Anak - Asobah\n\n * Nisbah pembahagian antara anak lelaki dan perempuan adalah 2:1.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan',
        message: `Adakah ibubapa Simati masih hidup ketika kematian Simati?`,
        options: [
            { label: '1️⃣ Kedua-dua telah meninggal', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau' },
            { label: '2️⃣ Ibu sahaja masih hidup', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu' },
            { label: '3️⃣ Bapa sahaja masih hidup', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_bapa' },
            { label: '4️⃣ Ibu dan bapa masih hidup', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_dan_bapa' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_ibu: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu',
        message: `Adakah pasangan Simati masih hidup ketika kematian Simati?`,
        options: [
            { label: "1️⃣ Ya, masih hidup", nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_ya' },
            { label: '2️⃣ Tidak telah meninggal', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_tidak' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_ibu_ya: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_ya',
        message: `Adakah ibubapa Simati masih hidup ketika kematian Simati?`,
        options: [
            { label: '1️⃣ Ya, masih hidup', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_ya_masih' },
            { label: '2️⃣ Telah meninggal sebelum Simati', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_ya_simati' },
            { label: '3️⃣ Tidak, Simati adalah anak tunggal', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_ya_tunggal' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_ibu_ya_masih: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_ya_masih',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/6\n 2. Pasangan - 1/4 (Suami), 1/8 (Isteri)\n 3. Anak - 1/2 @ 2/3\n 4. Adik beradik - Asobah\n\n * Adik beradik adalah merujuk kepada adik beradik kandung @ sebapa sahaja dan hanya akan menerima sekiranya masih mempunyai baki. Adik beradik seibu tidak mewarisi dalam situasi ini.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_ibu_ya_simati: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_ya_simati',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/6\n 2. Pasangan - 1/4 (Suami), 1/8 (Isteri)\n 3. Anak - 1/2 @ 2/3\n\n *Sekiranya masih mempunyai baki, ianya akan dibahagikan kepada waris yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Anak saudara lelaki dari adik beradik lelaki\n 3. Bapa saudara sebelah bapa\n 4. Sepupu lelaki\n 5. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_ibu_ya_tunggal: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_ya_tunggal',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/6\n 2. Pasangan - 1/4 (Suami), 1/8 (Isteri) 3. Anak - 1/2 @ 2/3\n\n *Sekiranya masih mempunyai baki, ianya akan dibahagikan kepada waris yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Bapa saudara sebelah bapa\n 3. Sepupu lelaki\n 4. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_ibu_tidak: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_tidak',
        message: `Adakah ibubapa Simati masih hidup ketika kematian Simati?`,
        options: [
            { label: '1️⃣ Ya, masih hidup', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_tidak_masih' },
            { label: '2️⃣ Telah meninggal sebelum Simati', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_tidak_simati' },
            { label: '3️⃣ Tidak, Simati adalah anak tunggal', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_tidak_tunggal' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_ibu_tidak_masih: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_tidak_masih',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/6\n 2. Anak - 1/2 @ 2/3\n 3. Adik beradik - Asobah\n\n * Adik beradik adalah merujuk kepada adik beradik kandung @ sebapa sahaja. Adik beradik seibu tidak mewarisi dalam situasi ini.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_ibu_tidak_simati: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_tidak_simati',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/6\n 2. Anak - 1/2 @ 2/3\n\n *Baki harta akan dibahagikan kepada waris yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Anak saudara lelaki dari adik beradik lelaki\n 3. Bapa saudara sebelah bapa\n 4. Sepupu lelaki\n 5. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_ibu_tidak_tunggal: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_tidak_tunggal',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/6\n 2. Anak - 1/2 @ 2/3\n\n *Baki harta akan dibahagikan kepada waris yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Bapa saudara sebelah bapa\n 3. Sepupu lelaki\n 4. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_bapa: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_bapa',
        message: `Adakah pasangan Simati masih hidup ketika kematian Simati?`,
        options: [
            { label: "1️⃣ Ya, masih hidup", nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_bapa_ya' },
            { label: '2️⃣ Tidak telah meninggal', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_bapa_tidak' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_bapa_ya: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_bapa_ya',
        message: `Pembahagian adalah seperti berikut:\n 1. Bapa - 1/6 + Asobah\n 2. Pasangan - 1/4 (Suami), 1/8 (Isteri)\n 3. Anak - 1/2 @ 2/3`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_bapa_tidak: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_bapa_tidak',
        message: `Pembahagian adalah seperti berikut:\n 1. Bapa - 1/6 + Asobah\n 2. Anak - 1/2 @ 2/3`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_ibu_dan_bapa: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_dan_bapa',
        message: `Adakah pasangan Simati masih hidup ketika kematian Simati?`,
        options: [
            { label: "1️⃣ Ya, masih hidup", nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_dan_bapa_ya' },
            { label: '2️⃣ Tidak telah meninggal', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_dan_bapa_tidak' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_ibu_dan_bapa_ya: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_dan_bapa_ya',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/6\n 2. Bapa - 1/6 + Asobah\n 3. Pasangan - 1/4 (Suami), 1/8 (Isteri)\n 4. Anak - 1/2 @ 2/3`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_ibu_dan_bapa_tidak: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_ibu_dan_bapa_tidak',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu - 1/6\n 2. Bapa - 1/6 + Asobah\n 3. Anak - 1/2 @ 23`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_kedau: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau',
        message: `Adakah pasangan Simati masih hidup ketika kematian Simati?`,
        options: [
            { label: "1️⃣ Ya, masih hidup", nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau_ya' },
            { label: '2️⃣ Tidak telah meninggal', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau_tidak' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_kedau_ya: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau_ya',
        message: `Adakah ibubapa Simati masih hidup ketika kematian Simati?`,
        options: [
            { label: '1️⃣ Ya, masih hidup', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau_ya_masih' },
            { label: '2️⃣ Telah meninggal sebelum Simati', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau_ya_simati' },
            { label: '3️⃣ Tidak, Simati adalah anak tunggal', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau_ya_tunggal' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_kedau_ya_masih: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau_ya_masih',
        message: `Pembahagian adalah seperti berikut:\n 1. Pasangan - 1/4 (Suami), 1/8 (Isteri)\n 2. Anak - 1/2 @ 2/3\n 3. Adik beradik - Asobah\n\n * Adik beradik adalah merujuk kepada adik beradik kandung @ sebapa sahaja. Adik beradik seibu tidak mewarisi dalam situasi ini.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_kedau_ya_simati: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau_ya_simati',
        message: `Pembahagian adalah seperti berikut:\n 1. Pasangan - 1/4 (Suami), 1/8 (Isteri)\n 2. Anak - 1/2 @ 2/3\n\n *Baki harta akan dibahagikan kepada waris yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Anak saudara lelaki dari adik beradik lelaki\n 3. Bapa saudara sebelah bapa\n 4. Sepupu lelaki\n 5. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_kedau_ya_tunggal: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau_ya_tunggal',
        message: `Pembahagian adalah seperti berikut:\n 1. Pasangan - 1/4 (Suami), 1/8 (Isteri)\n 2. Anak - 1/2 @ 2/3\n\n *Baki harta akan dibahagikan kepada waris yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Bapa saudara sebelah bapa\n 3. Sepupu lelaki\n 4. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_kedau_tidak: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau_tidak',
        message: `Adakah ibubapa Simati masih hidup ketika kematian Simati?`,
        options: [
            { label: '1️⃣ Ya, masih hidup', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau_tidak_masih' },
            { label: '2️⃣ Telah meninggal sebelum Simati', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau_tidak_simati' },
            { label: '3️⃣ Tidak, Simati adalah anak tunggal', nextStep: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau_tidak_tunggal' },
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_kedau_tidak_masih: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau_tidak_masih',
        message: `Pembahagian adalah seperti berikut:\n 1. Anak - 1/2 @ 2/3\n 2. Adik beradik - Asobah\n\n * Adik beradik adalah merujuk kepada adik beradik kandung @ sebapa sahaja. Adik beradik seibu tidak mewarisi dalam situasi ini.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_kedau_tidak_simati: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau_tidak_simati',
        message: `Pembahagian adalah seperti berikut:\n 1. Anak - 1/2 @ 2/3\n\n *Baki harta akan dibahagikan kepada waris yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Anak saudara lelaki dari adik beradik lelaki\n 3. Bapa saudara sebelah bapa\n 4. Sepupu lelaki\n 5. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    est_rightful_b_my_islam_berkahwin_perempuan_kedau_tidak_tunggal: {
        id: 'est_rightful_b_my_islam_berkahwin_perempuan_kedau_tidak_tunggal',
        message: `Pembahagian adalah seperti berikut:\n 1. Anak - 1/2 @ 2/3\n\n *Baki harta akan dibahagikan kepada waris yang berhak mengikut turutan:\n 1. Datuk sebelah bapa\n 2. Bapa saudara sebelah bapa\n 3. Sepupu lelaki\n 4. Anak sepupu lelaki.\n\n Jika tiada waris, baki akan dibahagikan kepada Baitulmal.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    establishment_rightful_beneficiaries_my_bukan_islam: {
        id: 'establishment_rightful_beneficiaries_my_bukan_islam',
        message: `Bagi Simati bukan islam, sekiranya Simati tidak meninggalkan wasiat, pentadbiran harta pusaka adalah mengikut Akta Pembahagian 1958 selepas ditolak hutang (jika ada)\n\n Maklumat penentuan waris di bawah hanya terpakai untuk kes biasa, contohnya waris seperti pasangan atau anak masih hidup. Tidak termasuk kes kematian berlapis, contohnya waris seperti anak telah meninggal dunia selepas Simati.\n\n Sepanjang pengetahuan **{name}**, apakah status perkahwinan simati?`,
        options: [
            { label: '1️⃣ Bujang', nextStep: 'establishment_rightful_beneficiaries_my_bukan_islam_bujang' },
            { label: '2️⃣ Berkahwin', nextStep: 'establishment_rightful_beneficiaries_my_bukan_islam_berkahwin' },
        ]
    },
    establishment_rightful_beneficiaries_my_bukan_islam_bujang: {
        id: 'establishment_rightful_beneficiaries_my_bukan_islam_bujang',
        message: ``,
        options: [
            { label: '1️⃣ Ibu dan/atau bapa masih hidup', nextStep: 'establishment_rightful_beneficiaries_my_bukan_islam_bujang_ibu' },
            { label: '2️⃣ Kedua-dua telah meninggal', nextStep: 'establishment_rightful_beneficiaries_my_bukan_islam_bujang_meninggal' },
        ]
    },
    establishment_rightful_beneficiaries_my_bukan_islam_bujang_ibu: {
        id: 'establishment_rightful_beneficiaries_my_bukan_islam_bujang_ibu',
        message: `1. Ibu dan bapa masih hidup - Pembahagian adalah secara sama rata\n\n 2. Ibu atau bapa masih hidup - Waris yang masih hidup mewarisi keseluruhan harta Simati`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    establishment_rightful_beneficiaries_my_bukan_islam_bujang_meninggal: {
        id: 'establishment_rightful_beneficiaries_my_bukan_islam_bujang_meninggal',
        message: `Adakah Simati mempunyai adik beradik?`,
        options: [
            { label: '1️⃣ Ya, masih hidup', nextStep: 'establishment_rightful_beneficiaries_my_bukan_islam_bujang_meninggal_masih' },
            { label: '2️⃣ Ya, tetapi telah meninggal dunia sebelum Simati', nextStep: 'establishment_rightful_beneficiaries_my_bukan_islam_bujang_meninggal_simati' },
            { label: '3️⃣ Tidak, Simati adalah anak tunggal', nextStep: 'establishment_rightful_beneficiaries_my_bukan_islam_bujang_meninggal_simati' },
        ]
    },
    establishment_rightful_beneficiaries_my_bukan_islam_bujang_meninggal_masih: {
        id: 'establishment_rightful_beneficiaries_my_bukan_islam_bujang_meninggal_masih',
        message: `Adik beradik Simati akan mewarisi keseluruhan harta Simati. Jika melebihi dari seorang, pembahagian adalah secara sama rata.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    establishment_rightful_beneficiaries_my_bukan_islam_bujang_meninggal_simati: {
        id: 'establishment_rightful_beneficiaries_my_bukan_islam_bujang_meninggal_simati',
        message: `Jika Simati masih mempunyai waris di bawah yang masih hidup ketika kematian Simati, waris tersebut layak menerima harta pusaka Simati (mengikut turutan).\n 1. Datuk / Nenek\n 2. Bapa / ibu saudara\n 3. Moyang lelaki / perempuan\n 4. Datuk / Nenek saudara\n\n Namun, jika Simati juga tidak mempunyai waris di atas, harta pusaka Simati akan diberikan kepada Kerajaan (Bona Vacantia).`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    establishment_rightful_beneficiaries_my_bukan_islam_berkahwin: {
        id: 'establishment_rightful_beneficiaries_my_bukan_islam_berkahwin',
        message: `Siapakah waris Simati yang masih hidup ketika kematian simati?`,
        options: [
            { label: '1️⃣ Ibubapa, pasangan dan anak', nextStep: 'establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_ibubapa' },
            { label: '2️⃣ Pasangan dan anak sahaja', nextStep: 'establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_pasangan' },
            { label: '3️⃣ Ibubapa dan anak sahaja', nextStep: 'establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_ibubapa_dan_anak' },
            { label: '4️⃣ Pasangan dan ibubapa sahaja)', nextStep: 'establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_pasangan_dan_ibubapa' },
            { label: '5️⃣ Anak / Pasangan / Ibubapa sahaja', nextStep: 'establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_a_p_i' },
            { label: '6️⃣ Adik beradik sahaja', nextStep: 'establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_beradik' },
            { label: '7️⃣ Semua waris telah meninggal', nextStep: 'establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_waris' },
        ]
    },
    establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_ibubapa: {
        id: 'establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_ibubapa',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu dan/atau bapa : 1/4\n 2. Pasangan : 1/4\n 3. Anak : 2/4`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_pasangan: {
        id: 'establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_pasangan',
        message: `Pembahagian adalah seperti berikut:\n 1. Pasangan : 1/3\n 2. Anak : 2/3`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_ibubapa_dan_anak: {
        id: 'establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_ibubapa_dan_anak',
        message: `Pembahagian adalah seperti berikut:\n 1. Ibu dan/atau bapa : 1/3\n 2. Anak : 2/3`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_pasangan_dan_ibubapa: {
        id: 'establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_pasangan_dan_ibubapa',
        message: `Pembahagian adalah seperti berikut:\n 1. Pasangan : 1/2\n 2. Ibu dan/atau bapa : 1/2`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_a_p_i: {
        id: 'eestablishment_rightful_beneficiaries_my_bukan_islam_berkahwin_a_p_i',
        message: `Waris yang masih hidup akan menerima keseluruhan harta Simati.\n\n Jika melebihi dari seorang, pembahagian adalah secara sama rata.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_beradik: {
        id: 'establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_beradik',
        message: `Jika tiada ibubapa, pasangan dan anak, adik beradik Simati akan mewarisi keseluruhan harta Simati.\n\n Jika adik beradik melebihi dari seorang, pembahagian adalah secara sama rata.`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
    establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_waris: {
        id: 'establishment_rightful_beneficiaries_my_bukan_islam_berkahwin_waris',
        message: `Jika Simati masih mempunyai waris di bawah yang masih hidup ketika kematian Simati, waris tersebut layak menerima harta pusaka Simati (mengikut turutan).\n\n 1. Datuk / Nenek\n 2. Bapa / ibu saudara\n 3. Moyang lelaki / perempuan\n 4. Datuk / Nenek saudara\n\n Namun, jika Simati juga tidak mempunyai waris di atas, harta pusaka Simati akan diberikan kepada Kerajaan (Bona Vacantia).`,
        options: [
            { label: '1️⃣ Itu sahaja. Kembali Terima kasih', nextStep: 'exit_my' }
        ]
    },
}

