import React from "react";
import styles from "./contact.module.scss"; // Ensure this path matches the location of your SCSS module file

const Contact = ({ data }) => {
	const { message } = data;

	return (
		<section className={styles.contact} role="form" aria-label="Get In Touch">
			<div className={`row ${styles.sectionHead}`}>
				<div className={`two columns ${styles.headerCol}`}>
					<h2>Get In Touch.</h2>
				</div>

				<div className={`ten columns`}>
					<p className={styles.lead}>{message}</p>
				</div>
			</div>

			<div className="row">
				<div className="eight columns">
					<form
						action=""
						method="post"
						className={styles.contactForm}
						name="contactForm"
						aria-label="Contact">
						<fieldset>
							<legend id="contactFormHeading">Contact Form</legend>

							<div>
								<label htmlFor="contactName">
									Name <span className={styles.required}>*</span>
								</label>
								<input
									type="text"
									id="contactName"
									name="contactName"
									aria-required="true"
									required
								/>
							</div>

							<div>
								<label htmlFor="contactEmail">
									Email <span className={styles.required}>*</span>
								</label>
								<input
									type="email"
									id="contactEmail"
									name="contactEmail"
									aria-required="true"
									required
								/>
							</div>

							<div>
								<label htmlFor="contactSubject">Subject</label>
								<input type="text" id="contactSubject" name="contactSubject" />
							</div>

							<div>
								<label htmlFor="contactMessage">
									Message <span className={styles.required}>*</span>
								</label>
								<textarea
									id="contactMessage"
									name="contactMessage"
									rows="5"
									aria-required="true"
									required></textarea>
							</div>

							<div>
								<button
									type="submit"
									className={styles.submit}
									aria-label="Submit Contact Form">
									Submit
								</button>
								<span className={styles.imageLoader}>
									<img src="images/loader.gif" alt="Loading" />
								</span>
							</div>
						</fieldset>
					</form>

					<div className={styles.messageWarning} aria-live="polite">
						Error boy
					</div>
					<div className={styles.messageSuccess} aria-live="polite">
						<i className="fa fa-check" aria-hidden="true"></i>
						Your message was sent, thank you!
						<br />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
