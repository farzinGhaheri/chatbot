export const chatbotFlow = {
    start: {
        id: 'start',
        message: 'Hi, I’m ARIA. May I know your name?',
        options: [],
    },
    greet: {
        id: 'greet',
        message: '<b>{name}</b>, are you more comfortable communicating in Bahasa Malaysia or English?',
        options: [
            { label: '1️⃣ Bahasa Malaysia', nextStep: 'malayu' },
            { label: '2️⃣ English', nextStep: 'english_main' },
        ],
    },
    english_main: {
        id: 'english_main',
        message: 'Is <b>{name}</b> our existing customer?',
        options: [
            { label: '1️⃣ No, I would like to make an inquiry', nextStep: 'no_page1' },
            { label: '2️⃣ Yes, I already have a registered file with ARB.', nextStep: 'yes_page1' },
            { label: '3️⃣ I would like to know about promotion', nextStep: 'i_would_like' },
        ]
    },
    no_page1: {
        id: 'no_page1',
        message: 'What can ARIA assist <b>{name}</b> with?',
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
        message: `May ARIA know what <b>{name}</b> would like to inquire about?`,
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
        message: 'Does <b>{name}</b> intend to give it as a trust, hibah or will wasiat?',
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
        message: `Whose share does <b>{name}</b> intend to pay for?`,
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
                    
                    <b>{name}</b> may <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Schedule An Appointment</a><br>
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
                    
                    <strong><b>{name}</b></strong> may 
                    <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Schedule An Appointment</a><br>
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
                    once the documents are received by <b>{name}</b>.`,
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
                    once the documents are received by <b>{name}</b>.`,
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
        message: `Thanks <b>{name}</b>. Now please provide your NRIC.`,
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
        message: `<b>{name}</b>, thank you. You will be contacted on the next working day.`,
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
                <b>{name}</b> may also schedule an appointment at:
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
            Great! <b>{name}</b>, you are a valued customer to us.<br>
            Please state your existing product with us.
            `,
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
        message: `The estate administration for this vehicle only applies to
                administration in Peninsular Malaysia. For administration in
                Sarawak or Sabah, <b>{name}</b> may click the estate application option
                above.<br>
                For your information, estate administration is required for the
                transfer of ownership of the deceased’s vehicle. A Letter of
                Administration will be issued for this process.<br><br>
                To <b>{name}</b>’s knowledge, has the deceased’s estate ever
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
                    process. <b>{name}</b> may schedule an appointment at
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
                process. <b>{name}</b> may schedule an appointment at
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
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
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
                Would <b>{name}</b> like a more
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
                Would <b>{name}</b> like a more
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
                administered here, <b>{name}</b>
                is required to submit an
                application for additional
                assets to be administered.`,
        options: [
            { label: '1️⃣ Proceed to additional asset', nextStep: 'pukasa_add_asset' }
        ]
    },
    estate_application: {
        id: 'estate_application',
        message: `For your information, <b>{name}</b>, estate administration is required for the deceased’s assets
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
        message: `To <b>{name}</b>’s knowledge, has
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
                process. <b>{name}</b> may schedule an appointment at
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
                process. <b>{name}</b> may schedule an appointment at
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
                process. <b>{name}</b> may schedule an appointment at
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
                process. <b>{name}</b> may schedule an appointment at
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
                process. <b>{name}</b> may schedule an appointment at
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
                process. <b>{name}</b> may schedule an appointment at
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
                process. <b>{name}</b> may schedule an appointment at
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
                process. <b>{name}</b> may schedule an appointment at
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
            process. <b>{name}</b> may schedule an appointment at
            <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Appointment Form</a>`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    obtain_form: {
        id: 'obtain_form',
        message: `Please select the required form.<br><br>
        1. <a href="https://drive.google.com/file/d/1m0RX6iV98j44J59aWvRUVpwExVQT2LYS/view" target="_blank">Application Form for Estate Administration</a><br>
        2. <a href="https://drive.google.com/file/d/1HedU88RKdbxcU3fjtU8nUQUxxvi7xIoR/view" target="_blank">Checklist of Documents To Be Attached</a><br>
        3. <a href="https://drive.google.com/file/d/1Iw5PPCU704RCX55T7_fNZ7iPFh1McT08/view" target="_blank">Deed of Renunciation</a><br>
        4. <a href="https://drive.google.com/file/d/14vpHwW7ifhdYAXTkaF0dvOqch-pDvkvb/view" target="_blank">Statutory Declaration of Death</a><br>
        5. <a href="https://drive.google.com/file/d/1sq7N2VPONYdnATA-Fm8_UC8mQ-beMr5H/view" target="_blank">Statutory Declaration(Married / Divorced / No Children / SoleHeir / Single)</a><br>
        6. <a href="https://drive.google.com/file/d/1TYJJ-O_mkuioqCmnCkper8vQuqTYA7Zl/view" target="_blank">Letter of Undertaking and Indemnity for Vehicle Ownership Transfer</a><br>
        7. <a href="https://drive.google.com/file/d/1wGZeu1tu3kUgscM6XVOWS5dmjRFfmQNv/view" target="_blank">Confirmation of Bank Account Details Form</a><br>
        8. <a href="https://drive.google.com/file/d/1Nwhv0lP2pCcNgKMbUkRQ3e4ZrmHfPZUp/view" target="_blank">Declaration of Vehicle Ownership Transfer</a><br>
        9. <a href="https://drive.google.com/file/d/1sMYoAe-0iOpgoTc-U50FwTi9-zsbshOO/view" target="_blank">Application Form for Additional Assets / Liabilities</a><br>
        10. <a href="https://drive.google.com/file/d/1P3Ur3CKLcQXVNs9bjhpCkP17vnmzydt6/view" target="_blank">Letter of Vehicle Valuation</a><br>
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
                To <b>{name}</b>’s knowledge, has the deceased’s estate ever been
                administered before?`,
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
        message: `For non-Muslims, the transfer of ownership can only be done if <b>{name}</b> submits the Court Order to ARB Kota Kinabalu for the purpose of resealing at the Sabah High Court.<br><br>
                For Muslims, <b>{name}</b> must submit a new estate application at ARB Kota Kinabalu to be filed through the Syariah Court.<br><br>
                Would <b>{name}</b> like to proceed?`,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_district_office: {
        id: 'sabah_main_yes_district_office',
        message: `
                <b>{name}</b> may submit a new estate application at ARB Kota Kinabalu to be filed through the Civil High Court (for Non-Muslims) or the Syariah Court (for Muslims).<br><br>
                Would <b>{name}</b> like to proceed?
                `,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_native_court: {
        id: "sabah_main_yes_native_court",
        message: `
                For the deceased's estate that cannot be administered through the Native Court, <b>{name}</b> may submit a new estate application at ARB Kota Kinabalu to be filed through the Civil High Court.<br><br>
                Would <b>{name}</b> like to proceed?
                `,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_peninsular_court_no: {
        id: 'sabah_main_yes_peninsular_court_no',
        message: `
                <b>{name}</b> may submit a new estate application at ARB Kota Kinabalu to be filed through the Civil High Court (for non-Muslims) or the Syariah Court (for Muslims).<br><br>
                Would <b>{name}</b> like to proceed?`,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_syriah_court: {
        id: 'sabah_main_yes_syriah_court',
        message: `
                if an Executor (Wasi) or Guardian (Wali Harta) has been appointed by the Syariah  Court, <b>{name}</b> may proceed with the administration granted by the Syariah Court.<br><br>
                However, if the appointed Executor or Guardian fails to carry out their duties, <b>{name}</b> ay appoint Amanah Raya Berhad (ARB) Kota Kinabalu as the new Executor or Guardian by 
                submitting an application to ARB Kota Kinabalu.<br><br> Would <b>{name}</b> like to proceed?
                `,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_kota_kinabalu: {
        id: 'sabah_main_yes_kota_kinabalu',
        message: `If an Administrator has been
                appointed by the High Court,
                <b>{name}</b> may proceed with the
                estate administration as
                ordered by the Court.<br><br>
                However, if the appointed
                Administrator fails to carry out
                their duties, <b>{name}</b> may apply
                to appoint Amanah Raya
                Berhad (ARB) Kota Kinabalu as a
                substitute Administrator by
                submitting an official
                application to ARB Kota
                Kinabalu.<br><br>
                Would <b>{name}</b> like to proceed?`,
        options: [
            { label: '1️⃣ Proceed ', nextStep: 'sabah_main_no' },
            { label: "2️⃣ That's all, Thank you", nextStep: 'exit' },
        ]
    },
    sabah_main_yes_amanah_raya_sabah: {
        id: 'sabah_main_yes_amanah_raya_sabah',
        message: `<b>{name}</b> may complete
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
        message: `Before ARIA provides further explanation, <b>{name}</b> is advised to first review the following
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
            Further explanation only applies if <b>{name}</b>'s information meets the specified criteria.<br><br>
            What was the religion of the deceased?`,
        options: [
            { label: '1️⃣ Muslim', nextStep: 'sabah_muslim' },
            { label: '2️⃣ Non-muslim', nextStep: 'sabah_non_muslim' },
        ]
    },
    sabah_muslim: {
        id: 'sabah_muslim',
        message: `
        1. DECEASED (SIMATI)<br>
        a. Deceased’s Original Death Certificate & 3 certified true copies by JPN (If death occurred overseas, submit the Laporan Kematian Luar Negara issued by JPN).<br>
        b. 3 certified true copies of the Deceased’s Birth Certificate by JPN.<br>
        c. Original Will of the Deceased & 1 copy (if any).<br><br>
        2. DECEASED'S BENEFICIARIES<br>
        a. 3 certified true copies of Identity Card of each beneficiary by JPN.<br>
        b. Proof of relationship with the Deceased:<br>
        i. Spouse – Original Marriage Certificate & 3 certified true copies by the Department of Islamic Religious Affairs of the State of Sabah (JHEAINS) / Sabah Islamic Religious Council (MUIS)<br>
        ii. Children – 3 certified true copies of Birth Certificate of each the  beneficiary by JPN.<br>
        c. 3 certified true copies of Death Certificate (for beneficiary who passed away before / after the Deceased) by JPN.<br><br>
        * If documents such as Birth Certificate / Death Certificate cannot be produced, please obtain them from JPN.<br>
        * For Marriage Certificate, the spouse must obtain it from JHEAINS / MUIS.<br><br>
        3. STATUTORY DECLARATION (PROVIDE ONLY IF RELEVANT)<br>
        To be signed by an independent witness in front of a Commissioner for Oaths and stamped via the Inland Revenue Board (LHDN) website. A copy of the witness’s Identity Card must be included.<br>
        a. Statutory Declaration of Single Status (if the deceased was unmarried).<br>
        b. Statutory Declaration of No Children (if the deceased had no children).<br>
        c. Statutory Declaration of Sole Beneficiary (if there is only one surviving beneficiary).<br><br>
        4. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)<br>
        a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership (front and back) and no outstanding loan / loan fully settled.<br>
        b. 1 copy of the deceased’s account statement / savings book (ASB / Bank / Tabung Haji).<br>
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
        a. Original land title under the Deceased’s name & 1 copy of land title<br>
        b. Native status confirmation (for Native Title land) if beneficiary is not 100% Sabah bumiputera<br><br>
        6. MINIMUM DEPOSIT<br>
        a. RM1,500.00 for movable assets only.<br>
        b. RM2,000.00 for each immovable asset.<br><br>
        7. ADMINISTRATION PERIOD<br>
        Minimum 1 year 6 months from the date of file opening.<br><br>
        8. RELATED FORMS<br>
        a. Application Form For Estate Administration.<br>
        b. Document Checklist to be Attached.<br>
        c. Statutory Declaration (Married / Divorced / No Children / Sole Beneficiary / Single).<br>
        d. Sample – Estate Administration Application Form.<br>
        e. Sample – Statutory Declaration (Married / Divorced / No Children / Sole Beneficiary / Single).<br><br>
        The Application Form must be completed and signed by the Applicant before a Commissioner for Oaths. The completed form must be stamped with RM10.00 online through the Inland Revenue Board (LHDN) <a href="https://stamps.hasil.gov.my/stamps" target="_blank">website</a> <br><br>
        An administration fee will be charged for the estate administration, as follows:<br>
        5% on the first RM25,000.<br>
        4% on the next RM225,000.<br>
        3% on the next RM250,000.<br>
        2% on the next RM500,000.<br>
        1% on the remaining balance.<br><br>
        * Excluding legal fees & third-party charges (e.g., Court, Inland Revenue Board (LHDN), Valuation and Property Services Department (JPPH), etc.).<br><br>
        The completed form along with the required documents may be submitted to ARB Kota Kinabalu for the estate file opening process.<br>
        <b>{name}</b> may schedule an appointment at <a href="https://www.amanahraya.my" target="_blank">AmanahRaya</a><br><br>
        For our branches location, please click <a href="https://www.amanahraya.my/contact-us/branch-locator/" taregt="_blank">here</a><br><br>
        1. On the appointment date, consultation and advisory services can be conducted with our officer.<br>
        2. Document submission and payment can be completed on the same day.<br><br>
        Is there anything else ARIA can assist you with?
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    sabah_non_muslim: {
        id: 'sabah_non_muslim',
        message: `
        1. DECEASED (SIMATI)
        a. Deceased’s Original Death Certificate & 3 certified true copies by JPN (If death occurred overseas, submit the Laporan Kematian Luar Negara issued by JPN).<br>
        b. Original Will of the Deceased & 1 copy (if any).<br><br>
        2. DECEASED'S BENEFICIARIES<br>
        a. 3 certified true copies of Identity Card of each beneficiary by JPN.<br>
        b. Proof of relationship with the Deceased:<br>
        i. Spouse – Original Marriage Certificate & 3 certified true copies by JPN).<br>
        ii. Children – 3 certified true copies of Birth Certificate of each the beneficiary by JPN.<br>
        c. 3 certified true copies of Death Certificate (for beneficiary who passed away before / after the Deceased) by JPN.<br><br>
        * If documents such as Birth Certificate / Death Certificate / MArriage Certificate cannot be produced, please obtain them from JPN.<br><br>
        3. STATUTORY DECLARATION (PROVIDE ONLY IF RELEVANT)<br>
        To be signed by an independent witness in front of a Commissioner or Oaths and stamped via the Inland Revenue Board (LHDN) website. A copy of the witness’s Identity Card must be included.<br>
        a. Statutory Declaration of Single Status (if the deceased was unmarried).<br>
        b. Statutory Declaration of No Children (if the deceased had no children).<br>
        c. Statutory Declaration of Sole Beneficiary (if there is only one surviving beneficiary).<br><br>
        4. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)<br>
        a. 1 copy of Vehicle Grant / Certificate of Vehicle Ownership (front and back) and no outstanding loan / loan fully settled.<br>
        b. 1 copy of the deceased’s account statement / savings book (ASB / Bank / Tabung Haji).<br>
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
        a. Original land title under the Deceased’s name & 1 copy of land title<br>
        b. Native status confirmation (for Native Title land) if beneficiary is not 100% Sabah bumiputera<br><br>
        6. MINIMUM DEPOSIT<br>
        a. RM1,500.00 for movable assets only<br>
        b. RM2,000.00 for each immovable asset<br><br>
        7. ADMINISTRATION PERIOD<br>
        Minimum 1 year 6 months from the date of file opening<br>
        8. RELATED FORMS<br>
        a. Application Form For Estate Administration.<br>
        b. Document Checklist to be Attached.<br>
        c. Sample – Estate Administration Application Form.<br><br>
        The Application Form must be completed and signed by the Applicant before a Commissioner for Oaths. The completed form must be stamped with RM10.00 online through the Inland Revenue Board (LHDN) <a href="https://stamps.hasil.gov.my/stamps" target="_blank">website</a> <br><br>
        An administration fee will be charged for the estate administration, as follows:<br>
        5% on the first RM25,000.<br>
        4% on the next RM225,000.<br>
        3% on the next RM250,000.<br>
        2% on the next RM500,000.<br>
        1% on the remaining balance.<br><br>
        * Excluding legal fees & third-party charges (e.g., Court, Inland Revenue Board (LHDN), Valuation and Property Services Department (JPPH), etc.).<br><br>
        The completed form along with the required documents may be submitted to ARB Kota Kinabalu for the estate file opening process.<br>
        <b>{name}</b> may schedule an appointment at <a href="https://www.amanahraya.my" target="_blank">AmanahRaya</a><br><br>
        For our branches location, please click <a href="https://www.amanahraya.my/contact-us/branch-locator/" taregt="_blank">here</a><br><br>
        1. On the appointment date, consultation and advisory services can be conducted with our officer.<br>
        2. Document submission and payment can be completed on the same day.<br><br>
        Is there anything else ARIA can assist you with?
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    // The below steps are belong to Serawak
    serawak: {
        id: 'serawak',
        message: `To <b>{name}</b>’s knowledge, has the deceased’s estate ever been administered before?`,
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
        message: `<b>{name}</b> may refer to the District Office for the administration of the deceased’s additional assets.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    serawak_main_yes_amanah_raya: {
        id: 'serawak_main_yes_amanah_raya',
        message: `
        <b>{name}</b> may complete the additional assets form below and submit the form along with the required documents to
         the Kuching branch for the issuance of the <a href="https://drive.google.com/file/d/187OrybkH0m6xPbS65gU6aj3L5lP5XZXZ/view" target="_blank">Supplementary Letter of Administration.</a><br><br>`, // Do it form
        options: []
    },
    serawak_main_yes_civil_court: {
        id: 'serawak_main_yes_civil_court',
        message: `
        Has the property in Sarawak been included in the previous estate administration that was carried out?
        `,
        options: [
            { label: '1️⃣ Yes ', nextStep: 'serawak_main_yes_civil_court_yes' },
            { label: '2️⃣ No', nextStep: 'serawak_main_no' },
        ]
    },
    serawak_main_yes_civil_court_yes: {
        id: 'serawak_main_yes_civil_court_yes',
        message: `
                For the transfer of ownership of the property, <b>{name}</b> will need to undergo the resealing process at Amanah Raya Berhad Kuching.<br><br>
                <b>{name}</b> may visit our Kuching branch for further expalanation.
                `,
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
        Further explanation only applies if <b>{name}</b>'s information meets the specified criteria.<br><br>
        Did the deceased leave a will, and who is the Executor named in the will?`,
        options: [
            { label: '1️⃣ No will left by the deceased ', nextStep: 'sabah_main_no_deceased' },
            { label: '2️⃣ Have a will, and the executor is other than ARB', nextStep: 'sabah_main_no_have_will' },
            { label: '3️⃣ Have a will, and the executor is ARB', nextStep: 'sabah_main_no_have_will' },
        ]
    },
    abah_main_no_deceased: {
        id: 'abah_main_no_deceased',
        message: `
        1. DECEASED (SIMATI)<br>
        a. Deceased's Original Death Certificate & 1 copy (If death occurred overseas, submit the Death Certificate issued by the relevant country together with confirmation of death from the Malaysian
        Embassy, or Overseas Death Report issued by JPN) OR<br>
        b. Presumption of Death Order from the High Court (Civil) & 1 copy.<br>
        c. Copy of Marriage / Divorce Certificate / Decree Nisi Absolute.<br><br>
        2. DECEASED'S BENEFICIARY<br>
        a. 1 copy of Identity Card of beneficiary / applicant.<br>
        b. 1 copy of proof of relationship to the Deceased (e.g.: Birth Certificate, Marriage Certificate).<br>
        c. 1 copy of Death Certificate (for heirs who passed away before / after the Deceased).<br><br>
        3. STATUTORY DECLARATION<br>
        a. Statutory Declaration by applicant (if beneficiary’s Death Certificate cannot be produced) – LA 1 (Swk. 1/2017).<br>
        b. Statutory Declaration by applicant and 2 independent witnesses (if Marriage Certificate cannot be produced) – LA 2 (Swk. 1/2017) & LA 3 (Swk. 1/2017).<br>
        c. Statutory Declaration by applicant (for application of Letter of Administration) – LA 5 (Swk. 1/2017).<br>
        d. Statutory Declaration by an independent witness who knew the Deceased to confirm the marital status of the Deceased OR confirmation by Clan Association / Village Head / Community 
        Leader / Religious Leader (if the Deceased was single).<br><br>
        * The declarations must be signed by the applicant / independent witness before a Commissioner for Oaths and stamped 
        online at the Inland Revenue Board (LHDN) website. Copies of applicant’s / witness’s identity card must be attached.<br><br>
        4. OTHER DOCUMENTS<br>
        a. Letter of confirmation by next-of-kin from Clan Association / Temenggong / Penghulu – LA 4 (Swk. 1/2017).<br>
        b. Letter of consent by beneficiaries / next-of-kin of the Deceased – LA 6 (Swk. 1/2017).<br>
        c. Police Report / Complete Police Investigation Report (if death was caused by accident), together with a letter from the applicant stating intention to pursue related legal action.<br>
        d. Letter from applicant stating there is no requirement for valuation of the Deceased’s assets such as land, shares, vehicles, etc. – LA 7 (Swk. 1/2017).<br>
        e. Trust Undertaking Form – TU (Swk. 1/2017) (if applicable).<br><br>
        5. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)<br>
        a. 1 copy of Savings Account Book / Current Account Statement (latest) / Fixed Deposit Statement / Fixed Deposit Receipt / Security Deposit Receipt.<br>
        b. 1 copy of Bursa Malaysia Share Certificate / CDS Account Statement.<br>
        c. 1 copy of EPF Statement or confirmation letter from EPF stating total balance.<br>
        d. 1 copy of Insurance Policy or confirmation letter from the insurance company stating the payable amount.<br>
        e. For business: 3 copies of Trading Account, Profit & Loss Account, and Balance Sheet as of the date of death.<br>
        i. If sole proprietorship – must be confirmed by next-of-kin and attached with company stamp.<br>
        ii. If holding company shares – must submit a search from SSM.<br>
        iii. If partnership – must be confirmed by surviving partner(s) and attached with company stamp & copy of business registration from LHDN / District Office.<br>
        f. 1 copy of Grant / Vehicle Ownership Certificate (front and back).<br>
        g. 1 copy of Firearm License.<br>
        h. Letter from employer confirming salary/bonus of the Deceased (if any).<br><br>
        6. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE)<br>
        a. Copy of Land Title and Official Search from Land Office / Memorandum of Transfer / Sale & Purchase Agreement / Tenancy Agreement / Power of Attorney.<br><br>
        7. ADMINISTRATION FEES<br>
        a. RM300.00 (No valuation of movable and immovable assets).<br>
        b. RM150.00 (If valuation of movable and immovable assets is less than RM100,000).<br>
        c. RM300.00 (If movable and immovable assets valued between RM100,000 and RM1 million).<br>
        d. RM500.00 (If movable and immovable assets valued at RM1 million and above).<br>
        e. RM350.00 (For applications by foreign citizens).<br><br>
        8. ADMINISTRATION PERIOD<br>
        30 working days.<br><br>
        9. RELATED FORMS<br>
        a. Application for Letter of Administration.<br>
        b. Statutory Declaratin – LA 1 (Swk. 1/2017).<br>
        c. Letter of Next-of-Kin – LA 4 (Swk. 1/2017).<br>
        d. Statutory Declaration (by applicant) – LA 5 (1/2017).<br>
        e. Consent to Grant of Letter of Administration – LA 6 (1/2017).<br>
        f. No valuation letter – LA 7 (Swk.1/2017).<br><br>
        The completed form along with the required documents may be submitted to ARB Kota Kinabalu for the estate file opening process.<br>
        <b>{name}</b> may schedule an appointment at <a href="https://www.amanahraya.my" target="_blank">AmanahRaya</a><br><br>
        For our branches location, please click <a href="https://www.amanahraya.my/contact-us/branch-locator/" taregt="_blank">here</a><br><br>
        1. On the appointment date, consultation and advisory services can be conducted with our officer.<br>
        2. Document submission and payment can be completed on the same day.<br><br>
        Is there anything else ARIA can assist you with?
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    sabah_main_no_have_will: {
        id: 'sabah_main_no_have_will',
        message: `
        1. DECEASED (SIMATI)<br>
        a. Deceased's Original Death Certificate & 1 copy (If death occurred overseas, submit the Death Certificate issued by the relevant country together with confirmation of death from the Malaysian Embassy, or Overseas Death Report issued by JPN) OR<br>
        b. Presumption of Death Order from the High Court (Civil) & 1 copy.<br>
        c. Original Will of the Deceased & 2 copies (certified true copies are not required)<br><br>
        2. WASI / EXECUTOR<br>
        a. 1 copy of Identity Card of Wasi / Executor.<br><br>
        3. STATUTORY DECLARATION<br>
        a. Statutory Declaration by 2 witnesses of the Deceased’s Will (for the purpose of witness confirmation).<br>
        b. Statutory Declaration by Wasi / Executor (for application of Grant of Probate for administration of the Deceased’s estate) – P1 (Swk. 1/2005).<br><br>
        * The declarations must be signed by the witness / Executor before a Commissioner for Oaths and stamped online at the Inland Revenue Board (LHDN) website. 
        Copies of applicant’s / witness’s identity card must be attached.<br><br>
        4. OTHER DOCUMENTS<br>
        a. Letter from applicant stating there is no requirement for valuation of the Deceased’s assets such as land, shares, vehicles, etc. - P2 (Swk. 1/2005).<br><br>
        5. MOVABLE ASSETS (PROVIDE ONLY IF APPLICABLE)<br>
        a. 1 copy of Savings Account Book / Current Account Statement (latest) / Fixed Deposit Statement / Fixed Deposit Receipt / Security Deposit Receipt.<br>
        b. 1 copy of Bursa Malaysia Share Certificate / CDS Account Statement.<br>
        c. 1 copy of EPF Statement or confirmation letter from EPF stating total balance.<br>
        d. 1 copy of Insurance Policy or confirmation letter from the insurance company stating the payable amount.<br>
        e. For business: 3 copies of Trading Account, Profit & Loss Account, and Balance Sheet as of the date of death.<br>
        i. If sole proprietorship – must be confirmed by next-of-kin and attached with company stamp.<br>
        ii. If holding company shares – must submit a search from SSM.<br>
        iii. If partnership – must be confirmed by surviving partner(s) and attached with company stamp & copy of business registration from LHDN / District Office.<br>
        f. 1 copy of Grant / Vehicle Ownership Certificate (front and back).<br>
        g. 1 copy of Firearm License.<br>
        h. Letter fr.<br><br>
        6. IMMOVABLE PROPERTY (PROVIDE ONLY IF APPLICABLE)<br>
        a. Copy of Land Title and Official Search from Land Office / Memorandum of Transfer / Sale & Purchase Agreement / Tenancy Agreement / Power of Attorney.<br><br>
        7. ADMINISTRATION FEES<br>
        a. RM300.00 (No valuation of movable and immovable assets).<br>
        b. RM150.00 (If valuation of movable and immovable assets is less than RM100,000).<br>
        c. RM300.00 (If movable and immovable assets valued between RM100,000 and RM1 million).<br>
        d. RM500.00 (If movable and immovable assets valued at RM1 million and above).<br>
        e. RM350.00 (For applications by foreign citizens).<br><br>
        8. ADMINISTRATION PERIOD<br>
        30 working days.<br><br>
        9. RELATED FORMS<br>
        a. Application for Probate of the Will.<br>
        b. Statutory Declaration – P1 (Swk. 1/2005).<br>
        c. No valuation letter – P2 (Swk. 1/2005).<br><br>
        The completed form along with the required documents may be submitted to ARB Kota Kinabalu for the estate file opening process.<br>
        <b>{name}</b> may schedule an appointment at <a href="https://www.amanahraya.my" target="_blank">AmanahRaya</a><br><br>
        For our branches location, please click <a href="https://www.amanahraya.my/contact-us/branch-locator/" taregt="_blank">here</a><br><br>
        1. On the appointment date, consultation and advisory services can be conducted with our officer.<br>
        2. Document submission and payment can be completed on the same day.<br><br>
        Is there anything else ARIA can assist you with?
        `,
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
        message: `
            Okay. ARIA will list down the required documents.<br><br>
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
            Which delivery method is more convenient for <b>{name}</b>?
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
                website at the branch counter during the file opening process. <b>{name}</b>
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
                <b>{name}</b> will be contacted for online payment once the documents have been received.<br><br>
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
                <b>{name}</b> will be contacted for online payment once the documents have been received.<br><br>
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
                today, <b>{name}</b>?`,
        options: [
            { label: '1️⃣ Check current status ', nextStep: 'pusaka_estate_check_status' },
            { label: '2️⃣ Obtaining a copy of the Letter of Administration (LOA)', nextStep: 'pusaka_estate_admin' },
            { label: '3️⃣ Registering additional assets of the deceased', nextStep: 'pukasa_add_asset' },
        ]
    },
    pusaka_estate_check_status: {
        id: 'pusaka_estate_check_status',
        message: `File status can also be
                checked at <a href="https://online.amanahraya.my/estate_online/" target="_blank">Status</a><br><br>
                Kindly provide your name.`,
        options: [],
        expectsInput: true
    },
    pusaka_estate_admin: {
        id: 'pusaka_estate_admin',
        message: `Is <b>{name}</b> a deceased's beneficiary?`,
        options: [
            { label: '1️⃣ Yes ', nextStep: 'pusaka_estate_admin_yes' },
            { label: '2️⃣ No', nextStep: 'pusaka_estate_admin_no' },
        ]
    },
    pusaka_estate_admin_yes: {
        id: 'pusaka_estate_admin_yes',
        message: `List of documents
                required from
                beneficiary to apply for
                LA copy :
                (1) Personal Data
                Access and Change
                Form (to be completed
                by the Applicant)
                (2) A copy of the
                Identity Card of the
                Applicant
                (3) A copy of the letter
                from the Small Estates
                Unit (if applicable).<br><br>
                RELATED FORMS<br>
                a) Personal Data Access and Change Form.<br>
                b) Sample - Personal Data Access and Change Form.<br><br>
                Which delivery method is more convenient for <b>{name}</b>?`,
        options: [
            { label: '1️⃣ Counter ', nextStep: 'pusaka_estate_admin_counter' },
            { label: '2️⃣ Post', nextStep: 'pusaka_estate_admin_post' },
            { label: '3️⃣ Email / WhatsApp', nextStep: 'pusaka_estate_register_email' },
        ]
    },
    pusaka_estate_admin_counter: {
        id: 'pusaka_estate_admin_counter',
        message: `Please visit our nearest branch for submission.<br><br>
        Branch information can be found at: <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a><br><br>
        There will be charges imposed, and the amount will be determined by the branch upon receipt of the documents.<br><br>
        Payment can be made via cash, QR code, or debit/credit card.<br><br>
        A copy of the LA will be handed over to <b>{name}</b> within 7 working days.<br><br>
        May ARIA know how this document will be delivered to <b>{name}</b>?
        `,
        options: [
            { label: '1️⃣ Collection at the counter ', nextStep: 'collection_counter' },
            { label: '2️⃣ Registered post', nextStep: 'registered_post' },
        ]
    },
    collection_counter: {
        id: 'collection_counter',
        message: `Please 
        <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">
        Schedule Appointment
        </a><br><br>
        Is there anything else ARIA can assist you with?`,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    registered_post: {
        id: 'registered_post',
        message: `The documents will be posted
                to the address stated in the
                application form. An additional
                RM10 will be charged.<br><br>
                Is there anything else ARIA can assist you with?
                `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    pusaka_estate_admin_post: {
        id: 'pusaka_estate_admin_post',
        message: `
        You may post the documents to the branch where the file was registered.<br><br>
        Branch information can be found at: <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a><br><br>
        There will be charges imposed, and the amount will be determined by the branch upon receipt of the documents.<br><br>
        <b>{name}</b> will be contacted by the branch for online payment once the documents are received.<br><br>
        A copy of the LA will be handed over to <b>{name}</b> within 7 working days.<br><br>
        May ARIA know how this document will be delivered to <b>{name}</b>?
        `,
        options: [
            { label: '1️⃣ Collection at the counter ', nextStep: 'collection_counter' },
            { label: '2️⃣ Registered post', nextStep: 'registered_post' },
        ]
    },
    pusaka_estate_register_email: {
        id: 'pusaka_estate_register_email',
        message: `
        Clear documents can be sent via email to crmd@arb.com.my or WhatsApp us at 03-2055 7557.<br><br>
        There will be charges imposed, and the amount will be determined by the branch upon receipt of the documents.<br><br>
        <b>{name}</b> will be contacted by the branch for online payment once the documents are received.<br><br>
        A copy of the LA will be handed over to <b>{name}</b> within 7 working days.<br><br>
        May ARIA know how this document will be delivered to <b>{name}</b>?
        `,
        options: [
            { label: '1️⃣ Collection at the counter ', nextStep: 'collection_counter' },
            { label: '2️⃣ Registered post', nextStep: 'registered_post' },
        ]
    },
    pusaka_estate_admin_no: {
        id: 'pusaka_estate_admin_no',
        message: `
        What is <b>{name}'s</b> relationship with the deceased?
        `,
        options: [
            { label: "1️⃣ Beneficiary's representative", nextStep: 'pusaka_estate_admin_no_beneficiary' },
            { label: '2️⃣ Lawyer appointed by the beneficiary', nextStep: 'pusaka_estate_admin_no_lawyer_beneficiary' },
        ]
    },
    pusaka_estate_admin_no_beneficiary: {
        id: 'pusaka_estate_admin_no_beneficiary',
        message: `
        List of documents required from beneficiary's representative to apply for LA copy:<br><br>
        (1) Appointment letter from the beneficiary.<br>
        (2) Personal Data Access and Change Form (to be completed by the same beneficiary as stated in the appointment letter).<br>
        (3) A copy of the Identity Card of both the representative and the appointing beneficiary.<br>
        (4) A copy of the letter from the Small Estate Unit (if applicable)<br><br>
        RELATED FORMS<br>
        a) Personal Data Access and Change Form.<br>
        b) Sample - Personal Data Access and Change Form.<br><br>
        Which delivery method is more convenient for <b>{name}</b>?
        `,
        options: [
            { label: '1️⃣ Counter ', nextStep: 'pusaka_estate_admin_counter' },
            { label: '2️⃣ Post', nextStep: 'pusaka_estate_admin_post' },
            { label: '3️⃣ Email / WhatsApp', nextStep: 'pusaka_estate_register_email' },
        ]
    },
    pusaka_estate_admin_no_lawyer_beneficiary: {
        id: 'pusaka_estate_admin_no_lawyer_beneficiary',
        message: `
        List of documents required from lawyer to apply for LA copy:<br><br>
        (1) Lawyer's Appointment Notice<br>
        (2) Official Letter from lawyer firm<br>
        (3) Personal Data Access and Change Form (to be completed by the Applicant)<br>
        (4) A copy of the Identity Card of the client<br><br>
        RELATED FORMS<br>
        a) Personal Data Access and Change Form.<br>
        b) Sample - Personal Data Access and Change Form.<br><br>
        Which delivery method is more convenient for <b>{name}</b>?
        `,
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
        Can ARIA know what <b>{name}</b> wants to know about?
        `,
        options: [
            { label: '1️⃣ General Inquiry', nextStep: 'will_general_inquiry' },
            { label: '2️⃣ Will Application', nextStep: 'will_application' },
            { label: '3️⃣ Custody of External Wills at ARB', nextStep: 'will_custody' },
        ]
    },
    will_custody: {
        id: 'will_general_inquiry',
        message: `
        ARIA wishes to inform that an external will
        refers to a will prepared by a party other
        than ARB, which can nonetheless be securely
        stored with ARB.<br><br>
        Advantages of Storing a Will with ARB:<br>
        1. Guaranteed Security.<br>
        2. Easy and Organized Access.<br>
        3. Confidentiality is Preserved.<br>
        4. Simplifies the Process for Heirs.<br><br>
        <b>{name}</b> Whose will would you like to store?
        `,
        options: [
            { label: '1️⃣ My will ', nextStep: 'will_custody_common' },
            { label: "2️⃣ My client's will ", nextStep: 'will_custody_common' },
            { label: '3️⃣ The will of my customer', nextStep: 'will_custody_common' },
        ]
    },
    will_custody_common: {
        id: 'will_custody_common',
        message: `
        May ARIA know who has been appointed as the executor in the will?<br><br>
        An executor refers to the individual appointed in the will to manage the estate after the death of the testator.
        `,
        options: [
            { label: '1️⃣ Amanah Raya Berhad ', nextStep: 'will_custody_amanah_raya_berhad' },
            { label: "2️⃣ Other than Amanah Raya Berhad ", nextStep: 'other_than_amanah_rayah_berhad' },
        ]
    },
    will_custody_amanah_raya_berhad: {
        id: 'will_custody_amanah_raya_berhad',
        message: `
        Excellent!!! <b>{name}</b> has chosen the right executor.<br><br>
        Please visit any of our nearby branches and bring along the following documents:<br>
        1. <a href="https://drive.google.com/file/d/13si6oc13MdvQDy7WYzFWbvz7MTHVYb_9/view">Will Application Form.</a><br>
        2. Original will.<br>
        3. Copies of the identification cards of the testator and the will’s witnesses.<br>
        4. Storage fee: RM400 (payment can be made via cash, debit/credit card, or QR code).<br><br>
        Branch information can be found at: <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a><br><br>
        <b>{name}</b> will receive a confirmation email once the will storage process is completed.<br><br>
        Is there anything else that ARIA can help you with?
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    other_than_amanah_rayah_berhad: {
        id: 'other_than_amanah_rayah_berhad',
        message: `
        Excellent!!! <b>{name}</b> has chosen the right executor.<br><br>
        Please visit any of our nearby branches and bring along the following documents:<br>
        1. <a href="https://drive.google.com/file/d/13si6oc13MdvQDy7WYzFWbvz7MTHVYb_9/view">Will Application Form.</a><br>
        2. Original will.<br>
        3. Copies of the identification card.<br>
        4. Storage fee: RM600 (payment can be made via cash, debit/credit card, or QR code).<br><br>
        Branch information can be found at: <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a><br><br>
        <b>{name}</b> will receive a confirmation email once the will storage process is completed.<br><br>
        Is there anything else that ARIA can help you with?
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    will_application: {
        id: 'will_application',
        message: `
        Have you previously prepared a will with another party, <b>{name}</b>?
        `,
        options: [
            { label: '1️⃣ Yes ', nextStep: 'will_application_yes' },
            { label: "2️⃣ No ", nextStep: 'will_application_no' },
        ]
    },
    will_application_yes: {
        id: 'will_application',
        message: `
        Congratulations on taking the step to plan your estate.<br><br>
        Please be informed that any previous will shall be revoked if you create a new will with AmanahRaya, <b>{name}</b>.<br><br>
        Would you like ARIA to continue?
        `,
        options: [
            { label: '1️⃣ Yes ', nextStep: 'will_application_no' },
            { label: "2️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    will_application_no: {
        id: 'will_application_no',
        message: `
        Would you like to know moreabout Islamic Wills or Non-Islamic Wills,<b>{name}</b>?
        `,
        options: [
            { label: '1️⃣ Muslim Will ', nextStep: 'muslim_wills' },
            { label: "2️⃣ Non-Islamic Wills", nextStep: 'none_muslim_wills' }
        ]
    },
    muslim_wills: {
        id: 'muslim_wills',
        message: `
        AmanahRaya offers two types of wills:<br><br>
        Basic Will:<br>
        A document that appoints an executor to manage the estate, including the settlement of debts and distribution of the remaining
        assets in accordance with the faraid (Islamic inheritance law). Additionally, it allows the testator to allocate up to one-third of their
        total assets to non-beneficiaries.<br><br>
        Comprehensive Will:<br>
        A directive made by an individual prior to death to distribute a portion of their assets to specific recipients, whether beneficiaries
        or non-beneficiaries, in accordance with Islamic principles. This will aims to ensure fair estate management, including the 
        settlement of debts and the distribution of up to one-third of the estate to beneficiaries (subject to the respective State Will
        Enactments and Shariah rulings) and non-beneficiaries, without infringing upon the rightful entitlements of beneficiaries as
        determined by faraid. It may also include specific instructions such as the guardianship of minor children, fulfillment of financial
        obligations, donations to charitable organisations, and personal messages to beneficiaries. The comprehensive will ensures clearer
        estate planning, prevents disputes among beneficiaries, and facilitates a smoother estate administration process after the testator's death.<br><br>
        For a detailed comparison between the Basic and Comprehensive Will, please click: <a href="https://www.amanahraya.my/ms/perkhidmatan-wasiat/" target="_blank">Will's Services</a> <br><br>
        Which type of will are you interested in, <b>{name}</b>?

        `,
        options: [
            { label: '1️⃣ Basic Will  ', nextStep: 'muslim_wills_basic' },
            { label: "2️⃣ Comprehensive Will", nextStep: 'muslim_wills_comprehensive' }
        ]
    },
    muslim_wills_basic: {
        id: 'muslim_wills_basic',
        message: `
        Congratulations on taking the step to plan your estate.<br><br>
        Will Executor: AmanahRaya.<br>
        Preparation Time: 1 working day.<br>
        Will Fee: RM500 (includes consultation, preparation, and custodian services).<br><br>
        Shall Aria proceed with the application process?
        `,
        options: [
            { label: '1️⃣ Please, proceed ', nextStep: 'muslim_wills_basic_proceed' },
            { label: "2️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    muslim_wills_basic_proceed: {
        id: 'muslim_wills_basic_proceed',
        message: `
        The application can be made in several ways. Which one would you prefer,<b>{name}</b>?
        `,
        options: [
            { label: '1️⃣ MyAmanahRaya Apps ', nextStep: 'muslim_wills_basic_proceed_amanah_raya_app' },
            { label: "2️⃣ Online Will Application ", nextStep: 'muslim_wills_basic_proceed_amanah_raya_app_online' },
            { label: '3️⃣ Counter', nextStep: 'muslim_wills_basic_proceed_counter' },
        ]
    },
    muslim_wills_basic_proceed_amanah_raya_app: {
        id: 'muslim_wills_basic_proceed_amanah_raya_app',
        message: `
        1. Download the MyAmanahRaya app from Google Play or Apple App Store.<br>
        2.Register for access.<br>
        3.Select “Will”.<br>
        4. Choose a nearby agent for a face-to-face session or proceed directly within the app.<br><br>
        Would <b>{name}</b> like to do it through an agent or online?
        `,
        options: [
            { label: '1️⃣ Agent ', nextStep: 'muslim_wills_basic_proceed_amanah_raya_app_agent' },
            { label: "2️⃣ Online", nextStep: 'muslim_wills_basic_proceed_amanah_raya_app_online' },
        ]
    },
    muslim_wills_basic_proceed_amanah_raya_app_agent: {
        id: 'muslim_wills_basic_proceed_amanah_raya_app_agent',
        message: `
        1.Select a nearby agent.<br>
        2.The agent will contact you to schedule an appointment.<br>
        3.Consultation will be conducted on the agreed date.<br>
        4.The agent will assist with the application and online payment.<br>
        5.Print and sign the Basic Will with the agent present.<br>
        6.The original will is submitted by the agent to the nearest branch.<br>
        7.A duplicate copy of the will is handed over to you, <b>{name}</b>, for safekeeping.<br><br>
        Upon successful receipt and storage of your Original Will by AmanahRaya, you will be sent a confirmation email and a Will e-card.<br><br>
        If you’ve reached this stage, ARIA congratulates you on successfully planning your future.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    muslim_wills_basic_proceed_amanah_raya_app_online: {
        id: 'muslim_wills_basic_proceed_amanah_raya_app_online',
        message: `
        1. Please visit <a href="https://willwriting.amanahraya.com.my/" target="_blank">Will Writing</a><br>
        2. Register for access.<br>
        3. Proceed with writing your will and making payment by following the on-screen instructions.<br><br>
        1. The Basic Will can be printed either by yourself or at our branch.<br>
        2. If self-printing, please follow the provided online instructions.<br>
        3. If printing at a branch, please call Talian Mesra 03-2723 7273 to schedule an appointment.<br>
        4. The signing will take place with our officer on the scheduled date.<br>
        5. The original will is kept by AmanahRaya, while the duplicate will is given to <b>{name}</b> forsafekeeping.<br>
        Upon successful receipt and storage of your Original Will by AmanahRaya, you will be sent a confirmation email and a Will e-card.<br><br>
        If you’ve reached this stage, ARIA congratulates you on successfully planning your future.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    muslim_wills_basic_proceed_counter: {
        id: '',
        message: `
        Please submit the application form together with the following documents:<br>
        1. <a href="https://drive.google.com/file/d/191q6_ZU-Lfr-MkUUexR0OEsrKRh47Pdq/view" target="_blank">Basic Will Application Form.</a><br>
        2. Copy of the testator’s Identification Card.<br>
        3. Copy of the beneficiary’s Identification Card.<br>
        4. Basic Will Fee: RM500 (Payment can be made via cash, debit/credit card, or QR code<br><br>
        Please visit any of our nearest branch. You may schedule an appointment via this link:<br>
        <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">
        Schedule Appointment
        </a><br><br>
        Branch information can be found at: <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a><br><br>
        On the Appointment Date:<br>
        1. You can have a consultation with our officer.<br>
        2. Submission of documents and payment can be completed on thesame day.<br>
        3. Signing will take place in the presence of our officer.<br>
        4. The Original Will will be securely kept by AmanahRaya.<br>
        5. A Duplicate Will will be handed to you, <b>{name}</b>, for safekeeping.<br><br>
        Upon successful receipt and storage of your Original Will by AmanahRaya, you will be sent a confirmation email and a Will e-card.<br><br>
        If you’ve reached this stage, ARIA congratulates you on successfully planning your future.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    muslim_wills_comprehensive: {
        id: 'muslim_wills_comprehensive',
        message: `
        Congratulations on taking the step to plan your estate.<br><br>
        Will Executor: AmanahRaya Preparation Time: 7 working days Will Fee: RM1,200 (This includes consulltation, preparation, and custodian services).<br><br>
        Shall Aria proceed with the application process?

        `,
        options: [
            { label: '1️⃣ Please, proceed ', nextStep: 'muslim_wills_comprehensive_proceed' },
            { label: "2️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    muslim_wills_comprehensive_proceed: {
        id: 'muslim_wills_comprehensive_proceed',
        message: `
        The application can be made in several ways. Which one would you prefer,<b>{name}</b>?
        `,
        options: [
            { label: '1️⃣ MyAmanahRaya Apps ', nextStep: 'muslim_wills_comprehensive_proceed_amanah_raya_app' },
            { label: "2️⃣ Online Will Application ", nextStep: 'muslim_wills_comprehensive_proceed_amanah_raya_app_online' },
            { label: '3️⃣ Counter', nextStep: 'muslim_wills_comprehensive_proceed_counter' },
        ]
    },
    muslim_wills_comprehensive_proceed_amanah_raya_app: {
        id: 'muslim_wills_comprehensive_proceed_amanah_raya_app',
        message: `
        1. Download the MyAmanahRaya app from Google Play or Apple App Store.<br>
        2. Register for access.<br>
        3. Select “Will”.<br>
        4. Choose a nearby agent for a face-to-face session or proceed directly within the app.<br><br>
        Would <b>{name}</b> like to do it through an agent or online?
        `,
        options: [
            { label: '1️⃣ Agent ', nextStep: 'muslim_wills_comprehensive_proceed_amanah_raya_app_agent' },
            { label: "2️⃣ Online", nextStep: 'muslim_wills_comprehensive_proceed_amanah_raya_app_online' },
        ]
    },
    muslim_wills_comprehensive_proceed_amanah_raya_app_agent: {
        id: 'muslim_wills_comprehensive_proceed_amanah_raya_app_agent',
        message: `
        1. Our drafer will prepare the draft within 7 working days from the date of application registration and will email it to you.<br>
        2. Please provide feedback on whether you agree with the draft or require any amendments.<br>
        3. If you agree, set an appointment at your preferred branch for signing.<br>
        4. The signing will be done together with our officer on the appointment date.<br>
        5. The Original Will will be securely kept by AmanahRaya. A Duplicate Will will be handed to you, <b>{name}</b>, for safekeeping.<br><br>
        Upon successful receipt and storage of your Original Will by AmanahRaya, you will be sent a confirmation email and a Will e-card.<br><br>
        If you’ve reached this stage, ARIA congratulates you on successfully planning your future.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    muslim_wills_comprehensive_proceed_amanah_raya_app_online: {
        id: 'muslim_wills_comprehensive_proceed_amanah_raya_app_online',
        message: `
        1. Please visit <a href="https://willwriting.amanahraya.com.my/" target="_blank">Will Writing</a><br>
        2. Register for access.<br>
        3. Proceed with writing your will and making payment by following the on-screen instructions.<br><br>
        1. Our drafer will prepare the draft within 7 working days from the date of application registration and will email it to you.<br>
        2. Please provide feedback on whether you agree with the draft or require anyamendments.<br>
        3. If you agree, set an appointment at your preferred branch for signing.<br>
        4. The signing will be done together with our officer on the appointment date.<br>
        5. The Original Will will be securely kept by AmanahRaya. A Duplicate Will will be handed to you, <b>{name}</b>, for safekeeping.<br><br>
        Upon successful receipt and storage of your Original Will by AmanahRaya, you will be sent a confirmation email and a Will e-card.<br><br>
        If you’ve reached this stage, ARIA congratulates you on successfully planning your future.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    muslim_wills_comprehensive_proceed_counter: {
        id: 'muslim_wills_comprehensive_proceed_counter',
        message: `
        Please submit the application form along with the following documents:<br>
        1. <a href="https://drive.google.com/file/d/13si6oc13MdvQDy7WYzFWbvz7MTHVYb_9/view">Will Application Form.</a><br>
        2. Copy of the testator’s Identification Card.<br>
        3. Copy of the beneficiary’s Identification Card.<br>
        4. Copy of the guardian’s Identification Card (if applicable).<br>
        5. Copies of documents related to assets/liabilities mentioned in the will.<br>
        6. Comprehensive Will Fee: RM1,200 (Payment can be made via cash, debit/credit card, or QR code).<br>.<br>
        Please visit any of our nearest branch. You may schedule an appointment via this link:<br>
        <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">
        Schedule Appointment
        </a><br><br>
        Branch information can be found at: <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a><br><br>
        On the Appointment Date:<br>
        1. You can have a consultation with our officer.<br>
        2. Submission of documents and payment can be done on the same day.<br>
        3. Our drafter will prepare the draft within 7 working days from the date of registration and email it to you.<br>
        4. Please confirm whether you agree with the content or request amendments.<br>
        5. If you agree, set an appointment at a nearby branch for the signing process.<br>
        6. The signing will be done together with our officer on the appointment date.<br>
        7. The Original Will will be securely kept by AmanahRaya. A Duplicate Will will be handed to you, <b>{name}</b>, for safekeeping.<br>
        Upon successful receipt and storage of your Original Will by AmanahRaya, you will be sent a confirmation email and a Will e-card.<br><br>
        If you’ve reached this stage, ARIA congratulates you on successfully planning your future.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    none_muslim_wills: {
        id: 'none_muslim_wills',
        message: `
        AmanahRaya Offers Two Types of Wills:<br><br>
        Basic Will:<br>
        A document that appoints Amanah Raya Berhad to manage the estate, including debt settlement, in accordance with the Wills
        Act 1959. This will states only the name of the beneficiary and the share to be received, without detailing the types of assets
        involved.<br><br>
        Comprehensive Will:<br>
        A more detailed and complete legal document that outlines the testator’s wishes for the management and distribution of their
        assets after death. It not only includes the appointment of an executor and the distribution of assets to chosen beneficiaries,
        but may also contain specific instructions such as guardianship of minor children, fulfillment of financial obligations, charitable
        donations, and personal messages to beneficiaries. A Comprehensive Will ensures clearer estate planning, reduces the
        likelihood of disputes among beneficiaries, and facilitates the estate administration process after the testator’s passing.
        For a detailed comparison between the Basic and Comprehensive Will, please click: <a href="https://www.amanahraya.my/ms/perkhidmatan-wasiat/" target="_blank">Will's Services</a><br><br>
        Which type of will are you interested in, <b>{name}</b>?
        `,
        options: [
            { label: '1️⃣ Basic Will  ', nextStep: 'muslim_wills_basic' },
            { label: "2️⃣ Comprehensive Will", nextStep: 'muslim_wills_comprehensive' }
        ]
    },
    // The below steps are for will one 
    will_one: {
        id: 'will_one',
        message: `
        Alright, how can ARIA assist you, <b>{name}</b>?
        `,
        options: [
            { label: '1️⃣ Checking the status of the will ', nextStep: 'retrieve_page1' },
            { label: "2️⃣ Amending a will  ", nextStep: 'will_one_amending_will' },
            { label: '3️⃣ Obtaining a copy of the will', nextStep: 'will_one_will_copy' },
        ]
    },
    will_one_amending_will: {
        id: 'will_one_amending_will',
        message: `
        May ARIA know the type of will registered at ARB?
        `,
        options: [
            { label: '1️⃣ Basis ', nextStep: 'will_one_amending_will_basis' },
            { label: "2️⃣ Comprehensive  ", nextStep: 'will_one_amending_will_comprehensive' },
            { label: '3️⃣ Uncertain', nextStep: 'retrieve_page1' },
        ]
    },
    will_one_amending_will_basis: {
        id: 'will_one_amending_will_basis',
        message: `
        <b>{name}</b> can switch to a Comprehensive Will to specify the types of assets to be distributed to
        heirs or non-heirs who are entitled to receive assets after death.<br><br>
        1. <a href="https://drive.google.com/file/d/13si6oc13MdvQDy7WYzFWbvz7MTHVYb_9/view">Will Application Form.</a><br>
        2. Copy of the testator’s identification card.<br>
        3. Copy of the recipient’s identification card.<br>
        4. Copy of the guardian’s identification card (if applicable).<br>
        5. Copies of documents for assets mentioned in the will.<br><br>
        Which delivery method is more convenient for <b>{name}</b>?
        `,
        options: [
            { label: '1️⃣ Counter ', nextStep: 'will_one_amending_will_basis_counter' },
            { label: "2️⃣ Via Post  ", nextStep: 'will_one_amending_will_basis_via_post' },
            { label: '3️⃣ Email/ WhatsApp', nextStep: 'will_one_amending_will_basis_via_post_email' },
        ]
    },
    will_one_amending_will_basis_counter: {
        id: 'will_one_amending_will_basis_counter',
        message: `
        Please visit any of our nearest branch counters. <b>{name}</b> may <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">
        Schedule an Appointment
        </a><br><br>
        Branch information can be found at: <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a><br><br>
        Is there anything else ARIA can assist you with?<br>
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    will_one_amending_will_basis_via_post: {
        id: 'will_one_amending_will_basis_via_post',
        message: `
        Please post it to the branch where the file was registered.<br><br>
        Branch information can be found at: <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a><br><br>
        <b>{name}<b> will be contacted for online payment once the documents are received.<br><br>
        Is there anything else ARIA can assist you with?
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    will_one_amending_will_basis_via_post_email: {
        id: 'will_one_amending_will_basis_via_post_email',
        message: `
        Clear documents can be sent via email to crmd@arb.com.my or WhatsApp us at 03-2055 7557.<br><br>
        <b>{name}<b> will be contacted for online payment once the documents are received.<br><br>
        Is there anything else ARIA can assist you with?
        `,
        options: []
    },
    will_one_amending_will_comprehensive: {
        id: 'will_one_amending_will_comprehensive',
        message: `
        <b>{name}</b> can make changes to the existing will.<br><br>
        1. <a href="https://drive.google.com/file/d/13si6oc13MdvQDy7WYzFWbvz7MTHVYb_9/view">Will Application Form.</a><br>
        2. Copy of the testator’s identification card.<br>
        3. Copy of the recipient’s identification card.<br>
        4. Copy of the guardian’s identification card (if applicable).<br>
        5. Copies of documents for assets mentioned in the will.<br><br>
        Which delivery method is more convenient for <b>{name}</b>?
        `,
        options: [
            { label: '1️⃣ Counter ', nextStep: 'will_one_amending_will_basis_counter' },
            { label: "2️⃣ Via Post  ", nextStep: 'will_one_amending_will_basis_via_post' },
            { label: '3️⃣ Email/ WhatsApp', nextStep: 'will_one_amending_will_basis_via_post_email' },
        ]
    },
    will_one_will_copy: {
        id: 'will_one_will_copy',
        message: `
        A copy of the will can be requested by:<br>
        The testator.<br>
        The heirs of the testator.<br>
        The lawyer appointed by the heirs of the testator.<br><br>
        <b>{name}</b> would like to obtain a copy of this will for what purpose?
        `,
        options: [
            { label: '1️⃣ My Will has been misplaced ', nextStep: 'will_one_will_copy_misplaced' },
            { label: "2️⃣ For estate administration  ", nextStep: 'will_one_will_copy_admin' },
        ]
    },
    will_one_will_copy_misplaced: {
        id: 'will_one_will_copy_misplaced',
        message: `
        Please submit the completed form along with the following documents to the email address crmd@arb.com.my:<br>
        1. <a href="https://drive.google.com/file/d/1GUlaRvva8qcofzdsHsYCCWPA59rDFjuw/view" target="_blank">Personal Data Access and Change Form</a><br>
        2. Copy of Identification Card.<br>
        3. Copy of payment receipt.<br>
        Online payment can be made to:<br>
        Company Name: Amanah Raya Berhad<br>
        Bank Name: Maybank<br>
        Account Number: 564155119930<br>
        Payment Amount: RM50<br><br>
        <b>{name}</b> will be contacted within 7 working days to collect the copy of the will at the counter.<br><br>
        Is there anything else ARIA can assist you with?
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    will_one_will_copy_admin: {
        id: 'will_one_will_copy_admin',
        message: `
        What is <b>{name}’s</b> relationship with the deceased?
`,
        options: [
            { label: "1️⃣ Deceased's beneficiary ", nextStep: 'will_one_will_copy_admin_beneficiary' },
            { label: "2️⃣ Lawyer  ", nextStep: 'will_one_will_copy_admin_lawyer' },
        ]
    },
    will_one_will_copy_admin_beneficiary: {
        id: 'will_one_will_copy_admin_beneficiary',
        message: `
        Please submit the completed form along with the following documents:<br>
        1. <a href="https://drive.google.com/file/d/1GUlaRvva8qcofzdsHsYCCWPA59rDFjuw/view" target="_blank">Personal Data Access and Change Form</a><br>
        2. Copy of Identification Card and proof of relationship (applicant).<br>
        3. Copy of deceased's Death Certificate.<br>
        4. Copy of payment receipt.<br>
        Online payment can be made to:<br>
        Company Name: Amanah Raya Berhad<br>
        Bank Name: Maybank<br>
        Account Number: 564155119930<br>
        Payment Amount: RM50<br>
        The contents of the will will only be read in the presence of the heirs. No copy of the will will be provided.<br><br>
        <b>{name}</b> will be contacted within 7 working days to schedule the will reading session date at the counter.<br><br>
        Is there anything else ARIA can assist you with?
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    will_one_will_copy_admin_lawyer: {
        id: 'will_one_will_copy_admin_lawyer',
        message: `
        Please submit the completed form along with the following documents:<br>
        1. <a href="https://drive.google.com/file/d/1GUlaRvva8qcofzdsHsYCCWPA59rDFjuw/view" target="_blank">Personal Data Access and Change Form</a><br>
        2. Copy of Identification Card and proof of relationship (applicant).<br>
        3. Copy of deceased's Death Certificate.<br>
        4. Notice of lawyer’s appointment<br>
        5. Copy of payment receipt<br>
        Online payment can be made to:<br>
        Company Name: Amanah Raya Berhad<br>
        Bank Name: Maybank<br>
        Account Number: 564155119930<br>
        Payment Amount: RM50<br>
        The contents of the will will only be read in the presence of the heirs. No copy of the will will be provided.<br><br>
        <b>{name}</b> will be contacted within 7 working days to schedule the will reading session date at the counter.<br><br>
        Is there anything else ARIA can assist you with?
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    // Below steps are belong to Amanah English
    amanah_eng: {
        id: 'amanah_eng',
        message: `
            What can ARIA assist <b>{name}</b> with?
        `,
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
        message: `
        Please click on the following <a href="https://online.amanahraya.my/TRUST_ONLINE/" target="_blank">Trust Online</a> for updating information.<br><br>
        Is there anything else ARIA can assist you with?
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    amanah_eng_closing_trust_account: {
        id: 'amanah_eng_closing_trust_account',
        message: `
        Please click both of these links, <a href="https://forms.gle/RDiL93pvWrcZJsKT9" target="_blank">First Link</a> and <a href="https://forms.gle/YRRdYh5qMTrWNQKm6" target="_blank">Second Link</a>, to proceed with the account closure application.<br><br>
        Payment will be made within 14 working days from the date of receipt of complete documents. <b>{name}</b> will be contacted if additional information is required.<br><br>
        Is there anything else ARIA can assist you with?
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    amanah_eng_withdrawal: {
        id: 'amanah_eng_withdrawal',
        message: `
        Withdrawal of trust funds is permitted strictly for the benefit and welfare of the beneficiary, or for any purposes explicitly stated in the Trust Deed.<br><br>
        Withdrawals may be made for the following purposes:<br>
        1. Education<br>
        2. Medical treatment<br>
        3. Monthly maintenance<br>
        4. Festive or religious celebrations<br>
        5. Other purposes (subject to approval)<br><br>
        Please click on the following <a href="https://online.amanahraya.my/TRUST_ONLINE/" target="_blank">Trust Online</a> to submit a request for account closure.<br><br>
        Is there anything else ARIA can assist you with?
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    amanah_eng_requesting_account: {
        id: 'amanah_eng_requesting_account',
        message: `
        Please click on the following <a href="https://online.amanahraya.my/TRUST_ONLINE/" target="_blank">Trust Online</a> to request for account statement.<br><br>
        Is there anything else ARIA can assist you with?
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    amanah_eng_change_guardian: {
        id: 'amanah_eng_change_guardian',
        message: `
        Change of guardian is only allowed under the following circumstances:<br>
        1. The current guardian has passed away.<br>
        2. The current guardian is incapacitated and no longer able to fulfil their responsibilities.<br>
        3. There has been a breach of duty by the current guardian.<br><br>
        To request for change of guardian, the following documents must be submitted:<br>
        1. A completed Guardian Change Form.<br>
        2. Court Order (if the guardian was appointed by the Court).<br>
        3. Guardian Appointment Order (Form H) – if the guardian was appointed through the Small Estate Distribution.<br><br>
        RELATED FORMS<br>
        a. Declaration of Confirmation for Change of Guardian.<br>
        b. Sample - Declaration of Confirmation for Change of Guardian.<br><br>
        Please submit the completed form along with a copy of <b>{name}'s</b> Identification Card to any nearby ARB branch.<br><br>
        Branch information can be found at: <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a>
        Is there anything else ARIA can assist you with?
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    // Below steps are belong to Hibah English
    hibah: {
        id: 'hibah',
        message: `
        Ok. Before ARIA provides further explanation, here are the concept and pillars of the Hibah product.<br><br>
        Hibah Concept
        1. The voluntary transfer of ownership of one’s property to another person during the Donor’s lifetime without expecting any return.<br>
        2. The property is entrusted to ARB as the trustee for a specified period, in accordance with the Deed of Hibah and the Deed of Trust.<br>
        3. A formal declaration (akad) will be made for the Donor (Penghibah) to declare the gifting of their property to the Recipient (Penerima Hibah).<br>
        4. A hibah cannot be revoked, except for those made by a parent/grandparent to their child/grandchild.<br>
        5. In the event of the Recipient’s death, the gifted property becomes part of the Recipient’s estate and will not be returned to the Donor, except
        through methods permitted under Shariah law or legislation.<br><br>
        Pillars of Hibah<br><br>
        Donor (Penghibah)<br>
        a) An individual (aged 18 and above) or an organisation.<br>
        b) Of sound mind, mature (baligh), prudent (rasyid), and not bankrupt.<br>
        c) Can be either Muslim or non-Muslim.<br>
        d) Not in a terminal illness that is likely to lead to death.<br><br>
        Recipient (Penerima Hibah)<br>
        a) An individual or an organisation.<br>
        b) A minor recipient may receive the hibah property through a legal guardian (Wali Mal).<br>
        c) Can be either Muslim or non-Muslim.<br><br>
        Property Subject to Hibah<br>
        a) Fully owned by the Donor.<br>
        b) Transferable (no restrictions).<br>
        c) Must exist at the time the contract (akad) is made.<br>
        d) Clearly identified.<br>
        e) Has value.<br><br>
        Offer and Acceptance (Sighah – Ijab and Qabul)<br>
        a) Ijab – The Donor declares the gift of property to the Recipient.<br>
        b) Qabul – The Recipient accepts the gifted property.<br>
        c) Must be conducted in a single contract session.<br>
        d) A legal guardian (Wali Mal) must be appointed if the recipient is a minor or a person with disabilities.<br><br>
        Possession (Qabd)<br>
        a) The Recipient has the authority to deal with the property received.<br>
        b) Possession can be actual (physical) or by legal transfer.<br><br>
        May I know the type of property you wish to Hibah?
        `,
        options: [
            { label: '1️⃣ Cash ', nextStep: 'hibah_cash' },
            { label: "2️⃣ Property  ", nextStep: 'hibah_property' },
        ]
    },
    hibah_cash: {
        id: 'hibah_cash',
        message: `
        For cash assets, (name) will need to deposit the amount to be given into ARB’s account.<br><br>
        CASH HIBAH TRUST<br><br>
        1. MINIMUM CAPITAL<br>
        RM20,000.00<br><br>
        2. ASSETS ELIGIBLE FOR TRUST.<br>
        Movable assets (cash only)<br><br>
        3. TRUST PERIOD<br>
        As stated in the Trust Deed.<br><br>
        4. PROFIT DISTRIBUTION<br>
        3.00% per annum.<br><br>
        5. REQUIRED DOCUMENTS<br>
        a. Copy of Donor’s Identity Card.<br>
        b. Copy of Recipient’s Identity Card.<br>
        c. Copy of Guardian’s (Wali Mal) Identity Card (if applicable).<br><br>
        6. RELATED FORMS<br>
        a. Application Form For Hibah AmanahRaya.<br>
        b. Sample - Application Form For Hibah AmanahRaya.<br><br>
        Please visit any of our nearest branch counters to make payment,
        bringing along the required documents. Payment can be made in cash
        (limited to RM5,000), cheque, debit/credit card, or online transfer.<br>
        <b>{name}</b> may <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Schedule An Appointment</a><br><br>
        for our branches location, please click  <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a><br><br>
        1. On the appointment date, consultation and advisory services can be conducted with our officer.<br>
        2. Document submission and payment can be completed on the same day.<br>
        <b>{name}</b> will be contacted by the branch officer for the preparation of the Trust Deed.<br><br>
        Is there anything else ARIA can assist you with?
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    hibah_property: {
        id: 'hibah_property',
        message: `
        For property assets, they must be free
        from any encumbrances, and the property
        title must registered under the Donor's
        name. The property will be transferred to
        ARB as the trustee, and the original title
        deed will be kept by ARB.<br><br>
        Is the property you wish to give is free from any encumbrances, and registered under your name?
        `,
        options: [
            { label: '1️⃣ Free from encumbrances and the title deed is under my name. ', nextStep: 'hibah_property_title_deed' },
            { label: "2️⃣ Still under loan and the title deed is under my name.  ", nextStep: 'hibah_property_title_deed_under_my_name' },
        ]
    },
    hibah_property_title_deed: {
        id: 'hibah_property_title_deed',
        message: `
        For this product, several matters need to be noted:<br><br>
        1. The current valuation of the property will be carried out by ARB
        through the Valuation and Property Services Department (JPPH).<br>
        2. The property title will be registered under ARB (as Trustee) and kept
        by ARB.<br>
        3. Quit rent and assessment rates must still be paid by the Donor.<br>
        4. Stamp duty must be settled by the Donor during their lifetime.
        However, if not done, the Recipient (Penerima Hibah) must pay it first
        before the transfer of ownership can be completed.<br>
        5. The property will be transferred to the Recipient after the death of
        the Donor or as stipulated in the Trust Deed.<br>
        6. If there are restrictions, approval must first be obtained from the
        State Authority for the transfer of ownership to ARB as Trustee.<br><br>
        PROPERTY HIBAH TRUST<br><br>
        1. DEPOSIT<br>
        RM1,240 per property<br><br>
        2. ELIGIBLE DONORS & BENEFICIARIES<br>
        Can be any individual, agency, organisation, or company.<br><br>
        3. STAMP DUTY As assessed by the Inland Revenue Board of Malaysia (LHDN)<br><br>
        4. REQUIRED DOCUMENTS<br>
        a. Copy of Donor’s Identity Card<br>
        b. Copy of Recipient’s Identity Card<br>
        c. Copy of Guardian’s (Wali Mal) Identity Card (if applicable)<br>
        d. Copy of property title deed, latest quit rent proof of payment, and latest assessment bill<br><br>
        5. RELATED FORMS<br>
        a. Application Form For Hibah AmanahRaya<br>
        b. Sample - Application Form For Hibah AmanahRaya<br><br>
        Please visit any of our nearest branch counters to make payment,
        bringing along the required documents. Payment can be made in cash
        (limited to RM5,000), cheque, debit/credit card, or online transfer.<br>
        <b>{name}</b> may <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Schedule An Appointment</a><br><br>
        for our branches location, please click  <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a><br><br>
        1. On the appointment date, consultation and advisory services can be conducted with our officer.<br>
        2. Document submission and payment can be completed on the same day.<br>
        <b>{name}</b> will be contacted by the branch officer for the preparation of the Trust Deed.<br><br>
        Is there anything else ARIA can assist you with?
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    hibah_property_title_deed_under_my_name: {
        id: 'hibah_property_title_deed_under_my_name',
        message: `
        For assets that are still under loan, you may opt for another product, namely Hibahku.<br><br>
        Would you be interested to know more?
        `,
        options: [
            { label: '1️⃣ Yes, I want to know about HibahKu. ', nextStep: 'hibah_ku' },
            { label: "2️⃣ That's all, thank you  ", nextStep: 'exit' },
        ]
    },
    // Below steps are belong to HibahKu
    hibah_ku: {
        id: 'hibah_ku',
        message: `
        CONCEPT OF HIBAH<br><br>
        1. The transfer of ownership of one’s property to another person during the owner’s lifetime,
        voluntarily and without expecting anything in return.<br>
        2. A contract (akad) will be executed to declare that the Donor (Penghibah) is granting the
        property to the Recipient of the Hibah (Penerima Hibah).<br>
        3. A Hibah cannot be revoked, except for a Hibah made by a parent/grandparent to their child/
        grandchild.<br>
        4. In the event of the Recipient’s death, the gifted property becomes part of the Recipient’s
        estate and will not be returned to the Donor, except through methods permitted by Shariah or
        the law.<br><br>
        For your information, under the Hibahku product, (name) may gift the following assets to any intended recipient:<br>
        i) Properties (whether fully paid or under financing)<br>
        ii) Vehicles (whether fully paid or under financing)<br>
        iii) Joint savings accounts at any bank (only allowed in the state of Selangor)<br><br>
        What asset does <b>{name}</b> intend to gift?
        `,
        options: [
            { label: '1️⃣ Property and / or vehicles, and cash in the bank', nextStep: 'hibah_ku_property_vehicle_cash' },
            { label: '2️⃣ Property and / or vehicle only', nextStep: 'hibah_ku_property_vehicle' },
            { label: '3️⃣ Bank savings(cash only)', nextStep: 'hibah_ku_property_bank_savings' },
        ]
    },
    hibah_ku_property_vehicle_cash: {
        id: 'hibah_ku_property_vehicle_cash',
        message: `
        A. Cash in Bank<br><br>
        1. Only joint accounts between the Donor (Penghibah) and the Recipient (Penerima Hibah) are allowed.<br>
        2. Only applicable for cash assets located in the state of Selangor.<br>
        3. Savings in ASNB and Tabung Haji are excluded.<br><br>
        B. Property<br>
        1. Must be free from any encumbrances.<br>
        2. If still under loan, the property must have full insurance coverage (MRTA/MRTT).<br>
        3. Must be owned by the Donor.<br>
        4. Must be transferable (no restrictions).<br>
        5. Must exist at the time the contract (akad) is made.<br>
        6. Must be clearly identified.<br>
        7. Must have value.<br><br>
        C. Vehicle<br>
        1. Must be free from any encumbrances.<br>
        2. If still under loan, the vehicle must have full insurance coverage (auto-life insurance).<br>
        3. Must be owned by the Donor.<br>
        4. Must exist at the time the contract (akad) is made.<br>
        5. Must be clearly identified.<br>
        6. Must have value.<br><br>
        Further explanation will only apply if your information meets the specified criteria.<br><br>
        HIBAHKU<br><br>
        1. DONOR (PENGHIBAH)<br>
        Individual aged 18 years and above.<br><br>
        2. RECIPIENT (PENERIMA HIBAH)<br>
        Any individual, except those with mental incapacity.<br><br>
        3. REQUIRED DOCUMENTS<br>
        a) AmanahRaya HibahKu Application Form (can be obtained at ARB branch counter).<br>
        b) Copy of Donor’s Identity Card.<br>
        c) Copy of Recipient’s Identity Card / Birth Certificate.<br>
        d) Copy of Guardian’s (Wali Mal) Identity Card (if recipient is a minor or a person with disabilities).<br>
        e) Immovable Property.<br>
        i) Copy of Land Title / Strata Title.<br>
        ii) Copy of Sales & Purchase Agreement + MRTA/MRTT (if still under charge).<br>
        iii) Copy of Official Search.<br>
        iv) Copy of Offer Letter from the financial instituion (if still under charge).<br>
        f) Movable Property – Vehicle.<br>
        i) Copy of Vehicle Registration Card.<br>
        ii) Copy of Auto-life Insurance Policy (if still under charge).<br>
        g) Movable Property – Cash in Bank.<br>
        i) Copy of Bank Statement / Bank Account Confirmation.<br><br>
        4. APPLICABLE FEES<br>
        RM1,500 (1st asset), RM500 (each subsequent asset).<br><br>
        Please visit any of our nearest branch counters to make payment, bringing
        along the required documents. Payment can be made in cash (limited to
        RM5,000), cheque, debit/credit card, or online transfer.<br>
        <b>{name}</b> may <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Schedule An Appointment</a><br><br>
        for our branches location, please click  <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a><br><br>
        1. On the appointment date, consultation and advisory services can be conducted with our officer.<br>
        2. Document submission and payment can be completed on the same day.<br>
        3. <b>{name}</b> will be contacted by the branch officer for the preparation of the akad documents.<br><br>
        Is there anything else that ARIA can help you?
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    hibah_ku_property_vehicle: {
        id: 'hibah_ku_property_vehicle',
        message: `
        A. Property<br><br>
        1. Must be free from any encumbrances.<br>
        2. If still under loan, the property must have full insurance coverage (MRTA/MRTT).<br>
        3. Must be owned by the Donor (Penghibah).<br>
        4. Must be transferable (no restrictions).<br>
        5. Must exist at the time the contract (akad) is made.<br>
        6. Must be clearly identified.<br>
        7. Must have value.<br><br>
        B. Vehicle.<br>
        1. Must be free from any encumbrances.<br>
        2. If still under loan, the vehicle must have full insurance coverage (auto-life insurance).<br>
        3. Must be owned by the Donor.<br>
        4. Must exist at the time the contract (akad) is made.<br>
        5. Must be clearly identified.<br>
        6. Must have value.<br><br>
        Further explanation will only apply if your information meets the specified criteria.<br><br>
        HIBAHKU<br><br>
        1. DONOR (PENGHIBAH)<br>
        Individual aged 18 years and above.<br><br>
        2. RECIPIENT (PENERIMA HIBAH)<br>
        Any individual, except those with mental incapacity.<br><br>
        3. REQUIRED DOCUMENTS<br>
        a) AmanahRaya HibahKu Application Form (can be obtained at ARB branch counter).<br>
        b) Copy of Donor’s Identity Card.<br>
        c) Copy of Recipient’s Identity Card / Birth Certificate.<br>
        d) Copy of Guardian’s (Wali Mal) Identity Card (if recipient is a minor or a person with disabilities).<br>
        e) Immovable Property.<br>
        i) Copy of Land Title / Strata Title.<br>
        ii) Copy of Sales & Purchase Agreement + MRTA/MRTT (if still under charge).<br>
        iii) Copy of Official Search.<br>
        iv) Copy of Offer Letter from the financial instituion (if still under charge).<br>
        f) Movable Property – Vehicle.<br>
        i) Copy of Vehicle Registration Card.<br>
        ii) Copy of Auto-life Insurance Policy (if still under charge).<br>
        g) Movable Property – Cash in Bank.<br>
        i) Copy of Bank Statement / Bank Account Confirmation.<br><br>
        4. APPLICABLE FEES<br>
        RM1,500 (1st asset), RM500 (each subsequent asset).<br><br>
        Please visit any of our nearest branch counters to make payment, bringing
        along the required documents. Payment can be made in cash (limited to
        RM5,000), cheque, debit/credit card, or online transfer.<br>
        <b>{name}</b> may <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Schedule An Appointment</a><br><br>
        for our branches location, please click  <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a><br><br>
        1. On the appointment date, consultation and advisory services can be conducted with our officer.<br>
        2. Document submission and payment can be completed on the same day.<br>
        3. <b>{name}</b> will be contacted by the branch officer for the preparation of the akad documents.<br><br>
        Is there anything else that ARIA can help you?
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    hibah_ku_property_bank_savings: {
        id: 'hibah_ku_property_bank_savings',
        message: `
        A. Cash in Bank<br>
        1. Only joint accounts between the Donor (Penghibah) and the Recipient (Penerima Hibah) are allowed.<br>
        2. Only applicable for cash assets located in the state of Selangor.<br>
        3. Savings in ASNB and Tabung Haji are excluded.<br><br>
        Further explanation will only apply if your information meets the specified criteria.<br><br>
        HIBAHKU<br><br>
        1. DONOR (PENGHIBAH)<br>
        Individual aged 18 years and above.<br><br>
        2. RECIPIENT (PENERIMA HIBAH)<br>
        Any individual, except those with mental incapacity.<br><br>
        3. REQUIRED DOCUMENTS<br>
        a) AmanahRaya HibahKu Application Form (can be obtained at ARB branch counter).<br>
        b) Copy of Donor’s Identity Card.<br>
        c) Copy of Recipient’s Identity Card / Birth Certificate.<br>
        d) Copy of Guardian’s (Wali Mal) Identity Card (if recipient is a minor or a person with disabilities).<br>
        e) Immovable Property.<br>
        i) Copy of Land Title / Strata Title.<br>
        ii) Copy of Sales & Purchase Agreement + MRTA/MRTT (if still under charge).<br>
        iii) Copy of Official Search.<br>
        iv) Copy of Offer Letter from the financial instituion (if still under charge).<br>
        f) Movable Property – Vehicle.<br>
        i) Copy of Vehicle Registration Card.<br>
        ii) Copy of Auto-life Insurance Policy (if still under charge).<br>
        g) Movable Property – Cash in Bank.<br>
        i) Copy of Bank Statement / Bank Account Confirmation.<br><br>
        4. APPLICABLE FEES<br>
        RM1,500 (1st asset), RM500 (each subsequent asset).<br><br>
        Please visit any of our nearest branch counters to make payment, bringing
        along the required documents. Payment can be made in cash (limited to
        RM5,000), cheque, debit/credit card, or online transfer.<br>
        <b>{name}</b> may <a href="https://arb.nubitel.co/arb/Appointment/AppointmentForm.aspx?para=m" target="_blank">Schedule An Appointment</a><br><br>
        for our branches location, please click  <a href="https://www.amanahraya.my/contact-us/branch-locator/" target="_blank"> Branch Information</a><br><br>
        1. On the appointment date, consultation and advisory services can be conducted with our officer.<br>
        2. Document submission and payment can be completed on the same day.<br>
        3. <b>{name}</b> will be contacted by the branch officer for the preparation of the akad documents.<br><br>
        Is there anything else that ARIA can help you?
        `,
        options: [
            { label: "1️⃣ That's all, thank you", nextStep: 'exit' }
        ]
    },
    // Below steps are belong to Establishment rightful beneficiaries
    establishment_rightful_beneficiaries: {
        id: 'establishment_rightful_beneficiaries',
        message: `
        May ARIA know the deceased’s religion at during death?
        `,
        options: [
            { label: '1️⃣ Muslim', nextStep: 'establishment_rightful_muslim' },
            { label: '2️⃣ Non-muslim', nextStep: 'establishment_rightful_non_muslim' },
        ]
    },
    establishment_rightful_muslim: {
        id: 'establishment_rightful_muslim',
        message: `
        For Muslim, the distribution of assets will follow the Faraid (Islamic Inheritance Law) after deducting debts and executing any wills (if applicable).<br><br>
        The beneficiary determination information below applies only to standard cases—for example, where beneficiaries such as a spouse or child are still living. It does not cover layered inheritance scenarios, such as when a 
        beneficiary (e.g., a child) has passed away after the deceased.<br><br>
        To <b>{name}</b> knowledge, what was the deceased's marital status?
        `,
        options: [
            { label: '1️⃣ Single', nextStep: 'establishment_rightful_muslim_single' },
            { label: '2️⃣ Married', nextStep: 'establishment_rightful_muslim_married' },
        ]
    },
    establishment_rightful_muslim_single: {
        id: 'establishment_rightful_muslim_single',
        message: `
        Were the deceased’s parents still alive at the time of deceased's death?
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
        message: `
        Did the deceased have any siblings?
        `,
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
        message: `
        The estate will be distributed to other rightful beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Nephew (brother's son).<br>
        3. Paternal uncle.<br>
        4. Male cousin (paternal uncle's son).<br>
        5. Male cousin's son<br><br>
        If there are no eligible beneficiaries, the remainder will be distributed to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_both_pass_away_male_female_siblings: {
        id: 'establishment_rightful_muslim_single_both_pass_away_male_female_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Siblings – Asobah (residue)<br><br>
        * Asobah - The distribution ratio between male and female siblings is 2:1.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_both_pass_away_female_siblings: {
        id: 'establishment_rightful_muslim_single_both_pass_away_female_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Siblings – 1/2 or 2/3<br><br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Paternal uncle.<br>
        3. Male cousin.<br>
        4. Male cousin’s son.<br>
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.<br>
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_both_pass_away_male_siblings: {
        id: 'establishment_rightful_muslim_single_both_pass_away_male_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Siblings - Asobah (residue).<br><br>
        *Asobah - The share will be distributed equally among them. 
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_both_pass_away_no_siblings: {
        id: 'establishment_rightful_muslim_single_both_pass_away_no_siblings',
        message: `
        The estate will be distributed to other rightful beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Paternal uncle.<br>
        3. Male cousin (paternal uncle's son).<br>
        4. Male cousin's son.<br><br>
        *If there are no eligible beneficiaries, the remainder will be distributed to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_mother: {
        id: 'establishment_rightful_muslim_single_mother',
        message: `
        Did the deceased have any siblings?
        `,
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
        message: `
        The distribution is as follows:
        1. Mother - 1/3<br><br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Nephew (brother's son).<br>
        3. Paternal uncle.<br>
        4. Male cousin (paternal uncle's son).<br>
        5. Male cousin's son.<br><br>
        *If there are no eligible beneficiaries, the remainder will be distributed to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_mother_pass_away_male_female_siblings: {
        id: 'establishment_rightful_muslim_single_mother_pass_away_male_female_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/3 @ 1/6.<br>
        2. Maternal siblings – 1/3 or 1/6 (if any).<br>
        3. Full or paternal siblings – Asabah (residue).<br><br>
        *Asobah - The distribution ratio between male and female siblings is 2:1.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_mother_pass_away_female_siblings: {
        id: 'establishment_rightful_muslim_single_mother_pass_away_female_siblings',
        message: `
        The distribution is as follows:<br>
        1. Mother - 1/3 @ 1/6.<br>
        2. Siblings - 1/2 @ 2/3.<br><br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Paternal uncle.<br>
        3. Male cousin (paternal uncle's son).<br>
        4. Male cousin's son.<br>
        *If there are no eligible beneficiaries, the remainder will be distributed to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_mother_pass_away_male_siblings: {
        id: 'establishment_rightful_muslim_single_mother_pass_away_male_siblings',
        message: `
        The distribution is as follows:<br>
        1. Mother - 1/3 @ 1/6.<br>
        2. Maternal siblings – 1/3 or 1/6 (if any).<br>
        3. Full or paternal siblings – Asabah (residue).<br><br> 
        *Asobah - The share will be distributed equally among them.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_mother_pass_away_no_siblings: {
        id: 'establishment_rightful_muslim_single_mother_pass_away_no_siblings',
        message: `
        The distribution is as follows:<br>
        1. Mother - 1/3 @ 1/6<br><br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Paternal uncle.<br>
        3. Male cousin (paternal uncle's son).<br>
        4. Male cousin's son.<br><br>
        *If there are no eligible beneficiaries, the remainder will be distributed to the Baitulmal.
        `,
        options: []
    },
    establishment_rightful_muslim_single_father: {
        id: 'establishment_rightful_muslim_single_father',
        message: `
        The distribution is as follows:<br><br>
        1. Father – Asobah(residue).<br><br>
        * The father inherits the entire estate of the deceased.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_single_both_still_alive: {
        id: 'establishment_rightful_muslim_single_both_still_alive',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/3 @ 1/6.<br>
        2. Father - Asobah(residue).<br><br>
        * The remainder will be distributed to the father.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_married: {
        id: 'establishment_rightful_muslim_married',
        message: `
        Did the deceased have any children?
        `,
        options: [
            { label: "1️⃣ No children", nextStep: 'establishment_rightful_muslim_married_no_children' },
            { label: '2️⃣ Son(s) and daughter(s)', nextStep: 'establishment_rightful_muslim_married_son_daughter' },
            { label: '3️⃣ Son(s) only', nextStep: 'establishment_rightful_muslim_married_son_only' },
            { label: '4️⃣ Daughter(s) only', nextStep: 'establishment_rightful_muslim_married_daughter_only' },
        ]
    },
    establishment_rightful_muslim_married_no_children: {
        id: 'establishment_rightful_muslim_married_no_children',
        message: `
        Were the deceased’s parents still alive at the time of deceased's death?`,
        options: [
            { label: "1️⃣ Both had passed away", nextStep: 'est_righ_muslim_m_no_children_both_pass_away' },
            { label: '2️⃣ Only the mother is still alive', nextStep: 'est_righ_muslim_m_no_children_only_mother_alive' },
            { label: '3️⃣ Only the father is still alive', nextStep: 'est_righ_muslim_m_no_children_only_father_alive' },
            { label: '4️⃣ Both are still alive', nextStep: 'est_righ_muslim_m_no_children_both_alive' },
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away: {
        id: 'est_righ_muslim_m_no_children_both_pass_away',
        message: `
        Was deceased's spouse still alive at the time of deceased's death?
        `,
        options: [
            { label: "1️⃣ Yes", nextStep: 'est_righ_muslim_m_no_children_both_pass_away_yes' },
            { label: '2️⃣ No', nextStep: 'est_righ_muslim_m_no_children_both_pass_away_no' },
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_yes: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_yes',
        message: `
        Did the deceased have any siblings?
        `,
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
        message: `
        The distribution is as follows:<br><br>
        1. Spouse - 1/2 (Husband), 1/4 (Wife)<br><br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Nephew (brother's son).<br>
        3. Paternal uncle.<br>
        4. Male cousin (paternal uncle's son).<br>
        5. Male cousin's son.<br><br>
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_male_female_siblings: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_male_female_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Spouse - 1/2 (Husband), 1/4 (Wife).<br>
        2. Maternal siblings - 1/3 @ 1/6 (if any).<br>
        3. Full or paternal siblings - Asobah (residue).<br><br>
        *Asobah - The distribution ratio between male and female siblings is 2:1.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_female_siblings: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_female_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Spouse - 1/2 (Husband), 1/4 (Wife).<br>
        2. Maternal siblings - 1/3 @ 1/6 (if any).<br>
        3. Full or paternal siblings - 1/2 @ 2/3.<br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Paternal uncle.<br>
        3. Male cousin.<br>
        4. Male cousin’s son.<br><br>
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_male_siblings: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_male_siblings',
        message: `
        The distribution is asfollows:<br><br>
        1. Spouse - 1/2 (Husband), 1/4 (Wife).<br>
        2. Maternal siblings - 1/3 @ 1/6 (if any).<br>
        3. Full or paternal siblings - Asobah (residue).<br><br> 
        *Asobah - The share will be distributed equally among them.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_no_siblings: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_yes_pass_away_no_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Spouse - 1/2 (Husband), 1/4 (Wife).<br><br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Paternal uncle.<br>
        3. Male cousin.<br>
        4. Male cousin’s son.<br><br>
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.
        `,
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
        message: `
        The estate will be distributed to other rightful beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Nephew (brother's son).<br>
        3. Paternal uncle.<br>
        4. Male cousin (paternal uncle's son).<br>
        5. Male cousin's son.<br><br>
        If there are no eligible beneficiaries, the remainder will be distributed to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_no_pass_away_male_female_siblings: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_no_pass_away_male_female_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Maternal siblings – 1/3 or 1/6 (if any).<br>
        2. Full or paternal siblings – Asabah (residue).<br><br>
        *Asobah - The distribution ratio between male and female siblings is 2:1.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_no_pass_away_female_siblings: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_no_pass_away_female_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Maternal siblings – 1/3 or 1/6 (if any).<br>
        2. Full or paternal siblings – 1/2 @ 2/3.<br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Paternal uncle.<br>
        3. Male cousin (paternal uncle's son).<br>
        4. Male cousin's son.<br><br>
        *If there are no eligible beneficiaries, the remainder will be distributed to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_no_pass_away_male_siblings: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_no_pass_away_male_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Maternal siblings – 1/ 3 or 1/6 (if any).<br>
        2. Full or paternal siblings – Asabah (residue).<br><br>
        *Asobah - The share will be distributed equally among them.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_pass_away_no_pass_away_no_siblings: {
        id: 'est_righ_muslim_m_no_children_both_pass_away_no_pass_away_no_siblings',
        message: `
        The estate will be distributed to other rightful beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Paternal uncle.<br>
        3. Male cousin (paternal uncle's son).<br>
        4. Male cousin's son.<br><br>
        If there are no eligible beneficiaries, the remainder will be distributed to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive',
        message: `
        Was deceased's spouse still alive at the time of deceased's death?
        `,
        options: [
            { label: "1️⃣ Yes", nextStep: 'est_righ_muslim_m_no_children_only_mother_alive_yes' },
            { label: '2️⃣ No', nextStep: 'est_righ_muslim_m_no_children_only_mother_alive_no' },
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_yes: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_yes',
        message: `
        Did the deceased have any siblings?
        `,
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
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/3 @ 1/6.<br>
        2. Spouse - 1/2 (Husband), 1/4 (Wife).<br><br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Nephew (brother's son).<br>
        3. Paternal uncle.<br>
        4. Male cousin (paternal uncle's son).<br>
        5. Male cousin's son.<br><br>
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_male_female_siblings: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_male_female_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/3 @ 1/6.<br>
        2. Spouse - 1/2 (Husband), 1/4 (Wife).<br>
        3. Maternal siblings - 1/3 @ 1/6 (if any).<br>
        4. Full or paternal siblings - Asobah (residue).<br><br>
        *Asobah - The distribution ratio between male and female siblings is 2:1.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_female_siblings: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_female_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/3 @ 1/6.<br>
        2.Spouse - 1/2 (Husband), 1/4 (Wife).<br>
        3. Maternal siblings - 1/3 @ 1/6 (if any).<br>
        4. Full or paternal siblings - 1/2 @ 2/3.<br><br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Paternal uncle.<br>
        3. Male cousin.<br>
        4. Male cousin’s son.<br><br>
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_male_siblings: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_male_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/3 @ 1/6.<br>
        2. Spouse - 1/2 (Husband), 1/4 (Wife).<br>
        3. Maternal siblings - 1/3 @ 1/6 (if any).<br>
        4. Full or paternal siblings - Asobah (residue).<br><br>
        *Asobah - The share will be distributed equally among them.
        `,
        options: []
    },
    est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_no_siblings: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_yes_pass_away_no_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/3.<br>
        2. Spouse - 1/2 (Husband), 1/ 4 (Wife).<br><br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Paternal uncle.<br>
        3. Male cousin.<br>
        4. Male cousin’s son.<br><br>
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.
        `,
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
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/3 @ 1/6.<br><br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Nephew (brother's son).<br>
        3. Paternal uncle.<br>
        4. Male cousin (paternal uncle's son).<br>
        5. Male cousin's son.<br><br>
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_male_female_siblings: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_male_female_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/3 @ 1/6.<br>
        2. Maternal siblings - 1/3 @ 1/6 (if any).<br>
        3. Full or paternal siblings - Asobah (residue).<br><br>
        *Asobah - The distribution ratio between male and female siblings is 2:1.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_female_siblings: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_female_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/3 @ 1/6.<br>
        2. Maternal siblings - 1/3 @ 1/6 (if any).<br>
        3. Full or paternal siblings - 1/2 @ 2/3.<br><br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Paternal uncle.<br>
        3. Male cousin.<br>
        4. Male cousin’s son.<br><br>
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_male_siblings: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_male_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/3 @ 1/6.<br>
        2. Maternal siblings - 1/3 @ 1/6 (if any).<br>
        3. Full or paternal siblings - Asobah (residue).<br><br>
        *Asobah - The share will be distributed equally among them.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_no_siblings: {
        id: 'est_righ_muslim_m_no_children_only_mother_alive_no_pass_away_no_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/3.<br><br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Paternal uncle.<br>
        3. Male cousin.<br>
        4. Male cousin’s son.<br><br>
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_father_alive: {
        id: 'est_righ_muslim_m_no_children_only_father_alive',
        message: `
        Was deceased's spouse still alive at the time of deceased's death?
        `,
        options: [
            { label: '1️⃣ Yes', nextStep: 'est_righ_muslim_m_no_children_only_father_alive_yes' },
            { label: '2️⃣ No', nextStep: 'est_righ_muslim_m_no_children_only_father_alive_no' },
        ]
    },
    est_righ_muslim_m_no_children_only_father_alive_yes: {
        id: 'est_righ_muslim_m_no_children_only_father_alive_yes',
        message: `
        The distribution is as follows:<br><br>
        1. Father - Asobah (residue).<br>
        2. Spouse - 1/2 (Husband), 1/4 (Wife)
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_only_father_alive_no: {
        id: 'est_righ_muslim_m_no_children_only_father_alive_no',
        message: `
        The distribution is as follows:<br><br>
        1. Father - Asobah (residue).<br><br>
        * The father inherits the entire estate of the deceased.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_alive: {
        id: 'est_righ_muslim_m_no_children_both_alive',
        message: `
        Was deceased's spouse still alive at the time of deceased's death?
        `,
        options: [
            { label: '1️⃣ Yes', nextStep: 'est_righ_muslim_m_no_children_both_alive_yes' },
            { label: '2️⃣ No', nextStep: 'est_righ_muslim_m_no_children_both_alive_no' },
        ]
    },
    est_righ_muslim_m_no_children_both_alive_yes: {
        id: 'est_righ_muslim_m_no_children_both_alive_yes',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/3 @ 1/6.<br>
        2. Father - Asobah(residue).<br>
        3. Spouse - 1/2 (Husband), 1/4 (Wife).<br><br>
        * The remainder will be distributed to the father.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    est_righ_muslim_m_no_children_both_alive_no: {
        id: 'est_righ_muslim_m_no_children_both_alive_no',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/3 @ 1/6.<br>
        2. Father - Asobah (residue).<br><br>
        * The remainder will be distributed to the father.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_married_son_daughter: {
        id: 'establishment_rightful_muslim_married_son_daughter',
        message: `
        Were the deceased’s parents still alive at the time of deceased's death?
        `,
        options: [
            { label: '1️⃣ Father / Mother is still alive', nextStep: 'es_righ_muslim_m_son_daughter_father_or_mother' },
            { label: '2️⃣ Both are still alive', nextStep: 'es_righ_muslim_m_son_daughter_both_alive' },
            { label: '3️⃣ Both had passed away', nextStep: 'es_righ_muslim_m_son_daughter_both_pass_away' },
        ]
    },
    es_righ_muslim_m_son_daughter_father_or_mother: {
        id: 'es_righ_muslim_m_son_daughter_father_or_mother',
        message: `
        Was deceased's spouse still alive at the time of deceased's death?
        `,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_righ_muslim_m_son_daughter_father_or_mother_yes' },
            { label: '2️⃣ No', nextStep: 'es_righ_muslim_m_son_daughter_father_or_mother_no' },
        ]
    },
    es_righ_muslim_m_son_daughter_father_or_mother_yes: {
        id: 'es_righ_muslim_m_son_daughter_father_or_mother_yes',
        message: `
        The distribution is as follows:<br><br>
        1. Father @ Mother - 1/6.<br>
        2. Spouse - 1/4 (Husband), 1/8 (Wife).<br>
        3. Children- Asobah (residue).<br><br>
        *Asobah - The distribution ratio between male and female siblings is 2:1.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_muslim_m_son_daughter_father_or_mother_no: {
        id: 'es_righ_muslim_m_son_daughter_father_or_mother_no',
        message: `
        The distribution is as follows:<br><br>
        1. Father @ Mother - 1/6.<br>
        2. Children - Asobah (residue).<br><br>
        *Asobah - The distribution ratio between male and female siblings is 2:1.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_muslim_m_son_daughter_both_alive: {
        id: 'es_righ_muslim_m_son_daughter_both_alive',
        message: `
        Was deceased's spouse still alive at the time of deceased's death?
        `,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_righ_muslim_m_son_daughter_both_alive_yes' },
            { label: '2️⃣ No', nextStep: 'es_righ_muslim_m_son_daughter_both_alive_no' },
        ]
    },
    es_righ_muslim_m_son_daughter_both_alive_yes: {
        id: 'es_righ_muslim_m_son_daughter_both_alive_yes',
        message: `
        The distribution is as follows:<br><br>
        1. Father - 1/6.<br>
        2. Mother - 1/6.<br>
        3. Spouse - 1/4 (Husband), 1/8 (Wife).<br>
        4. Children - Asobah (residue).<br><br>
        *Asobah - The distribution ratio between male and female siblings is 2:1.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_muslim_m_son_daughter_both_alive_no: {
        id: 'es_righ_muslim_m_son_daughter_both_alive_no',
        message: `
        The distribution is as follows:<br><br>
        1. Father - 1/6.<br>
        2. Mother - 1/6.<br>
        3. Children - Asobah (residue).<br><br>
        *Asobah - The distribution ratio between male and female siblings is 2:1.
`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_muslim_m_son_daughter_both_pass_away: {
        id: 'es_righ_muslim_m_son_daughter_both_pass_away',
        message: `
        Was deceased's spouse still alive at the time of deceased's death?
        `,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_righ_muslim_m_son_daughter_both_pass_away_yes' },
            { label: '2️⃣ No', nextStep: 'es_righ_muslim_m_son_daughter_both_pass_away_no' },
        ]
    },
    es_righ_muslim_m_son_daughter_both_pass_away_yes: {
        id: 'es_righ_muslim_m_son_daughter_both_pass_away_yes',
        message: `
        The distribution is as follows:<br><br>
        1. Spouse - 1/4 (Husband), 1/8 (Wife).<br>
        2. Children - Asobah (residue).<br><br>
        *Asobah - The distribution ratio between male and female siblings is 2:1.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_muslim_m_son_daughter_both_pass_away_no: {
        id: 'es_righ_muslim_m_son_daughter_both_pass_away_no',
        message: `
        Children - Asobah (residue)<br><br>
        *Asobah - The distribution ratio between male and female siblings is 2:1
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_married_son_only: {
        id: 'establishment_rightful_muslim_married_son_only',
        message: `
        Was deceased's spouse still alive at the time of deceased's death?
        `,
        options: [
            { label: '1️⃣ Father / Mother is still alive', nextStep: 'es_right_muslim_m_son_only_father_or_mother' },
            { label: '2️⃣ Both are still alive', nextStep: 'es_right_muslim_m_son_only_both_alive' },
            { label: '3️⃣ Both had passed away', nextStep: 'es_right_muslim_m_son_only_both_pass_away' },
        ]
    },
    es_right_muslim_m_son_only_father_or_mother: {
        id: 'es_right_muslim_m_son_only_father_or_mother',
        message: `
        Was deceased's spouse still alive at the time of deceased's death?
        `,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_right_muslim_m_son_only_father_or_mother_yes' },
            { label: '2️⃣ No', nextStep: 'es_right_muslim_m_son_only_father_or_mother_no' },
        ]
    },
    es_right_muslim_m_son_only_father_or_mother_yes: {
        id: 'es_right_muslim_m_son_only_father_or_mother_yes',
        message: `
        The distribution is as follows:<br><br>
        1. Father @ Mother - 1/6.<br>
        2. Spouse - 1/4(Husband), 1/8 (Wife).<br>
        3. Children - Asobah(residue).<br><br>
        *Asobah - The share will be distributed equally among them.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_son_only_father_or_mother_no: {
        id: 'es_right_muslim_m_son_only_father_or_mother_no',
        message: `
        The distribution is as follows:<br><br>
        1. Father @ Mother - 1/6.<br>
        2. Children - Asobah (residue).<br><br>
        *Asobah - The share will be distributed equally among them.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_son_only_both_alive: {
        id: 'es_right_muslim_m_son_only_both_alive',
        message: `
        Was deceased's spouse still alive at the time of deceased's death?
        `,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_right_muslim_m_son_only_both_alive_yes' },
            { label: '2️⃣ No', nextStep: 'es_right_muslim_m_son_only_both_alive_no' },
        ]
    },
    es_right_muslim_m_son_only_both_alive_yes: {
        id: 'es_right_muslim_m_son_only_both_alive_yes',
        message: `
        The distribution is as follows:<br><br>
        1. Father - 1/6.<br>
        2. Mother - 1/6.<br>
        3. Spouse - 1/4 (Husband), 1/8 (Wife).<br>
        4. Children - Asobah (residue).<br><br>
        *Asobah - The share will be distributed equally among them.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_son_only_both_alive_no: {
        id: 'es_right_muslim_m_son_only_both_alive_no',
        message: `
        The distribution is as follows:<br><br>
        1. Father - 1/6.<br>
        2. Mother - 1/6.<br>
        3. Children - Asobah (residue).<br><br>
        *Asobah - The share will be distributed equally among them.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_son_only_both_pass_away: {
        id: 'es_right_muslim_m_son_only_both_pass_away',
        message: `
        Was deceased's spouse still alive at the time of deceased's death?
        `,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_right_muslim_m_son_only_both_pass_away_yes' },
            { label: '2️⃣ No', nextStep: 'es_right_muslim_m_son_only_both_pass_away_no' },
        ]
    },
    es_right_muslim_m_son_only_both_pass_away_yes: {
        id: 'es_right_muslim_m_son_only_both_pass_away_yes',
        message: `
        The distribution is as follows:<br><br>
        1. Spouse - 1/4 (Husband), 1/8 (Wife).<br>
        2. Children - Asobah (residue).<br><br>
        *Asobah - The share will be distributed equally among them.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_son_only_both_pass_away_no: {
        id: 'es_right_muslim_m_son_only_both_pass_away_no',
        message: `
        The distribution is as follows:<br><br>
        1. Children - Asobah (residue)<br><br>
        *Asobah - The share will be distributed equally among them.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_muslim_married_daughter_only: {
        id: 'establishment_rightful_muslim_married_daughter_only',
        message: `
        Were the deceased’s parents still alive at the time of deceased's death?
        `,
        options: [
            { label: '1️⃣ Mother is still alive', nextStep: 'es_right_muslim_m_daughter_only_mother_alive' },
            { label: '2️⃣ Father is still alive', nextStep: 'es_right_muslim_m_daughter_only_father_alive' },
            { label: '3️⃣ Both are still alive', nextStep: 'es_right_muslim_m_daughter_only_both_alive' },
            { label: '4️⃣ Both had pass away', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away' },
        ]
    },
    es_right_muslim_m_daughter_only_mother_alive: {
        id: 'es_right_muslim_m_daughter_only_mother_alive',
        message: `
        Was deceased's spouse still alive at the time of deceased's death?
        `,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_right_muslim_m_daughter_only_mother_alive_yes' },
            { label: '2️⃣ No', nextStep: 'es_right_muslim_m_daughter_only_mother_alive_no' },
        ]
    },
    es_right_muslim_m_daughter_only_mother_alive_yes: {
        id: 'es_right_muslim_m_daughter_only_mother_alive_yes',
        message: `
        Did the deceased have any siblings?
        `,
        options: [
            { label: '1️⃣ Yes and still alive', nextStep: 'es_right_muslim_m_daughter_only_mother_alive_yes_siblings' },
            { label: '2️⃣ Passed away before the deceased', nextStep: 'es_right_muslim_m_daughter_only_mother_alive_yes_passed_away_sibling' },
            { label: '3️⃣ No siblings', nextStep: 'es_right_muslim_m_daughter_only_mother_alive_yes_no_siblings' },
        ]
    },
    es_right_muslim_m_daughter_only_mother_alive_yes_siblings: {
        id: 'es_right_muslim_m_daughter_only_mother_alive_yes_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/6.<br>
        2. Spouse - 1/4 (Husband), 1/8 (Wife).<br>
        3. Children - 1/2 @ 2/3.<br>
        4. Siblings - Asobah (residue).<br><br>
        *Siblings refer only to full siblings or paternal siblings, and they will inherit only if there is a remaining balance. Maternal siblings do not inherit in this situation.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_mother_alive_yes_passed_away_sibling: {
        id: 'es_right_muslim_m_daughter_only_mother_alive_yes_passed_away_sibling',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/6.<br>
        2. Spouse - 1/4 (Husband), 1/8 (Wife).<br>
        3. Children - 1/2 @ 2/3.<br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Nephew (brother's son).<br>
        3. Paternal uncle.<br>
        4. Male cousin (paternal uncle's son).<br>
        5. Male cousin's son.<br><br>
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.
        `,
        options: []
    },
    es_right_muslim_m_daughter_only_mother_alive_yes_no_siblings: {
        id: 'es_right_muslim_m_daughter_only_mother_alive_yes_no_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/6.<br>
        2. Spouse - 1/4 (Husband), 1/8 (Wife).<br>
        3. Children - 1/2 @ 2/3.<br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Paternal uncle.<br>
        3. Male cousin (paternal uncle's son).<br>
        4. Male cousin's son.<br><br>
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_mother_alive_no: {
        id: 'es_right_muslim_m_daughter_only_mother_alive_no',
        message: `
        Did the deceased have any siblings?
        `,
        options: [
            { label: '1️⃣ Yes and still alive', nextStep: 'es_right_muslim_m_daughter_only_mother_alive_no_siblings' },
            { label: '2️⃣ Passed away before the deceased', nextStep: 'es_right_muslim_m_daughter_only_mother_alive_no_passed_away_sibling' },
            { label: '3️⃣ No siblings', nextStep: 'es_right_muslim_m_daughter_only_mother_alive_no_no_siblings' },
        ]
    },
    es_right_muslim_m_daughter_only_mother_alive_no_siblings: {
        id: 'es_right_muslim_m_daughter_only_mother_alive_no_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/6.<br>
        2. Anak - 1/2 @ 2/3.<br>
        3. Children - 1/2 @ 2/3.<br>
        4. Siblings - Asobah (residue).<br><br>
        *Siblings refer only to full siblings or paternal siblings, and they will inherit only if there is a remaining balance. Maternal siblings do not inherit in this situation.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_mother_alive_no_passed_away_sibling: {
        id: 'es_right_muslim_m_daughter_only_mother_alive_no_passed_away_sibling',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/6.<br>
        2. Children - 1/2 @ 2/3.<br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Nephew (brother's son).<br>
        3. Paternal uncle.<br>
        4. Male cousin (paternal uncle's son).<br>
        5. Male cousin's son.<br><br>
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_mother_alive_no_no_siblings: {
        id: 'es_right_muslim_m_daughter_only_mother_alive_no_no_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/6.<br>
        2. Children - 1/2 @ 2/3.<br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Paternal uncle.<br>
        3. Male cousin (paternal uncle's son).<br>
        4. Male cousin's son.<br><br>
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_father_alive: {
        id: 'es_right_muslim_m_daughter_only_father_alive',
        message: `
        Was deceased's spouse still alive at the time of deceased's death?
        `,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_right_muslim_m_daughter_only_father_alive_yes' },
            { label: '2️⃣ No', nextStep: 'es_right_muslim_m_daughter_only_father_alive_no' },
        ]
    },
    es_right_muslim_m_daughter_only_father_alive_yes: {
        id: 'es_right_muslim_m_daughter_only_father_alive_yes',
        message: `
        The distribution is as follows:<br><br>
        1. Father - 1/6 + Asobah (residue).<br>
        2. Spouse - 1/4 (Husband), 1/8 (Wife).<br>
        3. Children - 1/2 @ 2/3.<br><br>
        *Asobah - The residue will be distributed to the father (if any)
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_father_alive_no: {
        id: 'es_right_muslim_m_daughter_only_father_alive_no',
        message: `
        The distribution is as follows:<br><br>
        1. Father - 1/6 + Asobah (residue).<br>
        2. Children - 1/2 @ 2/3.<br><br>
        *Asobah - The residue will be distributed to the father (if any)
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_both_alive: {
        id: 'es_right_muslim_m_daughter_only_both_alive',
        message: `
        Was deceased's spouse still alive at the time of deceased's death?
        `,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_right_muslim_m_daughter_only_both_alive_yes' },
            { label: '2️⃣ No', nextStep: 'es_right_muslim_m_daughter_only_both_alive_no' },
        ]
    },
    es_right_muslim_m_daughter_only_both_alive_yes: {
        id: 'es_right_muslim_m_daughter_only_both_alive_yes',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/6.<br>
        2. Father - 1/6 + Asobah (residue).<br>
        3. Spouse - 1/4 (Husband), 1/8 (Wife).<br>
        4. Children - 1/2 @ 2/3.<br><br>
        *Asobah - The residue will be distributed to the father (if any)
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_both_alive_no: {
        id: 'es_right_muslim_m_daughter_only_both_alive_no',
        message: `
        The distribution is as follows:<br><br>
        1. Mother - 1/6.<br>
        2. Father - 1/6 + Asobah (residue).<br>
        3. Children - 1/2 @ 2/3.<br><br>
        *Asobah - The residue will be distributed to the father (if any)
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away',
        message: `
        Was deceased's spouse still alive at the time of deceased's death?
        `,
        options: [
            { label: '1️⃣ Yes', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away_yes' },
            { label: '2️⃣ No', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away_no' },
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away_yes: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away_yes',
        message: `
        Did the deceased have any siblings?
        `,
        options: [
            { label: '1️⃣ Yes and still alive', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away_yes_siblings' },
            { label: '2️⃣ Passed away before the deceased', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away_yes_passed_away_sibling' },
            { label: '3️⃣ No siblings', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away_yes_no_siblings' },
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away_yes_siblings: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away_yes_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Spouse - 1/4 (Husband), 1/8 (Wife).<br>
        2. Children - 1/2 @ 2/3.<br>
        3. Siblings - Asobah (residue).<br><br>
        *Siblings refer only to full siblings or paternal siblings, and they will inherit only if there is a remaining balance. Maternal siblings do not inherit in this situation.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away_yes_passed_away_sibling: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away_yes_passed_away_sibling',
        message: `
        The distribution is as follows:<br><br>
        1. Spouse - 1/4 (Husband), 1/8 (Wife).<br>
        2. Children - 1/2 @ 2/3.<br><br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Nephew (brother's son).<br>
        3. Paternal uncle.<br>
        4. Male cousin (paternal uncle's son).<br>
        5. Male cousin's son.<br><br> 
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away_yes_no_siblings: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away_yes_no_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Spouse - 1/4 (Husband), 1/8 (Wife).<br>
        2. Children - 1/2 @ 2/3.<br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Paternal uncle.<br>
        3. Male cousin (paternal uncle's son).<br>
        4. Male cousin's son.<br><br>
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away_no: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away_no',
        message: `
        Did the deceased have any siblings?
        `,
        options: [
            { label: '1️⃣ Yes and still alive', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away_no_siblings' },
            { label: '2️⃣ Passed away before the deceased', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away_no_passed_away_sibling' },
            { label: '3️⃣ No siblings', nextStep: 'es_right_muslim_m_daughter_only_both_pass_away_no_no_siblings' },
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away_no_siblings: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away_no_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Children - 1/2 @ 2/3.<br>
        2. Siblings - Asobah (residue).<br><br>
        *Siblings refer only to full siblings or paternal siblings, and they will inherit only if there is a remaining balance. Maternal siblings do not inherit in this situation.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away_no_passed_away_sibling: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away_no_passed_away_sibling',
        message: `
        The distribution is as follows:<br><br>
        1. Children - 1/2 @ 2/3.<br><br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Nephew (brother's son).
        3. Paternal uncle.<br>
        4. Male cousin (paternal uncle's son).<br>
        5. Male cousin's son.<br><br>
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_muslim_m_daughter_only_both_pass_away_no_no_siblings: {
        id: 'es_right_muslim_m_daughter_only_both_pass_away_no_no_siblings',
        message: `
        The distribution is as follows:<br><br>
        1. Children - 1/2 @ 2/3.<br><br>
        *The remaining portion will be distributed to other eligible beneficiaries in the following order:<br><br>
        1. Paternal grandfather.<br>
        2. Paternal uncle.<br>
        3. Male cousin (paternal uncle's son).<br>
        4. Male cousin's son.<br><br>
        If no eligible beneficiaries are found, the remainder will be given to the Baitulmal.`,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_non_muslim: {
        id: 'establishment_rightful_non_muslim',
        message: `
        For non-Muslim, if no will was left, the estate administration will follow the Distribution Act 1958, after deducting any debts (if applicable).<br><br>
        The beneficiary determination information below applies only to standard cases—for example, where beneficiaries such as a spouse or child are still living. It does not cover layered inheritance scenarios, such as when a beneficiary (e.g., a child) has passed away after the deceased.<br><br>
        To <b>{name}</b> knowledge, what was the deceased's marital status?
        `,
        options: [
            { label: '1️⃣ Single', nextStep: 'establishment_rightful_non_muslim_single' },
            { label: '2️⃣ Married', nextStep: 'establishment_rightful_non_muslim_married' },
        ]
    },
    establishment_rightful_non_muslim_single: {
        id: 'establishment_rightful_non_muslim_single',
        message: `
        Were the deceased’s parents still alive at the time of deceased's death?
        `,
        options: [
            { label: '1️⃣ Both or one of them is still alive', nextStep: 'es_right_non_m_single_alive' },
            { label: '2️⃣ Both had passed away', nextStep: 'es_right_non_m_single_passed_away' },
        ]
    },
    es_right_non_m_single_alive: {
        id: 'es_right_non_m_single_alive',
        message: `
        1. Both are still alive – The estate will be distributed equally between them.<br><br>
        2. One of them is still alive – The surviving parent will inherit the entire estate of the deceased.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_non_m_single_passed_away: {
        id: 'es_right_non_m_single_passed_away',
        message: `
        Did the deceased have any siblings?
        `,
        options: [
            { label: '1️⃣ Yes and still alive', nextStep: 'es_right_non_m_single_passed_away_alive' },
            { label: '2️⃣ Passed away before the deceased', nextStep: 'es_right_non_m_single_passed_away_sibling' },
            { label: '3️⃣ No siblings', nextStep: 'es_right_non_m_single_passed_away_sibling' },
        ]
    },
    es_right_non_m_single_passed_away_alive: {
        id: 'es_right_non_m_single_passed_away_alive',
        message: `
        The deceased’s siblings will inherit the entire estate. If there is more than one sibling, the estate will be divided equally among them.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_right_non_m_single_passed_away_sibling: {
        id: 'es_right_non_m_single_passed_away_sibling',
        message: `
        If the deceased still had any of the following relatives alive at the time of death, they are eligible to inherit the estate (in order of priority):<br><br>
        1. Grandfather / Grandmother.<br>
        2. Uncle / Aunt.<br>
        3. Great-grandfather / Great-grandmother.<br>
        4. Great-uncle / Great-aunt.<br><br>
        However, if the deceased also had none of the above relatives, the estate will be passed to the Government under Bona Vacantia.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    establishment_rightful_non_muslim_married: {
        id: 'establishment_rightful_non_muslim_married',
        message: `
        Who were the deceased’s surviving beneficiaries at the time deceased's death?
        `,
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
        message: `
        The distributions is as follows:<br><br>
        1. Parent(s): 1/4.<br>
        2. Spouse : 1/4.<br>
        3. Children : 2/4.<br><br>
        *If both parents are still alive, the portion will be shared equally.<br><br>
        *If there is more than one children, the portion will be divided equally among them.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_non_m_married_spouse_child_only: {
        id: 'es_righ_non_m_married_spouse_child_only',
        message: `
        The distributions is as follows:<br><br>
        1. Spouse : 1/3.<br>
        2. Children : 2/3.<br><br>
        *If there is more than one children, the portion will be divided equally among them
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_non_m_married_parent_child_only: {
        id: 'es_righ_non_m_married_parent_child_only',
        message: `
        The distributions is as follows:<br><br>
        1. Parent(s): 1/3.<br>
        2. Children : 2/3.<br><br>
        *If both parents are still alive, the portion will be shared equally.<br><br>
        *If there is more than one children, the portion will be divided equally among them.
        `,
        options: []
    },
    es_righ_non_m_married_parent_spouse_only: {
        id: 'es_righ_non_m_married_parent_spouse_only',
        message: `
        The distributions is as follows:<br><br>
        1. Spouse : 1/2.<br>
        2. Parent(s) : 1/2.<br><br>
        *If both parents are stillalive, the portion will be shared equally.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_non_m_married_parent_spouse_child_only: {
        id: 'es_righ_non_m_married_parent_spouse_child_only',
        message: `
        The surviving beneficiaries will inherit the entire estate of the deceased. If there is more than one, the estate will be divided equally among them.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_non_m_married_siblings_only: {
        id: 'es_righ_non_m_married_siblings_only',
        message: `
        If there are no surviving parents, spouse, or children, the deceased’s siblings will inherit the entire estate. If there is more than one sibling, the estate will be divided equally among them.
        `,
        options: [
            { label: 'Thank you. Feel free to return anytime!', nextStep: '' }
        ]
    },
    es_righ_non_m_married_no_survive: {
        id: 'es_righ_non_m_married_no_survive',
        message: `
        If the deceased still had any of the following relatives alive at the time of death, they are eligible to inherit the estate (in order of priority):<br><br>
        1. Grandfather / Grandmother.<br>
        2. Uncle / Aunt.<br>
        3. Great-grandfather / Great-grandmother.<br>
        4. Great-uncle / Great-aunt.<br><br>
        However, if the deceased also had none of the above relatives, the estate will be passed to the Government under Bona Vacantia.
        `,
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
};
