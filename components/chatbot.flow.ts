import { BotFlow } from '../models/chatbot';

export const chatbotFlow: BotFlow = {
    start: {
        id: 'start',
        message: 'Hi, I’m ARIA. May I know your name?',
        options: [],
    },
    greet: {
        id: 'greet',
        message: '{name}, are you more comfortable communicating in Bahasa Malaysia or English?',
        options: [
            { label: '1️⃣ Bahasa Malaysia', nextStep: 'malayu' },
            { label: '2️⃣ English', nextStep: 'english_main' },
        ],
    },
    english_main: {
        id: 'english_main',
        message: 'Is {name} our existing customer?',
        options: [
            { label: '1️⃣ No, I would like to make an inquiry', nextStep: 'no_page1' },
            { label: '2️⃣ Yes, I already have a registered file with ARB.', nextStep: 'yes_page1' },
            { label: '3️⃣ I would like to know about promotion', nextStep: 'i_would_like' },
        ]
    },
    no_page1: {
        id: 'no_page1',
        message: 'What can ARIA assist {name} with?',
        options: [
            { label: "1️⃣ I would like to administer the deceased's estate", nextStep: 'pusaka' },
            { label: '2️⃣ I would like to allocate my assets according to my wishes', nextStep: 'allocate_page1' },
            { label: "3️⃣ I would like to pay the beneficiary's /deceased's share to ARB", nextStep: 'pay_page1' },
            { label: "4️⃣ I would like to retrieve my unclaimed portion at ARB", nextStep: 'retrieve_page1' },
            { label: "5️⃣ I have an order from the Land Office / High Court", nextStep: 'order_page1' },
            { label: "6️⃣ I would like to know about the establishment of rightful beneficiaries", nextStep: 'establishment_page1' }

        ]
    },
    // these below steps are belong to page 1
    pusaka: {
        id: 'pusaka',
        message: `May ARIA know what {name} would like to inquire about?`,
        options: [
            { label: '1️⃣ Estate application for vehicles only', nextStep: 'estate_application_vehicle' },
            { label: '2️⃣ Estate application', nextStep: 'estate_application' },
            { label: '3️⃣ General inquiry', nextStep: 'general_inquiry' }, // this needs to discuss with Sanjay
            { label: '4️⃣ Obtain form', nextStep: 'obtain_form' }
        ]
    },
    i_would_like: {
        id: 'i_would_like',
        message: `<a href="d/1fw8S2Mvia-Lc4-U7KMtzhxEDEPF-teXV/view?usp=sharing" target="_blank">Promotion</a>`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    allocate_page1: {
        id: 'allocate_page1',
        message: 'Does {name} intend to give it as a trust, hibah or will wasiat?',
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
                label: '2️⃣ Trust', nextStep: 'Trust'
            },
        ]
    },
    after_death: {
        id: 'after_death',
        message: 'Please choose',
        options: [
            {
                label: '1️⃣ will', nextStep: 'will'
            },
            {
                label: '2️⃣ Trust', nextStep: 'hibah_ku'
            },
        ]
    },
    pay_page1: {
        id: 'pay_page1',
        message: `Whose share does {name} intend to pay for?`,
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
        message: `Please attach the following documents:<br><br>
                    1. 1 copy of the Deceased's Death Certificate<br>
                    2. 1 copy of the Guardian's Identity Card<br>
                    3. 1 copy of the Identity Card and Birth Certificate of the minor / disabled beneficiary (OKU)<br>
                    4. Original order from the High Court / Land Office appointing ARB as trustee for the minor / disabled beneficiary (OKU)<br><br>
                    
                    Please visit any of our nearest branch counters to make the payment by bringing along the required documents.<br>
                    Payment can be made by cash (limited to RM5,000), cheque, debit/credit card, or online transfer.<br><br>
                    
                    <strong>{name}</strong> may schedule an appointment at:
                    <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">
                    Schedule Appointment
                    </a><br>
                    Branch information can be found at: <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a>`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: 'exit' },
        ]
    },
    untraceable: {
        id: 'untraceable',
        message: `Please attach the following documents:<br>
                    1. 1 copy of the Deceased’s Death
                    Certificate.<br>
                    2. 1 copy of the Identity Card of the
                    heir who is untraceable /
                    uncooperative.<br>
                    3. Letter / Order from the High
                    Court / Land Office instructing
                    payment to be made to ARB.<br>
                    Please visit any of our nearest branch counters to make the payment by bringing along the required documents.<br>
                    Payment can be made by cash (limited to RM5,000), cheque, debit/credit card, or online transfer.<br><br>
                    
                    <strong>{name}</strong> may schedule an appointment at:
                    <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">
                    Schedule Appointment
                    </a><br>
                    Branch information can be found at: <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a>`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: 'exit' },
        ]
    },
    compensation: {
        id: 'compensation',
        message: `Please attach the following documents:<br>
                    1. 1 copy of the Deceased’s Death Certificate<br>
                    2. 1 copy of Form G and H (Notice of Award and Compensation Offer).<br>
                    Please submit the above documents to the email address
                    crmd@arb.com.my. Payment information will be provided
                    once the documents are received by {name}.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: 'exit' },
        ]
    },
    other_than_compensation: {
        id: 'other_than_compensation',
        message: `Please attach the following documents:<br>
                    1. 1 copy of the Deceased’s Death Certificate<br>
                    2. Payment notification letter regarding the Deceased’s share to ARB<br>
                    Please submit the above documents to the email address
                    crmd@arb.com.my. Payment information will be provided
                    once the documents are received by {name}.`,
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
        message: `Thanks {name}. Now please provide your NRIC.`,
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
        message: `{name}, thank you. You will be contacted on the next working day.`,
        options: [{
            label: 'Thank you. Feel free to return anytime!', nextStep: ''
        }],
    },
    order_page1: {
        id: 'order_page1',
        message: 'What is the order about?',
        options: [
            {
                label: `1️⃣ ARB will act as
                    Trustee for the
                    minor/OKU (person
                    with disabilities)
                    beneficiary.`,
                nextStep: 'order_page1_details'
            },
            {
                label: `2️⃣ ARB is appointed as
                        the Trustee for
                        untraceable /
                        uncooperative
                        beneficiary`,
                nextStep: 'order_page1_details'
            }
        ]
    },
    order_page1_details: {
        id: 'order_page1_details',
        message: `Please provide the following documents:<br>
                1. 1 copy of the deceased’s Death Certificate.<br>
                2. 1 copy of the guardian’s Identification Card.<br>
                3. Copies of the Identification Card and Birth
                Certificate of the minor heir / person with
                disabilities (OKU).<br>
                4. Original order from the High Court / Land
                Office appointing ARB as the Trustee for the
                minor / OKU / untraceable /uncooperative beneficiary.<br>
                Please visit any of our nearest branch counters with the required documents.
                {name} may also schedule an appointment at:
                <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Appointment Form</a><br>
                You can find the nearest AmanahRaya branch here: 
                <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information </a>`,
        options: [
            {
                label: 'Thank you. Feel free to return anytime!', nextStep: ''
            }
        ]
    },
    yes_page1: {
        id: 'yes_page1',
        message: `
            Great! {Name}, you are a valued customer to us.<br>
            Please state your existing product with us.
            `,
        options: [
            { label: '1️⃣ Estate', nextStep: 'pusaka_estate' },
            { label: '2️⃣ Will', nextStep: 'will_page1' },
            { label: '3️⃣ Trust', nextStep: 'trust_page1' },
            { label: '4️⃣ Hibah', nextStep: 'retrieve_page1' },
            { label: '5️⃣ HibahKu', nextStep: 'retrieve_page1' },
        ]
    },
    // these below steps are belong to Pusaka
    estate_application_vehicle: {
        id: 'estate_application_vehicle',
        message: `The estate administration for this vehicle only applies to
                administration in Peninsular Malaysia. For administration in
                Sarawak or Sabah, (name) may click the estate application option
                above.<br>
                For your information, estate administration is required for the
                transfer of ownership of the deceased’s vehicle. A Letter of
                Administration will be issued for this process.<br><br>
                To {name}’s knowledge, has the deceased’s estate ever
                been administered before?`,
        options: [
            { label: '1️⃣ No, it has never been done before', nextStep: 'estate_no_1' },
            { label: '2️⃣ Yes, it has been done before', nextStep: 'estate_yes' }
        ]
    },

    estate_no_1: {
        id: 'estate_no_1',
        message: `Is there any remaining
                    loan on the deceased’s
                    vehicle?`,
        options: [
            { label: '1️⃣ No', nextStep: 'estate_no' },
            { label: '2️⃣ Yes', nextStep: 'estate_yes_1' }
        ]
    },
    estate_no: {
        id: 'estate_no',
        message: `The estate administration procedure can only be applied under
                the following conditions:<br>
                1. Land vehicles only.<br>
                2. Fully settled (no outstanding loan).<br>
                3. Total vehicle value must not exceed RM10,000.<br>
                4. Does not involve uncooperated / untraceable beneficiary.<br>
                5. Does not involve Baitulmal (for Muslims only).<br>
                Does the deceased’s vehicle meet the stated criteria?`,
        options: [
            { label: '1️⃣ No', nextStep: 'estate_no_no' },
            { label: '2️⃣ Yes', nextStep: 'estate_no_yes' }
        ]
    },
    estate_no_no: {
        id: 'estate_no_no',
        message: `1. DECEASED (SIMATI)<br>
                    a. Original Death Certificate of the deceased & 1 copy.<br>
                    b. 1 copy of the Deceased’s Birth Certificate.<br>
                    c. Original Will of the deceased & 1 copy.<br>
                    d. 1 copy of Marriage/Divorce Certificate (if the deceased was
                    married/divorced).<br><br>
                    2. DECEASED'S BENEFICIARIES<br>
                    a. 1 copy of the Identity Card and Birth Certificate of the
                    beneficiaries.<br>
                    b. 1 copy of Death Certificate (for any beneficiary who passed
                    away before/after the deceased).<br><br>
                    3. STATUTORY DECLARATION (PROVIDE ONLY IF RELEVANT)<br>
                    To be signed by an independent witness in front of a
                    Commissioner for Oaths and stamped via the Inland
                    Revenue Board (LHDN) website. A copy of the witness’s
                    identity card must be included.<br>
                    a. Statutory Declaration of Single Status (if the deceased was
                    unmarried).<br>
                    b. Statutory Declaration of No Children (if the deceased had
                    no children).<br>
                    c. Statutory Declaration of Sole Beneficiary (if there is only
                    one surviving beneficiary).<br><br>
                    4. MOVABLE PROPERTY – VEHICLE
                    a. New Grant – 1 copy of the vehicle grant (front page only)
                    * Must include e-ownership search / proof of loan settlement
                    / proof of cash purchase.<br>
                    b. Old Grant – 1 copy of the vehicle grant (front and back)
                    * If ownership is still under claim and loan has been settled,
                    include e-ownership search / proof of loan settlement.<br><br>
                    5. MINIMUM DEPOSIT<br>
                    RM50<br><br>
                    6. ADMINISTRATION PERIOD<br>
                    4 months from the date of file opening<br><br>
                    7. RELATED FORMS<br>
                    a. Application Form For Estate Administration.<br>
                    b. Document Checklist to be Attached.<br>
                    c. Statutory Declaration (Married / Divorced / No Children /
                    Sole Beneficiary / Single).<br>
                    d. Sample – Estate Administration Application Form.<br>
                    e. Sample – Statutory Declaration (Married / Divorced / No
                    Children / Sole Beneficiary / Single).<br><br>
                    An administration fee will be charged for the administration of
                    the estate, as follows:<br>
                    5% on the first RM25,000.<br>
                    4% on the next RM225,000.<br>
                    3% on the next RM250,000.<br>
                    2% on the next RM500,000.<br>
                    1% on the remaining balance.<br><br>
                    The completed form along with the required
                    documents can be submitted to any of our
                    nearest branches for the estate file opening
                    process. {name} may schedule an appointment at
                    <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Appointment Form</a>`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }

        ]
    },
    estate_no_yes: {
        id: 'estate_no_yes',
        message: `1. DECEASED (SIMATI)<br>
                a. Original Death Certificate & 1 copy.<br>
                b. 1 copy of the Deceased’s Birth Certificate (required if the
                beneficiary is a parent or sibling).<br><br>
                2. BENEFICIARY'S REPRESENTATIVE<br>
                a. 1 copy of Identity Card / Passport.<br>
                b. 1 copy of supporting document proving relationship to the
                deceased.<br>
                i. Birth Certificate (if the beneficiary is a child or sibling).<br>
                ii. Marriage Certificate (if the beneficiary is a spouse).<br><br>
                3. BUYER (IF THE VEHICLE IS BEING TRANSFERRED TO A BUYER)<br>
                a. 1 copy of Identity Card / Passport.<br>
                b. Proof of vehicle purchase<br><br>
                4. MOVABLE PROPERTY – VEHICLE<br>
                a. New Grant – 1 copy of the vehicle grant (front only)
                * Must include vehicle e-ownership search / proof of loan
                settlement / proof of cash purchase.<br>
                b. Old Grant – 1 copy of the vehicle grant (front and back)
                * If ownership is still under claim and the loan has been
                settled, include e-ownership search / proof of loan
                settlement.<br><br>
                5. MINIMUM DEPOSIT<br>
                RM50<br<br>
                6. ADMINISTRATION PERIOD<br>
                30 days from the date of file opening and all completed
                documents sumbitted<br><br>
                7. RELATED FORMS<br>
                a. Application Form For Estate Administration.<br>
                b. Document Checklist to be Attached.<br>
                c. Statutory Declaration of Vehicle Ownership Transfer.<br>
                d. Sample – Estate Administration Application Form.<br>
                e. Sample – Statutory Declaration of Vehicle Ownership Transfer.<br><br>
                An administration fee will be charged for the administration of
                this estate:<br>
                a. For total value of RM3,000 and below : RM50.<br>
                b. For total value between RM3,000.01 and
                RM5,000 : RM150.<br>
                c. For total value between RM5,000.01 and
                RM10,000 : 5.00% of the vehicle's value.<br><br>
                The completed form along with the required
                documents can be submitted to any of our
                nearest branches for the estate file opening
                process. {name} may schedule an appointment at
                <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Appointment Form</a>`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    estate_yes_1: {
        id: 'estate_yes_1',
        message: `For vehicles with an outstanding loan, the beneficiary must
                first settle the loan before the ownership transfer process
                can be carried out.<br><br>
                Below are some of the methods that can be used to settle
                the deceased’s vehicle loan:<br>
                a. Make a lump sum payment to the financial institution.<br>
                b. Make monthly instalment payments until the loan is
                fully settled.<br>
                c. Apply for refinancing to settle the deceased’s
                outstanding vehicle loan.<br><br>
                Is there anything
                else ARIA can
                assist you with?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: '' }
        ]
    },
    estate_yes: {
        id: 'estate_yes',
        message: `May ARIA know where the
                previous estate administration
                was carried out?`,
        options: [
            { label: '1️⃣ Civil High Court', nextStep: 'admin_high_court' },
            { label: '2️⃣ Estate Distribution Office', nextStep: 'admin_office' },
            { label: '3️⃣ AmanahRaya Berhad', nextStep: 'admin_arb' },
        ]
    },
    admin_high_court: {
        id: 'admin_high_court',
        message: `As the deceased’s estate
                has previously been
                administered, the
                application for additional
                assets must be proceeded
                with at the High Court.<br><br>
                Would {name} like a more
                detailed explanation?`,
        options: [
            { label: '1️⃣ No', nextStep: 'exit' },
            { label: '2️⃣ Yes', nextStep: 'retrieve_page1' }
        ]
    },
    admin_office: {
        id: 'admin_office',
        message: `As the deceased’s estate
                has previously been
                administered, the
                application for additional
                assets must be submitted
                to the Estate Distribution
                Office.<br><br>
                Would {name} like a more
                detailed explanation?`,
        options: [
            { label: '1️⃣ No', nextStep: 'exit' },
            { label: '2️⃣ Yes', nextStep: 'retrieve_page1' }
        ]
    },
    admin_arb: {
        id: 'admin_arb',
        message: `As the deceased’s estate
                has previously been
                administered here, (name)
                is required to submit an
                application for additional
                assets to be administered.`,
        options: [
            { label: '1️⃣ Proceed to additional asset', nextStep: 'pukasa_add_asset' }
        ]
    },
    estate_application: {
        id: 'estate_application',
        message: `For your information, {name}, estate administration is required for the deceased’s assets
                that do not have a nominee or were not given through hibah (gift). A Letter of
                Administration will be issued to administer the deceased’s assets.<br><br>
                May ARIA know the location of the deceased’s assets`,
        options: [
            { label: '1️⃣ Peninsular', nextStep: 'peninsular' },
            { label: '2️⃣ Sabah', nextStep: 'sabah' },
            { label: '3️⃣ Serawak', nextStep: 'serawak' }
        ]
    },
    peninsular: {
        id: 'peninsular',
        message: `To {name}’s knowledge, has
                the deceased’s estate ever
                been administered before?`,
        options: [
            { label: '1️⃣ Yes, it has been done before', nextStep: 'peninsular_yes' },
            { label: '2️⃣ No it has never been done before', nextStep: 'peninsular_no' }
        ]
    },
    peninsular_yes: {
        id: 'peninsular_yes',
        message: `May ARIA know where the
                previous estate administration
                was carried out?`,
        options: [
            { label: '1️⃣ Civil High Court', nextStep: 'admin_high_court' },
            { label: '2️⃣ Estate Distribution Office', nextStep: 'admin_office' },
            { label: '3️⃣ AmanahRaya Berhad', nextStep: 'admin_arb' },
        ]
    },
    peninsular_no: {
        id: 'peninsular_no',
        message: `May ARIA know the
                religion practiced by the
                deceased?`,
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
        message: `What are the assets
                left by the deceased?`,
        options: [
            { label: '1️⃣ Movable assets only (not exceeding RM100,000)', nextStep: 'muslim_yes_movable_assets_less_than' },
            { label: '2️⃣ Movable assets only (exceeding RM100,000)', nextStep: 'muslim_yes_movable_assets_greater_than' },
            { label: '3️⃣ Movable and immovable assets / Immovable assets only', nextStep: 'muslim_yes_movable_assets' },
        ]
    },
    muslim_yes_movable_assets_less_than: {
        id: 'muslim_yes_movable_assets_less_than',
        message: `1. DECEASED (SIMATI)<br>
                a. Original Death Certificate of the deceased & 1 copy.<br>
                b. 1 copy of the Deceased’s Birth Certificate.<br>
                c. Original Will of the deceased & 1 copy.<br>
                d. 1 copy of Marriage / Divorce Certificate (if the deceased was
                married / divorced).<br><br>
                2. DECEASED'S BENEFICIARIES<br>
                a. 1 copy of Identity Card and Birth Certificate of the
                beneficiaries.<br>
                b. 1 copy of Death Certificate (for any beneficiary who passed
                away before / after the deceased).<br><br>
                3. STATUTORY DECLARATION (PROVIDE ONLY IF APPLICABLE)<br>
                Must be signed by an independent witness before a
                Commissioner for Oaths and stamped through the Inland
                Revenue Board (LHDN) website. A copy of the witness’s
                Identity Card must be included.<br>
                a. Statutory Declaration of Single Status (if the deceased was
                unmarried).<br>
                b. Statutory Declaration of No Children (if the deceased had no
                children).<br>
                c. Statutory Declaration of Sole Beneficiary (if the deceased left
                only one beneficiary)<br><br>
                4. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)<br>
                a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership
                (front and back) and no outstanding loan / loan fully settled.<br>
                b. 1 copy of the deceased’s account statement / savings book
                (ASB / Bank / Tabung Haji).<br>
                c. 1 copy of current account statement<br>
                d. 1 copy of joint account statement / savings book.<br>
                e. 1 copy of Bursa Malaysia share statement.<br>
                f. 1 copy of Fixed Deposit statement.<br>
                g. 1 copy of Safe Deposit Box slip.<br>
                h. 1 copy of Company Share Certificate.<br>
                i. 1 copy of EPF (KWSP) statement.<br>
                j. 1 copy of Insurance Policy.<br>
                k. 1 copy of Vessel Licence.<br><br>
                5. MINIMUM DEPOSIT<br>
                RM50<br><br>
                6. ADMINISTRATION PERIOD<br>
                4 – 6 months from the date of file opening.<br><br>
                7. RELATED FORMS<br>
                a. Application Form For Estate Administration.<br>
                b. Document Checklist to be Attached.<br>
                c. Statutory Declaration (Married / Divorced / No Children / Sole
                Beneficiary / Single).<br>
                d. Sample – Estate Administration Application Form.<br>
                e. Sample – Statutory Declaration (Married / Divorced / No Children /
                Sole Beneficiary / Single)<br><br>
                An administration fee will be charged for the
                estate administration, as follows:<br>
                5% on the first RM25,000.<br>
                4% on the next RM225,000.<br>
                3% on the next RM250,000.<br>
                2% on the next RM500,000.<br>
                1% on the remaining balance<br><br>
                The completed form along with the required
                documents can be submitted to any of our
                nearest branches for the estate file opening
                process. {name} may schedule an appointment at
                <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Appointment Form</a>`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    muslim_yes_movable_assets_greater_than: {
        id: 'muslim_yes_movable_assets_greater_than',
        message: `1. DECEASED (SIMATI)<br>
                a. Original Death Certificate of the deceased & 1 copy.<br>
                b. Original Will of the deceased & 1 copy.<br>
                c. Original Faraid Certificate & 1 copy (can be applied for at the
                Syariah Court).<br><br>
                2. DECEASED'S BENEFICIARIES<br>
                a. 1 copy of the beneficiary's Identity Card.<br><br>
                3. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE).<br>
                a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership
                (front and back) and no outstanding loan / loan fully settled.<br>
                b. 1 copy of the deceased’s account statement / savings book
                (ASB / Bank / Tabung Haji).<br>
                c. 1 copy of current account statement.<br>
                d. 1 copy of joint account statement / savings book.<br>
                e. 1 copy of Bursa Malaysia share statement.<br>
                f. 1 copy of Fixed Deposit statement.<br>
                g. 1 copy of Safe Deposit Box slip.<br>
                h. 1 copy of Company Share Certificate.<br>
                i. 1 copy of EPF (KWSP) statement.<br>
                j. 1 copy of Insurance Policy.<br>
                k. 1 copy of Vessel Licence.<br><br>
                4. MINIMUM DEPOSIT
                a. RM50.<br>
                b. RM1000 (if the total value of assets exceeds RM600,000).<br><br>
                5. ADMINISTRATION PERIOD<br>
                a. 6 months from the date of file opening.<br>
                b. 12 months from the date of file opening (if the total value of
                assets exceeds RM600,000).<br><br>
                6. RELATED FORMS
                a. Application Form For Estate Administration.<br>
                b. Document Checklist to be Attached.<br>
                c. Sample – Estate Administration Application Form.<br><br>
                An administration fee will be charged for the
                estate administration, as follows:<br>
                5% on the first RM25,000.<br>
                4% on the next RM225,000.<br>
                3% on the next RM250,000.<br>
                2% on the next RM500,000.<br>
                1% on the remaining balance<br><br>
                The completed form along with the required
                documents can be submitted to any of our
                nearest branches for the estate file opening
                process. {name} may schedule an appointment at
                <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Appointment Form</a>`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    muslim_yes_movable_assets: {
        id: 'muslim_yes_movable_assets',
        message: `1. DECEASED (SIMATI)<br>
                a. Original Death Certificate of the deceased & 1 copy.<br>
                b. Original Will of the deceased & 1 copy.<br>
                c. Original Faraid Certificate & 1 copy (can be applied for at the
                Syariah Court).<br><br>
                2. DECEASED'S BENEFICIARIES<br>
                a. 1 copy of the beneficiary's Identity Card.<br><br>
                3. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)<br>
                a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership
                (front and back) and no outstanding loan / loan fully settled.<br>
                b. 1 copy of the deceased’s account statement / savings book
                (ASB / Bank / Tabung Haji).<br>
                c. 1 copy of current account statement.<br>
                d. 1 copy of joint account statement / savings book.<br>
                e. 1 copy of Bursa Malaysia share statement.<br>
                f. 1 copy of Fixed Deposit statement.<br>
                g. 1 copy of Safe Deposit Box slip.<br>
                h. 1 copy of Company Share Certificate.<br>
                i. 1 copy of EPF (KWSP) statement.<br>
                j. 1 copy of Insurance Policy.<br>
                k. 1 copy of Vessel Licence.<br><br>
                4. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE)<br>
                a. 1 copy of the Sale and Purchase Agreement (S&P) for a
                house without strata title OR.<br>
                b. 1 copy of the house strata title.<br>
                c. 1 copy of the house title deed (geran).<br>
                d. 1 copy of the land title deed (geran).<br>
                e. Original and 1 copy of the latest quit rent receipt.<br>
                f. Original and 1 copy of the latest assessment/tax bill.<br><br>
                5. MINIMUM DEPOSIT<br>
                RM1000/property.<br><br>
                6. ADMINISTRATION PERIOD<br>
                12 months from the date of file opening.<br><br>
                7. RELATED FORMS<br>
                a. Application Form For Estate Administration.<br>
                b. Document Checklist to be Attached.<br>
                c. Sample – Estate Administration Application Form.<br><br>
                An administration fee will be charged for the
                estate administration, as follows:<br>
                5% on the first RM25,000.<br>
                4% on the next RM225,000.<br>
                3% on the next RM250,000.<br>
                2% on the next RM500,000.<br>
                1% on the remaining balance<br><br>
                The completed form along with the required
                documents can be submitted to any of our
                nearest branches for the estate file opening
                process. {name} may schedule an appointment at
                <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Appointment Form</a>`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    muslim_no: {
        id: 'muslim_no',
        message: `What are the assets
                left by the deceased?`,
        options: [
            { label: '1️⃣ Movable assets only (not exceeding RM100,000)', nextStep: 'muslim_yes_movable_assets_less_than' },
            { label: '2️⃣ Movable assets only (exceeding RM100,000)', nextStep: 'muslim_yes_movable_assets_greater_than' },
            { label: '3️⃣ Movable and immovable assets / Immovable assets only', nextStep: 'muslim_yes_movable_assets' },
            { label: '4️⃣ Movable and immovable assets / Immovable assets only (not exceeding RM5 million)', nextStep: 'muslim_yes_movable_assets_not_exceed' },
        ]
    },
    muslim_yes_movable_assets_not_exceed: {
        id: 'muslim_yes_movable_assets_not_exceed',
        message: `1. DECEASED (SIMATI)<br>
                a. Original Death Certificate of the deceased & 1 copy.<br>
                b. 1 copy of the Deceased’s Birth Certificate.<br>
                c. Original Will of the deceased & 1 copy.<br>
                d. 1 copy of Marriage/Divorce Certificate (if the deceased was married/divorced).<br><br>
                2. DECEASED'S BENEFICIARIES<br>
                a. 1 copy of the Identity Card and Birth Certificate of the
                beneficiaries.<br>
                b. 1 copy of Death Certificate (for any beneficiary who passed
                away before/after the deceased).<br><br>
                3. STATUTORY DECLARATION (PROVIDE ONLY IF RELEVANT)<br>
                To be signed by an independent witness in front of a
                Commissioner for Oaths and stamped via the Inland Revenue
                Board (LHDN) website. A copy of the witness’s Identity Card
                must be included.<br>
                a. Statutory Declaration of Single Status (if the deceased was
                unmarried).<br>
                b. Statutory Declaration of No Children (if the deceased had
                no children).<br>
                c. Statutory Declaration of Sole Beneficiary (if there is only
                one surviving beneficiary).<br><br>
                4. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)<br>
                a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership
                (front and back) and no outstanding loan / loan fully settled.<br>
                b. 1 copy of the deceased’s account statement / savings book
                (ASB / Bank / Tabung Haji).<br>
                c. 1 copy of current account statement.<br>
                d. 1 copy of joint account statement / savings book.<br>
                e. 1 copy of Bursa Malaysia share statement.<br>
                f. 1 copy of Fixed Deposit statement.<br>
                g. 1 copy of Safe Deposit Box slip.<br>
                h. 1 copy of Company Share Certificate.<br>
                i. 1 copy of EPF (KWSP) statement.<br>
                j. 1 copy of Insurance Policy.<br>
                k. 1 copy of Vessel Licence.<br><br>
                5. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE)<br>
                a. 1 copy of the Sale and Purchase Agreement (S&P) for a
                house without strata title.<br>
                b. 1 copy of the house strata title.<br>
                c. 1 copy of the house title deed (geran).<br>
                d. 1 copy of the land title deed (geran).<br>
                e. Original and 1 copy of the latest quit rent receipt.<br>
                f. Original and 1 copy of the latest assessment/tax bill.<br><br>
                6. MINIMUM DEPOSIT<br>
                RM300/property<br><br>
                7. ADMINISTRATION PERIOD<br>
                12 months from the date of file opening.<br><br>
                8. RELATED FORMS<br>
                a. Application Form For Estate Administration.<br>
                b. Document Checklist to be Attached.<br>
                c. Statutory Declaration (Married / Divorced / No Children / Sole
                Beneficiary / Single).<br>
                d. Sample – Estate Administration Application Form.<br>
                e. Sample – Statutory Declaration (Married / Divorced / No Children /
                Sole Beneficiary / Single).<br><br>
                An administration fee will be charged for the
                estate administration, as follows:<br>
                2% from the total asset value
                The completed form along with the required
                documents can be submitted to any of our
                nearest branches for the estate file opening
                process. {name} may schedule an appointment at
                <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Appointment Form</a>`,
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
        message: `1. DECEASED (SIMATI)<br>
                a. Original Death Certificate of the deceased & 1 copy.<br>
                b. Original Will of the deceased & 1 copy.<br><br>
                2. DECEASED'S BENEFICIARIES<br>
                a. 1 copy of the beneficiary's Identity Card.<br><br>
                3. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)<br>
                a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership
                (front and back) and no outstanding loan / loan fully settled.<br>
                b. 1 copy of the deceased’s account statement / savings book
                (ASB / Bank / Tabung Haji).<br>
                c. 1 copy of current account statement.<br>
                d. 1 copy of joint account statement / savings book.<br>
                e. 1 copy of Bursa Malaysia share statement.<br>
                f. 1 copy of Fixed Deposit statement.<br>
                g. 1 copy of Safe Deposit Box slip.<br>
                h. 1 copy of Company Share Certificate.<br>
                i. 1 copy of EPF statement.<br>
                j. 1 copy of Insurance Policy.<br>
                k. 1 copy of Vessel Licence.<br><br>
                4. MINIMUM DEPOSIT<br>
                a. RM50.<br>
                b. RM1000 (if the total value of assets exceeds RM600,000).<br><br>
                5. ADMINISTRATION PERIOD<br>
                a. 6 months from the date of file opening.<br>
                b. 12 months from the date of file opening (if the total value of
                assets exceeds RM600,000).<br><br>
                7. RELATED FORMS<br>
                a. Application Form For Estate Administration.<br>
                b. Document Checklist to be Attached.<br>
                c. Sample – Estate Administration Application Form<br><br>
                An administration fee will be charged for the
                estate administration, as follows:<br>
                5% on the first RM25,000.<br>
                4% on the next RM225,000.<br>
                3% on the next RM250,000.<br>
                2% on the next RM500,000.<br>
                1% on the remaining balance<br><br>
                The completed form along with the required
                documents can be submitted to any of our
                nearest branches for the estate file opening
                process. {name} may schedule an appointment at
                <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Appointment Form</a>`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    nonmuslim_yes_immovable_assets: {
        id: 'nonmuslim_yes_immovable_assets',
        message: `1. DECEASED (SIMATI)<br>
                a. Original Death Certificate of the deceased & 1 copy.<br>
                b. Original Will of the deceased & 1 copy.<br><br>
                2. DECEASED'S BENEFICIARIES<br>
                a. 1 copy of the beneficiary's Identity Card.<br><br>
                3. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE).<br>
                a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership
                (front and back) and no outstanding loan / loan fully settled.<br>
                b. 1 copy of the deceased’s account statement / savings book
                (ASB / Bank / Tabung Haji).<br>
                c. 1 copy of current account statement.<br>
                d. 1 copy of joint account statement / savings book.<br>
                e. 1 copy of Bursa Malaysia share statement.<br>
                f. 1 copy of Fixed Deposit statement.<br>
                g. 1 copy of Safe Deposit Box slip.<br>
                h. 1 copy of Company Share Certificate.<br>
                i. 1 copy of EPF (KWSP) statement.<br>
                j. 1 copy of Insurance Policy.<br>
                k. 1 copy of Vessel Licence.<br><br>
                4. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE)<br>
                a. 1 copy of the Sale and Purchase Agreement (S&P) for a
                house without strata title.<br>
                b. 1 copy of the house strata title.<br>
                c. 1 copy of the house title deed (geran).<br>
                d. 1 copy of the land title deed (geran).<br>
                e. Original and 1 copy of the latest quit rent receipt.<br>
                f. Original and 1 copy of the latest assessment/tax bill.<br><br>
                5. MINIMUM DEPOSIT<br>
                RM1000/property.<br><br>
                7. ADMINISTRATION PERIOD<br>
                12 months from the date of file opening.<br>
                8. RELATED FORMS.<br>
                a. Application Form For Estate Administration.<br>
                b. Document Checklist to be Attached.<br>
                c. Sample – Estate Administration Application Form<br>
                An administration fee will be charged for the
                estate administration, as follows:<br>
                5% on the first RM25,000.<br>
                4% on the next RM225,000.<br>
                3% on the next RM250,000.<br>
                2% on the next RM500,000.<br>
                1% on the remaining balance<br><br>
                The completed form along with the required
                documents can be submitted to any of our
                nearest branches for the estate file opening
                process. {name} may schedule an appointment at
                <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Appointment Form</a>`,
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
        message: `1. DECEASED (SIMATI)<br>
                a. Original Death Certificate of the deceased & 1 copy.<br>
                b. 1 copy of the Deceased’s Birth Certificate.<br>
                c. 1 copy of Marriage / Divorce Certificate (if the deceased was
                married / divorced).<br><br>
                2. DECEASED'S BENEFICIARIES<br>
                a. 1 copy of the Identity Card and Birth Certificate of the
                beneficiaries.<br>
                b. 1 copy of Death Certificate (for any beneficiary who passed
                away before / after the deceased).<br><br>
                3. STATUTORY DECLARATION (PROVIDE ONLY IF RELEVANT)<br>
                To be signed by an independent witness in front of a
                Commissioner for Oaths and stamped via the Inland Revenue
                Board (LHDN) website. A copy of the witness’s Identity Card
                must be included.<br>
                a. Statutory Declaration of Single Status (if the deceased was
                unmarried).<br>
                b. Statutory Declaration of Marriage (if the marriage was not
                registered).<br>
                c. Statutory Declaration of No Children (if the deceased had
                no children).<br>
                d. Statutory Declaration of Sole Beneficiary (if there is only
                one surviving beneficiary).<br><br>
                4. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)<br>
                a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership
                (front and back) and no outstanding loan / loan fully settled.<br>
                b. 1 copy of the deceased’s account statement / savings book
                (ASB / Bank / Tabung Haji).<br>
                c. 1 copy of current account statement.<br>
                d. 1 copy of joint account statement / savings book.<br>
                e. 1 copy of Bursa Malaysia share statement.<br>
                f. 1 copy of Fixed Deposit statement.<br>
                g. 1 copy of Safe Deposit Box slip.<br>
                h. 1 copy of Company Share Certificate.<br>
                i. 1 copy of EPF (KWSP) statement.<br>
                j. 1 copy of Insurance Policy.<br>
                k. 1 copy of Vessel Licence.<br><br>
                5. MINIMUM DEPOSIT<br>
                RM50.<br>
                6. ADMINISTRATION PERIOD<br>
                4 - 6 months from the date of file opening.<br><br>
                7. RELATED FORMS.<br>
                a. Application Form For Estate Administration.<br>
                b. Document Checklist to be Attached.<br>
                c. Statutory Declaration (Married / Divorced / No Children / Sole
                Beneficiary / Single).<br>
                d. Sample – Estate Administration Application Form.<br>
                e. Sample – Statutory Declaration (Married / Divorced / No Children /
                Sole Beneficiary / Single).<br><br>
                An administration fee will be charged for the
                estate administration, as follows:<br>
                5% on the first RM25,000.<br>
                4% on the next RM225,000.<br>
                3% on the next RM250,000.<br>
                2% on the next RM500,000.<br>
                1% on the remaining balance<br><br>
                The completed form along with the required
                documents can be submitted to any of our
                nearest branches for the estate file opening
                process. {name} may schedule an appointment at
                <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Appointment Form</a>`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    nonmuslim_no_immovable_assets_greater_than: {
        id: 'nonmuslim_no_immovable_assets_greater_than',
        message: `1. DECEASED (SIMATI)
                a. Original Death Certificate of the deceased & 1 copy.<br>
                b. 1 copy of the Deceased’s Birth Certificate.<br>
                c. 1 copy of Marriage / Divorce Certificate (if the deceased was
                married / divorced).<br><br>
                2. DECEASED'S BENEFICIARIES<br>
                a. 1 copy of the Identity Card and Birth Certificate of the
                beneficiaries.<br>
                b. 1 copy of Death Certificate (for any beneficiary who passed
                away before / after the deceased).<br><br>
                3. STATUTORY DECLARATION (PROVIDE ONLY IF RELEVANT)<br>
                To be signed by an independent witness in front of a
                Commissioner for Oaths and stamped via the Inland Revenue
                Board (LHDN) website. A copy of the witness’s Identity Card
                must be included..<br>
                a. Statutory Declaration of Single Status (if the deceased was
                unmarried).<br>
                b. Statutory Declaration of Marriage (if the marriage was not
                registered).<br>
                c. Statutory Declaration of No Children (if the deceased had
                no children).<br>
                d. Statutory Declaration of Sole Beneficiary (if there is only
                one surviving beneficiary).<br><br>
                4. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)<br>
                a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership
                (front and back) and no outstanding loan / loan fully settled.<br>
                b. 1 copy of the deceased’s account statement / savings book
                (ASB / Bank / Tabung Haji).<br>
                c. 1 copy of current account statement.<br>
                d. 1 copy of joint account statement / savings book.<br>
                e. 1 copy of Bursa Malaysia share statement.<br>
                f. 1 copy of Fixed Deposit statement.<br>
                g. 1 copy of Safe Deposit Box slip.<br>
                h. 1 copy of Company Share Certificate.<br>
                i. 1 copy of EPF (KWSP) statement.<br>
                j. 1 copy of Insurance Policy.<br>
                k. 1 copy of Vessel Licence.<br><br>
                5. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE).<br>
                a. 1 copy of the Sale and Purchase Agreement (S&P) for a
                house without strata title.<br>
                b. 1 copy of the house strata title.<br>
                c. 1 copy of the house title deed (geran).<br>
                d. 1 copy of the land title deed (geran).<br>
                e. Original and 1 copy of the latest quit rent receipt.<br>
                f. Original and 1 copy of the latest assessment/tax bill.<br><br>
                6. MINIMUM DEPOSIT<br>
                RM1000/property.<br><br>
                7. ADMINISTRATION PERIOD<br>
                12 months from the date of file opening.<br><br>
                8. RELATED FORMS<br>
                a. Application Form For Estate Administration.<br>
                b. Document Checklist to be Attached.<br>
                c. Statutory Declaration (Married / Divorced / No Children / Sole
                Beneficiary / Single).<br>
                d. Sample – Estate Administration Application Form.<br>
                e. Sample – Statutory Decl.<br><br>
                An administration fee will be charged for the
                estate administration, as follows:<br>
                5% on the first RM25,000.<br>
                4% on the next RM225,000.<br>
                3% on the next RM250,000.<br>
                2% on the next RM500,000.<br>
                1% on the remaining balance<br><br>
                The completed form along with the required
                documents can be submitted to any of our
                nearest branches for the estate file opening
                process. {name} may schedule an appointment at
                <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Appointment Form</a>`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    nonmuslim_no_movable_assets_not_exceed: {
        id: 'nonmuslim_no_movable_assets_not_exceed',
        message: `1. DECEASED (SIMATI)<br>
            a. Original Death Certificate of the deceased & 1 copy.<br>
            b. 1 copy of the Deceased’s Birth Certificate.<br>
            c. 1 copy of Marriage / Divorce Certificate (if the deceased was
            married / divorced).<br><br>
            2. DECEASED'S BENEFICIARIES<br>
            a. 1 copy of the Identity Card and Birth Certificate of the
            beneficiaries.<br>
            b. 1 copy of Death Certificate (for any beneficiary who passed
            away before / after the deceased).<br><br>
            3. STATUTORY DECLARATION (PROVIDE ONLY IF RELEVANT)<br>
            To be signed by an independent witness in front of a
            Commissioner for Oaths and stamped via the Inland Revenue
            Board (LHDN) website. A copy of the witness’s Identity Card
            must be included..<br>
            a. Statutory Declaration of Single Status (if the deceased was
            unmarried).<br>
            b. Statutory Declaration of Marriage (if the marriage was not
            registered).<br>
            c. Statutory Declaration of No Children (if the deceased had
            no children).<br>
            d. Statutory Declaration of Sole Beneficiary (if there is only
            one surviving beneficiary).<br><br>
            4. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE).<br>
            a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership
            (front and back) and no outstanding loan / loan fully settled.<br>
            b. 1 copy of the deceased’s account statement / savings book
            (ASB / Bank / Tabung Haji).<br>
            c. 1 copy of current account statement.<br>
            d. 1 copy of joint account statement / savings book.<br>
            e. 1 copy of Bursa Malaysia share statement.<br>
            f. 1 copy of Fixed Deposit statement.<br>
            g. 1 copy of Safe Deposit Box slip.<br>
            h. 1 copy of Company Share Certificate.<br>
            i. 1 copy of EPF (KWSP) statement.<br>
            j. 1 copy of Insurance Policy.<br>
            k. 1 copy of Vessel Licence.<br><br>
            5. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE)<br>
            a. 1 copy of the Sale and Purchase Agreement (S&P) for a
            house without strata title.<br>
            b. 1 copy of the house strata title.<br>
            c. 1 copy of the house title deed (geran).<br>
            d. 1 copy of the land title deed (geran).<br>
            e. Original and 1 copy of the latest quit rent receipt.<br>
            f. Original and 1 copy of the latest assessment/tax bill.<br><br>
            6. MINIMUM DEPOSIT<br>
            RM300/property.<br><br>
            7. ADMINISTRATION PERIOD<br>
            12 months from the date of file opening.<br><br>
            8. RELATED FORMS<br>
            a. Application Form For Estate Administration.<br>
            b. Document Checklist to be Attached.<br>
            c. Statutory Declaration (Married / Divorced / No Children / Sole
            Beneficiary / Single).<br>
            d. Sample – Estate Administration Application Form.<br>
            e. Sample – Statutory Declaration (Married / Divorced / No Children /
            Sole Beneficiary / Single).<br><br>
            An administration fee will be charged for the
            estate administration, as follows:<br>
            2% from the total asset value
            The completed form along with the required
            documents can be submitted to any of our
            nearest branches for the estate file opening
            process. {name} may schedule an appointment at
            <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Appointment Form</a>`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    obtain_form: {
        id: 'obtain_form',
        message: `Please select the required form.<br><br>
        <a href="https://drive.google.com/file/d/1KziGKpTnw4eLp_8FHup-SCAEQM625tnc/view?usp=sharing" target="_blank">Application Form for Estate Administration</a>
        <a href="https://drive.google.com/file/d/1HedU88RKdbxcU3fjtU8nUQUxxvi7xIoR/view?usp=sharing" target="_blank">Checklist of Documents To Be Attached</a>
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    // Below steps are belong to Sabah

    sabah: {
        id: 'sabah',
        message: `Estate administration in Sabah is only applicable if all of the
                deceased's assets (both movable and immovable) are located in
                Sabah.
                If the assets are located in Peninsular Malaysia, Sarawak, or Labuan,
                the estate administration must be filed and carried out in the
                respective region based on the location of the assets.<br><br>
                To {name}’s knowledge, has the deceased’s estate ever been
                administered before?`,
        options: [
            { label: '1️⃣ Yes, it has been done before', nextStep: 'sabah_main_yes' },
            { label: '2️⃣ No, it has never been done before', nextStep: 'sabah_main_no' },
        ]
    },
    sabah_main_yes: {
        id: 'sabah_main_yes',
        message: `May ARIA know where
            the previous estate
            administration was
            carried out?`,
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
        message: `Has the property in
            Sabah been included in
            the previous estate
            administration that was
            carried out?`,
        options: [
            { label: '1️⃣ Yes ', nextStep: 'sabah_main_yes_peninsular_court_yes' },
            { label: '2️⃣ No', nextStep: 'sabah_main_yes_peninsular_court_no' },
        ]
    },
    sabah_main_yes_peninsular_court_yes: {
        id: '',
        message: `For non-Muslims, the
                transfer of ownership can
                only be done if (name)
                submits the Court Order
                to ARB Kota Kinabalu for
                the purpose of resealing
                at the Sabah High Court.
                For Muslims, (name)
                must submit a new estate
                application at ARB Kota
                Kinabalu to be filed
                through the Syariah
                Court.<br><br>
                Would {name} like to proceed?`,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_district_office: {
        id: 'sabah_main_yes_district_office',
        message: `{name} may submit a
                new estate application at
                ARB Kota Kinabalu to be
                filed through the Civil
                High Court (for Non-
                Muslims) or the Syariah
                Court (for Muslims).<br><br>
                Would {name} like to proceed?`,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_native_court: {
        id: "sabah_main_yes_native_court",
        message: `For the deceased's estate
                that cannot be
                administered through the
                Native Court, (name) may
                submit a new estate
                application at ARB Kota
                Kinabalu to be filed
                through the Civil High
                Court.<br><br>
                Would {name} like to proceed?`,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_peninsular_court_no: {
        id: 'sabah_main_yes_peninsular_court_no',
        message: `{name} may submit a
                new estate application at
                ARB Kota Kinabalu to be
                filed through the Civil
                High Court (for non-
                Muslims) or the Syariah
                Court (for Muslims).<br><br>
                Would {name} like to proceed?`,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_syriah_court: {
        id: 'sabah_main_yes_syriah_court',
        message: `if an Executor (Wasi) or
                Guardian (Wali Harta) has
                been appointed by the Syariah
                Court, (name) may proceed
                with the administration
                granted by the Syariah Court.
                However, if the appointed
                Executor or Guardian fails to
                carry out their duties, {name}
                may appoint Amanah Raya
                Berhad (ARB) Kota Kinabalu as
                the new Executor or Guardian
                by submitting an application
                to ARB Kota Kinabalu.<br><br>
                Would {name} like to proceed?`,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_kota_kinabalu: {
        id: 'sabah_main_yes_kota_kinabalu',
        message: `If an Administrator has been
                appointed by the High Court,
                {name} may proceed with the
                estate administration as
                ordered by the Court.
                However, if the appointed
                Administrator fails to carry out
                their duties, (name) may apply
                to appoint Amanah Raya
                Berhad (ARB) Kota Kinabalu as a
                substitute Administrator by
                submitting an official
                application to ARB Kota
                Kinabalu.<br><br>
                Would {name} like to proceed?`,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_amanah_raya_sabah: {
        id: 'sabah_main_yes_amanah_raya_sabah',
        message: `{name} may complete
                the additional asset form
                below and submit the
                form along with the
                complete documents to
                ARB Kota Kinabalu.<br><br>
                
                <a href="https://drive.google.com/file/d/1sMYoAe-0iOpgoTc-U50FwTi9-zsbshOO/view" target=_blank>BORANG PERMOHONAN ASET TAMBAHAN</a>`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    sabah_main_no: {
        id: 'sabah_main_no',
        message: `Before ARIA provides further explanation, (name) is advised to first review the following
            information regarding estate administration at ARB Kota Kinabalu:<br><br>
            1. Estate Administration<br>
            a. If the deceased was Muslim, the application will be filed through the Syariah Court.<br>
            b. If the deceased was non-Muslim (Non-Bumiputera), the application will be filed through
            the Civil High Court.<br><br>
            2. Property Status<br>
            a. For properties with Native Title (NT) status, the beneficiary must be a Native (Bumiputera/
            Indigenous of Sabah).<br>
            b. For properties other than NT, there are no specific conditions imposed on the beneficiary.<br>
            c. If the property is located outside the Kota Kinabalu area, the transfer of ownership will be
            handled by the relevant District Land Office.<br><br>
            3. Property Ownership Status<br>
            a. If the deceased was Muslim, the property must:<br>
            i) Be free from debt; and<br>
            ii) Have the original individual title at the time of application to the Syariah Court.<br>
            b. If the deceased was non-Muslim, the application may still be filed with the Civil High Court
            even if the property is under debt. However, the transfer process will only be carried out
            once:<br>
            i) All debts are fully settled; and<br>
            ii) The original individual title is available.<br>
            The information above applies only to immovable assets such as house and land in Sabah.<br>
            For movable assets such as bank accounts, insurance, vehicles etc located in Sabah, the case
            may be filed anywhere (it is not required to be filed in Sabah).<br><br>
            Further explanation only applies if {name}'s information meets the specified criteria.<br><br>
            What was the religion of the deceased?`,
        options: [
            { label: '1️⃣ Muslim', nextStep: 'sabah_muslim' },
            { label: '2️⃣ Non-muslim', nextStep: 'sabah_non_muslim' },
        ]
    },
    // The below steps are belong to Serawak
    serawak: {
        id: 'serawak',
        message: `To {name}’s knowledge, has the
                deceased’s estate ever been
                administered before?`,
        options: [
            { label: '1️⃣ Yes, it has been done before', nextStep: 'serawak_main_yes' },
            { label: '2️⃣ No, it has never been done before', nextStep: 'serawak_main_no' },
        ]
    },
    serawak_main_yes: {
        id: 'serawak_main_yes',
        message: `May ARIA know where
                the previous estate
                administration was
                carried out?`,
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
        message: `{name} may refer to
                the District Office for
                the administration of
                the deceased’s
                additional assets.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    serawak_main_yes_amanah_raya: {
        id: 'serawak_main_yes_amanah_raya',
        message: `{name} may
                complete the
                additional assets
                form below and
                submit the form
                along with the
                required documents
                to the Kuching
                branch for the
                issuance of the
                Supplementary
                Letter of
                Administration.<br><br>`,// Do it form
        options: []
    },
    serawak_main_yes_civil_court: {
        id: 'serawak_main_yes_civil_court',
        message: `Has the property in
                Sarawak been included in
                the previous estate
                administration that was
                carried out?`,
        options: [
            { label: '1️⃣ Yes ', nextStep: 'serawak_main_yes_civil_court_yes' },
            { label: '2️⃣ No', nextStep: 'serawak_main_no' },
        ]
    },
    serawak_main_yes_civil_court_yes: {
        id: 'serawak_main_yes_civil_court_yes',
        message: `For the transfer of
                ownership of the
                property, (name) will
                need to undergo the
                resealing process at
                Amanah Raya Berhad
                Kuching.<br><br>
                {name} may visit our
                Kuching branch for
                further expalanation.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    serawak_main_no: {
        id: 'serawak_main_no',
        message: `
        For your information, ARB Kuching can only issue the Letter of Administration / Grant of
        Probate for the following:<br><br>
        1. Location of Property<br>
        a. The deceased's property is located within Kuching area only or if the beneficiary resides
        in Kuching.<br>
        b. For properties outside of Kuching area, the administration must be done at the District
        Office.<br><br>
        2. Beneficiary / Heir<br>
        a. Must be a Malaysian citizen.<br>
        b. If not a Malaysian citizen, a Power of Attorney order must be submitted to Amanah
        Raya Berhad Kuching (only applicable for property located in Kuching).<br>
        3. The Deceased<br><br>
        a. If the deceased is non-Malay / non-Bumiputera, administration must be done at
        Amanah Raya Berhad Kuching.<br>
        b. If the deceased is Malay / Bumiputera, administration must be done at the District
        Office.<br><br>
        Disclaimer:<br>
        The explanation above applies only to immovable property such as house or land in
        Sarawak. For movable assets such as bank accounts, insurance, vehicles etc located in
        Sarawak, the case may be filed anywhere (it is not required to be filed in Sarawak).<br><br>
        Further explanation only applies if {name}'s information meets the specified criteria.<br><br>
        Did the deceased leave a will, and who is the Executor named in the will?`,
        options: [
            { label: '1️⃣ No will left by the deceased ', nextStep: 'sabah_main_yes_peninsular_court' },
            { label: '2️⃣ Have a will, and the executor is other than ARB', nextStep: 'sabah_main_yes_kota_kinabalu' },
            { label: '3️⃣ Have a will, and the executor is ARB', nextStep: 'sabah_main_yes_syriah_court' },
        ]
    },
    // The below steps are belong to Pusaka(Add Assets)
    pukasa_add_asset: {
        id: 'pukasa_add_asset',
        message: `May ARIA know what
                additional assets are to be
                administered?`,
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
        message: `
            Okay. ARIA will list
            down the required
            documents.<br><br>
            1. DECEASED (SIMATI)<br>
            a. Original Death Certificate & 1 copy.<br><br>
            2. DECEASED'S BENEFICIARY<br>
            a. 1 copy of Death Certificate (if 1 salinan Sijil Kematian (if there is
            a beneficiary who passed away after the previous administration was completed).<br><br>
            3. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)<br>
            a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership
            (front and back) and no outstanding loan / loan fully settled.<br>
            b. 1 copy of the deceased’s account statement / savings book
            (ASB / Bank / Tabung Haji).<br>
            c. 1 copy of current account statement.<br>
            d. 1 copy of joint account statement / savings book.<br>
            e. 1 copy of Bursa Malaysia share statement.<br>
            f. 1 copy of Fixed Deposit statement.<br>
            g. 1 copy of Safe Deposit Box slip.<br>
            h. 1 copy of Company Share Certificate.<br>
            i. 1 copy of EPF (KWSP) statement.<br>
            j. 1 copy of Insurance Policy.<br>
            k. 1 copy of Vessel Licence.<br><br>
            4. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE)<br>
            a. 1 copy of the Sale and Purchase Agreement (S&P) for a
            house without strata title OR.<br>
            b. 1 copy of the house strata title.<br>
            c. 1 copy of the house title deed (geran).<br>
            d. 1 copy of the land title deed (geran).<br>
            e. Original and 1 copy of the latest quit rent receipt.<br>
            f. Original and 1 copy of the latest assessment/tax bill.<br>
            5. DEPOSIT<br>
            a. RM50 - RM1000 (actual amount will be informed after the
            document is reviewed).<br><br>
            6. RELATED FORMS<br>
            a. Additional Assets / Liabilities Application Form.<br>
            b. Sample - Additional Assets / Liabilities Application Form.<br><br>
            The completed form along with the required documents must be submitted to the same
            AmanahRaya branch as in the previous administration.<br><br>
            Which delivery method is more convenient for {name}?
            `,
        options: [
            { label: '1️⃣ Counter ', nextStep: 'pukasa_add_asset_movable_counter' },
            { label: '2️⃣ Post', nextStep: 'pukasa_add_asset_movable_post' },
            { label: '3️⃣ Email / WhatsApp', nextStep: 'pukasa_add_asset_movable_email' },
        ]
    },
    pukasa_add_asset_movable_counter: {
        id: 'pukasa_add_asset_movable_counter',
        message: `Branch information can be found at: <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a><br><br>
        Is there anything else ARIA can assist you with?`,
        options: [
            { label: "1️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    pukasa_add_asset_vehicle: {
        id: 'pukasa_add_asset_vehicle',
        message: `ARIA would like to inform that this
                administration can be done through the Fast
                Lane procedure, in which the Letter of
                Administration will be issued within 30 days
                from the date of complete document
                submission. This procedure is only applicable for
                LA issued by ARB only.<br><br>
                ARIA will list down the required documents.<br><br>
                1. DECEASED (SIMATI)<br>
                a. Original Death Certificate & 1 copy
                b. 1 copy of the Deceased’s Birth Certificate (required if the
                beneficiary is a parent or sibling).<br><br>
                2. BENEFICIARY'S REPRESENTATIVE<br>
                a. 1 copy of Identity Card / Passport.<br>
                b. 1 copy of supporting document proving relationship to the
                deceased.<br>
                i. Birth Certificate (if the beneficiary is a child or sibling).<br>
                ii. Marriage Certificate (if the beneficiary is a spouse).<br>
                3. BUYER (IF THE VEHICLE IS BEING TRANSFERRED TO A BUYER).<br>
                a. 1 copy of Identity Card / Passport.<br>
                b. Proof of vehicle purchase.<br>
                4. MOVABLE PROPERTY – VEHICLE.<br>
                a. New Grant – 1 copy of the vehicle grant (front only)
                * Must include vehicle e-ownership search / proof of loan
                settlement / proof of cash purchase.<br>
                b. Old Grant – 1 copy of the vehicle grant (front and back)
                * If ownership is still under claim and the loan has been
                settled, include e-ownership search / proof of loan
                settlement.<br><br>
                5. MINIMUM DEPOSIT<br>
                RM50.<br><br>
                6. ADMINISTRATION PERIOD<br>
                30 days from the date of file opening and all completed
                documents sumbitted.<br><br>
                7. RELATED FORMS<br>
                a. Application Form For Estate Administration.<br>
                b. Document Checklist to be Attached.<br>
                c. Statutory Declaration of Vehicle Ownership Transfer.<br>
                d. Sample – Estate Administration Application Form.<br>
                e. Sample – Statutory Declaration of Vehicle Ownership Transfer.<br><br>
                An administration fee will be charged for the administration of this estate:<br><br>
                a. For total value of RM3,000 and below : RM50.<br>
                b. For total value between RM3,000.01 and RM5,000 : RM150.<br>
                c. For total value between RM5,000.01 and RM10,000 : 5.00% of the
                vehicle's value.<br><br>
                For your information, the vehicle valuation will be conducted via the
                website at the branch counter during the file opening process. {name}
                will be required to sign as confirmation of agreement with the issued
                valuation.<br><br>
                The completed form along with the required documents must be submitted to the same
                AmanahRaya branch as in the previous administration.<br><br>
                Which delivery method is more convenient for {name]?`,
        options: [
            { label: '1️⃣ Counter ', nextStep: 'pukasa_add_asset_movable_counter' },
            { label: '2️⃣ Post', nextStep: 'pukasa_add_asset_movable_post' },
            { label: '3️⃣ Email / WhatsApp', nextStep: 'pukasa_add_asset_movable_email' },
        ]
    },
    pukasa_add_asset_movable_post: {
        id: 'pukasa_add_asset_movable_post',
        message: `Please post it to the
                branch where the file
                was registered.<br><br>
                Branch information can be found at: <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a><br><br>
                {name} will be contacted for online payment once the documents have been received.<br><br>
                Is there anything else ARIA can assist you with?
                `,
        options: [
            { label: "1️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    pukasa_add_asset_movable_email: {
        id: 'pukasa_add_asset_movable_email',
        message: `Clear documents can
                be sent via email to
                crmd@arb.com.my or
                WhatsApp to us at 03-
                2055 7557.<br><br>
                {name} will be contacted for online payment once the documents have been received.<br><br>
                Is there anything else ARIA can assist you with?
                `,
        options: [
            { label: "1️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    // The below steps are belong to Pusaka Eng 1
    pusaka_estate: {
        id: 'pusaka_estate',
        message: `Alright, how can
                ARIA assist you
                today, {name}?`,
        options: [
            { label: '1️⃣ Check current status ', nextStep: 'pukasa_add_asset_movable_counter' },
            { label: '2️⃣ Obtaining a copy of the Letter of Administration (LOA)', nextStep: 'pukasa_add_asset_movable_post' },
            { label: '3️⃣ Registering additional assets of the deceased', nextStep: 'pukasa_add_asset_movable_email' },
        ]
    },

    exit: {
        id: 'exit',
        message: 'Thank you. Feel free to return anytime!',
        options: []
    },
    // Placeholder steps
    pay_share: { id: 'pay_share', message: 'Whose share does {name} intend to pay for?', options: [] },
    retrieve_portion: { id: 'retrieve_portion', message: 'Please provide documents to retrieve the unclaimed portion.', options: [] },
    order_followup: { id: 'order_followup', message: 'What is the order about?', options: [] },
    general_inquiry: { id: 'general_inquiry', message: 'Please enter your inquiry below.', options: [] },
    vehicle_estate: { id: 'vehicle_estate', message: 'Is there any remaining loan on the deceased’s vehicle?', options: [] },
    trust_info: { id: 'trust_info', message: 'Trust info coming soon...', options: [] },
    hibah_info: { id: 'hibah_info', message: 'Hibah info coming soon...', options: [] },
    wasiat_info: { id: 'wasiat_info', message: 'Wasiat info coming soon...', options: [] },
}

