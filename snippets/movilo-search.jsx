// Mintlify provides React hooks to local snippets; package imports are unsupported.
const articles = [
  {
    "title": "Get started with Movilo",
    "description": "Set up your gym, add your branding and business details, create memberships, publish your contract and invite your team to Movilo.",
    "href": "/products/movilo/gym/getting-started",
    "audience": "Gym owners and staff",
    "terms": " Create your account. Sign up with your name, email and a password of at least 10 characters, and confirm your email from the message Movilo sends. Create your gym. Enter its name, city and country. The country sets your timezone and currency, which you can change later. Your 14-day free trial starts now. You can also explore two sample gyms first, filled with made-up data. Add your branding under Settings, Branding: logo, colour and the address of your member portal. Fill in your business details under Settings, Invoices. Your contract and invoices use your legal name, registration number and address. Create your memberships under Memberships. Write and publish your contract under Settings, Contracts, if you want new members to sign one. Invite your team under Settings, Team. Add your members. Running more than one location? Add each as a branch under Settings, Branches, rather than as a separate gym. Members can visit any branch. "
  },
  {
    "title": "Invite your team and choose their roles",
    "description": "Understand the owner, branch manager, finance, reception and coach roles in Movilo, then invite your team and assign their branches.",
    "href": "/products/movilo/gym/team-roles",
    "audience": "Gym owners and staff",
    "terms": " RoleCan do OwnerEverything, including prices, team, branding, contract, gates and the subscription. Every gym needs at least one owner. Branch managerDay-to-day work: members, schedules, bookings, check-in, payments received, enquiries, reports and gates. Can be tied to one branch. FinanceInvoices, payments, arrears and reports. ReceptionMembers, payments received, bookings and check-in, and members’ cards and passcodes. CoachClasses and check-in. Sees no contact details, ID numbers or money. Invite someone under Settings, Team. They get an email with a link that lasts seven days, and must sign in with the same email address. Staff tied to one branch only work in that branch. "
  },
  {
    "title": "Add and manage your gym members",
    "description": "Add members to Movilo with their photo and identification, manage their profiles and memberships, and check who is allowed to enter.",
    "href": "/products/movilo/gym/members",
    "audience": "Gym owners and staff",
    "terms": " Adding a member Choose Add member. You need: Their photo. Take it with the desk’s camera, or upload one. Staff see it every time the member checks in or comes through a gate, to make sure it’s them. Their South African ID number, or passport number and issuing country. An ID number is checked as you type, and shows the date of birth it holds, so typing mistakes are caught. It goes on their contract. Two members of your gym can’t share a number. Their name, email and phone, and optionally their membership and home branch. If you’ve published a contract, Movilo emails it to them to sign. If you haven’t, tick the box to record that they accepted your contract. A member’s profile Select a member to open their profile. From there you can: Check them in, issue an invoice, freeze or reactivate their membership, or cancel it. Assign a membership. This resets their class credits to the new plan’s allowance. Change their photo, or add one if they don’t have one yet. See their ID as its last four digits. Show number reveals the whole number, and each time is recorded in your activity. See their contract, send it again, or open it for them to sign at the desk. Set their gate ID, card number and passcode, and record consent for fingerprints and faces. Preview their member portal as they see it. Who may come in A member can check in, book classes and come through a gate only when all of these are true: their membership is active, not frozen or cancelled;they have a membership plan;their contract is signed or accepted;no invoice is overdue beyond your grace period, which is three days unless you change it under Settings, General. "
  },
  {
    "title": "Create your gym membership plans",
    "description": "Set up membership prices, billing periods and class credits in Movilo. Learn how monthly memberships and once-off class packs work.",
    "href": "/products/movilo/gym/memberships",
    "audience": "Gym owners and staff",
    "terms": " Under Memberships, create each plan with a name, price, billing period (monthly or a once-off pack), description and class credits. Use −1 for unlimited classes. Creating a monthly plan doesn’t charge anyone automatically: you invoice members yourself. "
  },
  {
    "title": "Manage your gym invoices and payments",
    "description": "Issue and email member invoices, record EFT or cash payments, manage arrears and export your gym’s billing records from Movilo.",
    "href": "/products/movilo/gym/invoices-and-payments",
    "audience": "Gym owners and staff",
    "terms": " Issue an invoice under Billing, or from a member’s profile. Tick Email this invoice to send it at once. Emailed invoices carry a private link that works for 90 days. Sending again replaces the link. If email isn’t set up, Movilo shows you the link to share yourself. Record a payment when money arrives by EFT or cash. Movilo records it; it doesn’t collect money or check your bank. Arrears. Overdue invoices show in red. Once one is past your grace period, the member can’t check in, book or come through a gate until it’s paid. Export invoices to a spreadsheet with the Export button. "
  },
  {
    "title": "Schedule classes and manage bookings",
    "description": "Add classes with coaches, rooms and capacity limits in Movilo, manage bookings and waitlists, and understand how class credits work.",
    "href": "/products/movilo/gym/classes-and-bookings",
    "audience": "Gym owners and staff",
    "terms": " Add a class under Schedule: name, coach, room, branch, date and time in your gym’s time zone, length, capacity and category. Movilo stops a room or a coach being double-booked. Booking. Members book in their portal, or staff book them. A full class puts people on a waitlist, and they move up automatically when someone cancels. Credits. A confirmed booking uses one class credit, and cancelling gives it back. Bookings close once a class starts. "
  },
  {
    "title": "Check members in at your gym",
    "description": "Use reception check-in, scan a member’s QR pass and monitor gate arrivals in Movilo, including photo checks and unexpected-entry warnings.",
    "href": "/products/movilo/gym/check-in",
    "audience": "Gym owners and staff",
    "terms": " At the door The top of the Check-in page shows whoever just came in, with their photo, the time and how they got in, and refreshes every few seconds. Look up and check the face in front of you matches. Red warnings appear when a gate let in someone who isn’t allowed, or someone used an ID Movilo doesn’t know. Ways to check someone in At reception: search for the member and choose Check in. With a QR pass: the member opens a pass in their portal. Scan it into the field on the Check-in page, or paste its code. A pass works once, within two minutes. Through a gate: see below. Entries become check-ins by themselves. The same person can’t be checked in twice within two minutes. "
  },
  {
    "title": "Connect and manage gates and turnstiles",
    "description": "Connect compatible ZKTeco ADMS terminals to Movilo, sync member access, manage cards and biometrics, and look after your gym’s gates.",
    "href": "/products/movilo/gym/gates-and-turnstiles",
    "audience": "Gym owners and staff",
    "terms": " Movilo works with ZKTeco terminals that have the ADMS cloud setting, such as SpeedFace models. The terminal connects to Movilo over the internet by itself, so there’s nothing to install at the gym, and no ports to open. Connecting a gate Under Gates, choose Add a gate. Enter a name, the terminal’s serial number (on its label, or under System info on the terminal), the branch, and whether it’s for entry or exit. Movilo shows the gate’s own server address, such as gate-7wvrybk2zx.movilo.co.za. On the terminal, open Menu, COMM., Cloud Server Setting. Some models call it ADMS. Set Server mode to ADMS, turn on Enable domain name, enter the server address and port 443, and turn on HTTPS. Leave the proxy off. Give the terminal an administrator first, using an ID from 1 to 99. Movilo never touches those IDs, and a terminal without an administrator lets anyone open its menu. Within a minute the gate shows as online, and allowed members start arriving on it. How it works Members who may come in are sent to every gate within about ten seconds of any change. When someone freezes, cancels or falls into arrears, they’re removed just as quickly. Members get gate IDs from 1001. Change one on the member’s profile to match an older system if you need to. A card or passcode enrolled at one gate reaches all your others. Fingerprints and faces are only shared between gates once you’ve recorded the member’s consent on their profile. Record consent first, then enrol them at any gate under their gate ID. Without consent, Movilo keeps nothing and the member’s profile tells you. Entries become check-ins at the gate’s branch. Exit gates record leaving only. Looking after gates Recent entries on the Gates page lists every entry. Remove from gate deletes an ID Movilo doesn’t know from the terminal. Sync everyone again resends all your members to a gate. Refresh details asks for its model and counts. Restart restarts it. New address gives the gate a new server address, which you then enter on the terminal. Use it if the old address may have been seen by someone it shouldn’t. A warning shows if a gate connects without HTTPS. Turn HTTPS on in its settings if the terminal offers it. Remote door opening isn’t available yet. Terminals that need ZKTeco’s separate access-panel software, such as InBio and C3 controllers, aren’t supported. "
  },
  {
    "title": "Publish and manage membership contracts",
    "description": "Write and publish your gym’s membership contract in Movilo, send signing links, collect signatures and manage new contract versions.",
    "href": "/products/movilo/gym/contracts",
    "audience": "Gym owners and staff",
    "terms": " Writing your contract Under Settings, Contracts, edit the title, fixed term (up to 24 months, or 0 for month to month), the sections, and the statements a member must tick. Movilo starts you with plain example wording. Replace it with your own and have a lawyer check it. These fields fill in each member’s details: FieldBecomes {{member_name}}, {{member_email}}, {{member_phone}}The member’s name, email and phone {{member_id_number}}, {{member_birth_date}}Their ID or passport number, and date of birth {{gym}}, {{gym_legal_name}}, {{gym_registration}}, {{gym_address}}Your gym name and business details from Settings, Invoices {{plan}}, {{fee}}Their membership and its price {{start_date}}, {{term_months}}, {{end_date}}When it starts, the fixed term, and when the term ends Preview with sample details shows how it reads. Publish makes it live. What happens once it’s published Every new member is emailed a private link to sign, which lasts 30 days. They can’t check in, book or use a gate until they sign. The old tick box for contract acceptance disappears. They read it, tick each statement, sign by drawing or typing their name, and confirm a six-digit code. The code is texted to their mobile if Movilo can send texts and their number works, or emailed if not. Movilo keeps a signed PDF with a final page showing how it was signed: the time, internet address, device, where the code went, and a fingerprint of exactly what they saw. Nobody can change or delete a signed contract, including you. Members who signed online can cancel without reason within 7 days. Changing your contract Publish a new version. New members sign it. Members who signed earlier keep the version they signed. To ask someone to sign the new version, use Email again on their profile. They keep access while it waits. Signing at the desk Sign here on a member’s profile opens their contract on this device, such as a tablet at reception. They still confirm the code sent to their own phone or email. "
  },
  {
    "title": "Turn gym enquiries into members",
    "description": "Track website enquiries and walk-ins in Movilo, move them through follow-up stages and convert them to members with their details intact.",
    "href": "/products/movilo/gym/enquiries",
    "audience": "Gym owners and staff",
    "terms": " People who ask to join on your website arrive under Enquiries, with the plan they chose, their photo and their ID number. You can also add walk-ins yourself. Move each one through New, Contacted and Trial visit. Convert to member creates their member profile, carries their photo and ID number across, and sends your contract if you have one. "
  },
  {
    "title": "Connect Movilo to your gym website",
    "description": "Add membership pricing to your website, share plan-specific join links and manage join requests through Movilo’s website integrations.",
    "href": "/products/movilo/gym/website-integrations",
    "audience": "Gym owners and staff",
    "terms": " Under Integrations: Pricing on your site. Copy the website code into your site. It works with WordPress (a Custom HTML block), Wix (Embed HTML), Squarespace (a Code block), Webflow (an Embed element) and most others. Choose a theme, button colour and button text first. Prices update by themselves within a minute of a change. Iframe. Use this if your website builder doesn’t allow scripts. Order links. Each plan has its own join link to use on buttons, emails and social posts. Join requests. Turn them on or off, and choose which plans appear on your website. People who join give their details, ID or passport number and a photo, and you’re emailed about each new request. "
  },
  {
    "title": "Configure your gym workspace",
    "description": "Find the Movilo settings for your gym’s region, subscription, team, branches, branding, domain, contracts, email and invoice details.",
    "href": "/products/movilo/gym/settings",
    "audience": "Gym owners and staff",
    "terms": " TabWhat you set GeneralGym name and city, and your region: country, timezone, currency and arrears grace period. Also your own password. SubscriptionYour Movilo plan, how much of it you use, and invoices to pay. Pay by EFT using the invoice number as the reference. Your plan activates once Netstreet confirms payment. TeamInvite people, change their role or branch, or remove them. BranchesAdd, close or reopen branches. BrandingLogo, brand colour and member portal address. On plans that include it, white label hides Movilo and Netstreet from your members and team, and lets you link your own terms and privacy policy. DomainYour Movilo address, such as yourgym.movilo.co.za, which works straight away. On plans that include it, connect your own domain, such as members.yourgym.co.za: add the TXT and CNAME records Movilo shows at your DNS provider, then press Check now until it’s live. A subdomain works best, and your main website can stay where it is. ContractsYour membership contract. See Contracts. EmailSend from your own mail server (with presets for Google Workspace, Microsoft 365, Resend and others), check your domain, change the wording of your emails, send tests, and see what was sent. InvoicesYour legal name, registration and VAT numbers, address, contact details, bank details, invoice numbering, due days, layout and notes. With a VAT number and rate, invoices read “Tax invoice” and show the VAT included. On your own domain or Movilo subdomain, everyone who signs in only sees your gym. Password reset and email confirmation links always use your Movilo address, never your own domain. "
  },
  {
    "title": "Review gym reports and export your records",
    "description": "Review membership health, class capacity, enquiry conversion and workspace activity in Movilo, then export your gym’s records.",
    "href": "/products/movilo/gym/reports",
    "audience": "Gym owners and staff",
    "terms": " Under Reports: membership health (active, frozen and cancelled), class capacity used, enquiries turned into members, and your workspace activity, a record of every change your team made. Export members, attendance and enquiries to spreadsheets. "
  },
  {
    "title": "Look after your members’ personal information",
    "description": "Understand how Movilo handles member photos, identification numbers, biometric consent and signed contracts within your gym workspace.",
    "href": "/products/movilo/gym/member-privacy",
    "audience": "Gym owners and staff",
    "terms": " Your gym is responsible for your members’ information under POPIA. Movilo helps by keeping it tight: Encrypted: ID and passport numbers, gate passcodes, fingerprint and face templates, and mail passwords. Photos open only for your staff and the member themself. ID numbers show as their last four digits. Viewing a whole number is recorded. Coaches see none. Biometrics need recorded consent, and are deleted when consent is withdrawn or the member is cancelled. Signed contracts hold the full ID number, as a paper contract would, so treat them as sensitive. "
  },
  {
    "title": "Join your gym through Movilo",
    "description": "Send a join request through your gym’s website or join link, choose a membership, add your identification and photo, or join at reception.",
    "href": "/products/movilo/members/joining-a-gym",
    "audience": "Members",
    "terms": " If your gym’s website has a Join button, or they sent you a join link: Choose your plan. Enter your name, email and, if you like, your phone number. Enter your South African ID number, or your passport number and the country that issued it. It goes on your membership contract and is stored encrypted. Add a photo of your face, with your phone’s camera or an upload. The gym’s team sees it when you arrive, to check it’s you. Agree that the gym can contact you, and send your request. The gym will be in touch. You can also join at the gym’s front desk, where staff add you and take your photo. "
  },
  {
    "title": "Create and recover your member account",
    "description": "Create your Movilo account using the email your gym has for you, confirm your email address and reset your password when you need to.",
    "href": "/products/movilo/members/your-account",
    "audience": "Members",
    "terms": " Create an account with the same email address your gym has for you, and a password of at least 10 characters. Confirm your email from the message you receive. Until you do, you can’t open your membership. Forgot your password? Choose “Forgot password” on the sign-in page. The link lasts an hour. "
  },
  {
    "title": "Sign your gym membership contract",
    "description": "Open your gym’s contract, check your details, add your signature and confirm your signing code, then find your signed copy in Movilo.",
    "href": "/products/movilo/members/signing-your-contract",
    "audience": "Members",
    "terms": " If your gym uses online contracts, you’ll get an email asking you to sign. You can’t check in or book until you do. Open the link in the email. It lasts 30 days. You can also choose Read and sign in your member portal. Read the contract, and check your details at the top are right. Tick each statement to confirm it. Sign in the box with your finger or mouse, or choose Type to use your name. Confirm that you’re signing electronically. Your electronic signature is as binding as one on paper. Ask for a code. It’s texted to your mobile, or emailed if your gym can’t text you. Enter it within 10 minutes and choose Sign contract. You’ll get an email with a link to your signed copy, which is also in your member portal. If you signed online, you can cancel without reason within 7 days by telling your gym in writing. If you get a signing code you didn’t ask for, don’t share it, and tell your gym. Someone may have your signing link. "
  },
  {
    "title": "Use your gym member portal",
    "description": "Book and cancel classes, check your account and balance, find your contract and open a reception check-in pass in your gym’s member portal.",
    "href": "/products/movilo/members/member-portal",
    "audience": "Members",
    "terms": " TabWhat you can do ClassesSee upcoming classes and book a spot. If a class is full, you join the waitlist and move up when a space opens. My bookingsSee and cancel your bookings. Cancelling gives your class credit back. My accountYour details, photo, ID (shown as its last digits), contract and balance. Ask your gym to change anything here. Check-in passA QR code for the front desk. It works once, within two minutes, so open it when you arrive. If your gym doesn’t have your photo yet, the portal asks you to add one. You can add it once. After that, only the gym can change it. "
  },
  {
    "title": "Get into your gym and resolve access problems",
    "description": "Use reception, a QR pass, a card, a passcode or enrolled biometrics to enter your gym, and find out what to check when access is blocked.",
    "href": "/products/movilo/members/getting-in",
    "audience": "Members",
    "terms": " Depending on your gym, you come in by: Checking in at reception, or showing your check-in pass. A card at the gate, once reception has added it. A passcode at the gate: type your gate ID, then your code. Ask reception for your gate ID. Your fingerprint or face at the gate, once you’ve agreed and been enrolled at the gym. You can withdraw your consent at any time, and the gym then deletes your templates. If you can’t get in It’s usually one of these: your membership is frozen or ended, your contract isn’t signed yet, or an invoice is overdue. Speak to reception. Once it’s sorted, the gates know within seconds. "
  },
  {
    "title": "Get answers to common member questions",
    "description": "Find out who can see your member information, how to pay your gym and what to check when a Movilo email does not reach your inbox.",
    "href": "/products/movilo/members/questions",
    "audience": "Members",
    "terms": " Who can see my information? Your gym’s team, and only as much as each person’s role needs. Your full ID number is hidden from most staff, and viewing it is recorded. Netstreet runs Movilo for your gym, and your gym decides how your information is used. How do I pay? Your gym emails your invoices with a link to view them. Pay the way your gym asks, usually EFT or at the desk. Your balance shows under My account. I didn’t get an email Check your spam folder, and that your gym has the right email address. You can ask for a new confirmation email after signing in. "
  },
  {
    "title": "Access the Movilo operator console",
    "description": "Set up an authorised Netstreet operator account and open the Movilo platform console on the main address to manage the service.",
    "href": "/products/movilo/operator/console-access",
    "audience": "Platform operators",
    "terms": " Sign up on Movilo’s main address with your work email, and confirm it from the email Movilo sends. Someone with access to the server runs this once, with your address:npm run platform:admin -- you@netstreet.co.za --remote Sign in again and open /platform. Your account also shows a link to it under Settings, Your account. The console only works on Movilo’s main address. On a gym’s own address or subdomain, operator powers are switched off, even for your account. That protects you if a gym’s domain is ever misused. "
  },
  {
    "title": "Find your way around the operator console",
    "description": "Explore Movilo’s operator tools for gyms, subscriptions, invoices, plans, email and activity, including helping a gym owner regain access.",
    "href": "/products/movilo/operator/console-overview",
    "audience": "Platform operators",
    "terms": " TabWhat it’s for OverviewPaying gyms, gyms on trial, gyms that need attention because payment is due or their trial ended, suspended gyms, total members, monthly revenue and open invoices. GymsEvery gym with its owner, status, plan, address, members, branches, team and gates. Manage opens a gym: change its plan, set its trial end date, add an owner by email, issue a subscription invoice, or suspend and reactivate it. InvoicesSubscription invoices to gyms. View, email, mark paid or void each one. Issue due renewals invoices every active gym whose paid period ends within seven days. PlansMovilo’s plans: price, member, branch, team and gate limits, whether they include white label and the gym’s own domain, and whether they show on the pricing page. EmailHow Movilo itself sends email, a check of the sending domain, and Movilo’s email wording. Invoice designNetstreet’s details on subscription invoices: legal name, registration and VAT numbers, address, bank details for EFT, numbering and due days. WebsiteCode to show Movilo’s plans and a sign-up button on Netstreet’s website. Sent emailsEvery email Movilo sent or tried to send, with failures. When email isn’t set up, messages wait here instead. ActivityA permanent log of what operators did in the console. It can’t be changed or deleted. Helping a gym owner who lost access Ask them to sign up again with an email they can reach. Then open the gym under Gyms, choose Manage, and use Add an owner by email. They become an owner alongside anyone already there. "
  },
  {
    "title": "Invoice gyms for their Movilo subscription",
    "description": "Issue subscription invoices, confirm EFT payments, handle renewals and understand trial, active, overdue and read-only gym statuses.",
    "href": "/products/movilo/operator/billing-gyms",
    "audience": "Platform operators",
    "terms": " Gyms pay Movilo by EFT against an invoice. Nothing is charged automatically. Trial. A new gym gets 14 days free. You can change the end date under Gyms, Manage. Choosing a plan. The owner picks a plan under Settings, Subscription. Movilo issues an invoice and emails it, with Netstreet’s bank details and the invoice number as the payment reference. Confirming payment. When the money shows on the bank statement, find the invoice under Invoices and choose Mark paid, entering the bank reference. The gym becomes active until the end of the period the invoice covers. Renewals. Press Issue due renewals regularly, for example every Monday. It isn’t automatic yet. Gym statusWhat it means Free trialEverything works until the trial ends. ActivePaid up. Payment dueThe paid period ended less than seven days ago. Everything still works, and the owner sees a reminder. ExpiredThe trial ended, or payment is more than seven days late. The gym can read everything but can’t make changes until it pays. Suspended or cancelledSet by you. Read-only, with data kept. A read-only gym’s gates keep working, so its members aren’t locked out because the gym is late paying Movilo. "
  },
  {
    "title": "Set Movilo subscription plans and limits",
    "description": "Configure Movilo subscription prices and limits for members, branches, teams and gates, including custom-domain and white-label features.",
    "href": "/products/movilo/operator/plans-and-limits",
    "audience": "Platform operators",
    "terms": " Each plan sets how many active members, branches, team members and gates a gym may have. Use −1 for unlimited and 0 for none. Two switches add features: white label, which hides Movilo and Netstreet from the gym’s members and staff, and the gym’s own domain. The starting plans are placeholders. Set the real prices before anyone sees the pricing page. Starting planMembersBranchesTeamGatesOwn domainWhite label Starter, R799 a month150131NoNo Growth, R1 499 a month5003104YesNo Scale, R2 999 a monthUnlimitedUnlimitedUnlimitedUnlimitedYesYes A gym can’t move to a plan its current use doesn’t fit. If a plan loses white label or own domain, gyms on it lose that feature straight away, and get it back if they upgrade. "
  },
  {
    "title": "Configure Movilo platform email",
    "description": "Set up Movilo’s sending service, check sending-domain records and customise platform email wording while keeping account messages separate.",
    "href": "/products/movilo/operator/email",
    "audience": "Platform operators",
    "terms": " Movilo sends account emails (confirming an email address and resetting a password), contract signing links and codes, subscription invoices, and email for gyms without their own mail server. Choose one way to send under Email in the console: a sending service such as Resend or SendGrid over SMTP, which is the recommended choice, or Microsoft 365. Microsoft is turning off password sign-in for SMTP by default for existing tenants from about December 2026, so check with your Microsoft administrator before relying on it. Check the domain. The domain check looks for SPF, DKIM, DMARC and MX records. Enter your DKIM selector to check DKIM. Wording. You can change the subject, message and button of Movilo’s subscription invoice, confirmation and reset emails. Words in double braces, such as {{invoice_number}}, are filled in for each email. Some emails always go through Movilo, never a gym’s mail server: password resets, email confirmations, and contract signing links and codes. They let someone into an account or sign a contract, so a gym must never be able to read them. "
  },
  {
    "title": "Configure the Movilo server",
    "description": "Review the server settings for Movilo encryption, public addresses, email, signing codes and custom domains, plus test-only settings to avoid.",
    "href": "/products/movilo/operator/server-settings",
    "audience": "Platform operators",
    "terms": " These are set on the server by whoever deploys Movilo. Keep secrets out of email and chat. SettingWhat it does SECRETS_KEYRequired. At least 32 random characters. Encrypts mail passwords, gate passcodes, fingerprint and face templates, and ID numbers. Without it, no member can be added. Keep a copy somewhere safe: if it’s lost, every encrypted value must be collected again. APP_URLMovilo’s public address, such as https://app.movilo.co.za. APP_DOMAINThe domain gym subdomains and gate addresses live under, such as movilo.co.za. Needed for gates. RESEND_API_KEY, EMAIL_FROMOptional. Sends Movilo’s email through Resend’s API instead of SMTP. SMS_PROVIDER, SMS_USERNAME, SMS_PASSWORD, SMS_FROMOptional. Text messages for contract signing codes, through BulkSMS or Twilio. Without them, codes go by email. CF_API_TOKEN, CF_ZONE_ID, CUSTOM_DOMAIN_TARGETOptional. Let gyms connect their own domains, through Cloudflare for SaaS. Never set ALLOW_LOCAL_SMTP, CF_API_BASE, DOH_URL or SMS_API_BASE on a live server. They exist only for testing. "
  },
  {
    "title": "Back up and maintain Movilo",
    "description": "Plan database and encryption-key backups, check restores, monitor Movilo errors and understand shared database storage for gym records.",
    "href": "/products/movilo/operator/backups-and-care",
    "audience": "Platform operators",
    "terms": " Back up nightly, away from Cloudflare. Export the database every night, encrypt the file and store it elsewhere, for example AWS S3 in Cape Town or Backblaze B2. Restore one now and then to prove it works. Back up SECRETS_KEY separately, for example in a password manager. A restored database can’t read encrypted values without it. Watch for errors. Failed requests are logged as “Movilo API error” and gate problems as “Movilo gate error”. Space. All gyms share one database. Photos and signed contract PDFs take most of the space, about 65 MB per 1 000 members. "
  }
];

export const MoviloSearch = () => {
  const [query, setQuery] = useState("");
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const matches = terms.length ? articles.filter(article => {
    const haystack = `${article.title} ${article.description} ${article.audience} ${article.terms}`.toLocaleLowerCase();
    return terms.every(term => haystack.includes(term));
  }).sort((a, b) => {
    const score = article => terms.filter(term => article.title.toLocaleLowerCase().includes(term)).length;
    return score(b) - score(a);
  }) : [];
  return (
    <div className="movilo-search">
      <form role="search" onSubmit={event => event.preventDefault()}>
        <label className="movilo-sr-only" htmlFor="movilo-help-search">Search Movilo help articles</label>
        <div className="movilo-search-field">
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16.3 16.3 4.3 4.3"/></svg>
          <input id="movilo-help-search" type="search" value={query} onChange={event => setQuery(event.target.value)} onKeyDown={event => { if (event.key === "Escape") setQuery(""); }} placeholder="Search Movilo help articles" autoComplete="off" aria-controls="movilo-search-results" />
        </div>
      </form>
      <div id="movilo-search-results" className={terms.length ? "movilo-search-results" : "movilo-search-empty"}>
        <p role="status" aria-live="polite" aria-atomic="true" className={terms.length ? "movilo-search-count" : "movilo-sr-only"}>{terms.length ? `${matches.length} ${matches.length === 1 ? "article" : "articles"} found${matches.length > 8 ? ". Showing the first 8. Refine your search for more specific results." : "."}` : ""}</p>
        {terms.length > 0 && matches.length === 0 && <p>Try a topic such as memberships, bookings or check-in, or <a href="#movilo-support">get help below</a>.</p>}
        {terms.length > 0 && matches.length > 0 && <ul>{matches.slice(0, 8).map(article => <li key={article.href}><a href={article.href}><span className="movilo-search-audience">{article.audience}</span><strong>{article.title}</strong><span>{article.description}</span></a></li>)}</ul>}
      </div>
    </div>
  );
};
