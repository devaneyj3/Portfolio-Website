import React from "react";
import styles from "./contact.module.scss"; // Ensure this path matches the location of your SCSS module file

const Contact = ({ data }) => {
	const { message } = data;

	return (
		<section className={styles.contact}>
			<div className={`row ${styles.sectionHead}`}>
				<div className={`two columns ${styles.headerCol}`}>
					<h2>
						<span>Get In Touch.</span>
					</h2>
				</div>

				<div className={`ten columns`}>
					<p className={`${styles.lead}`}>{message}</p>
				</div>
			</div>

			<div className="row">
				<div className="eight columns">
					<form
						action=""
						method="post"
						className={styles.contactForm}
						name="contactForm">
						<fieldset>
							<div>
								<label htmlFor="contactName">
									Name <span className={styles.required}>*</span>
								</label>
								<input
									type="text"
									defaultValue=""
									size="35"
									id="contactName"
									name="contactName"
								/>
							</div>

							<div>
								<label htmlFor="contactEmail">
									Email <span className={styles.required}>*</span>
								</label>
								<input
									type="text"
									defaultValue=""
									size="35"
									id="contactEmail"
									name="contactEmail"
								/>
							</div>

							<div>
								<label htmlFor="contactSubject">Subject</label>
								<input
									type="text"
									defaultValue=""
									size="35"
									id="contactSubject"
									name="contactSubject"
								/>
							</div>

							<div>
								<label htmlFor="contactMessage">
									Message <span className={styles.required}>*</span>
								</label>
								<textarea
									cols="50"
									rows="15"
									id="contactMessage"
									name="contactMessage"></textarea>
							</div>

							<div>
								<button className={styles.submit}>Submit</button>
								<span className={styles.imageLoader}>
									<img alt="" src="images/loader.gif" />
								</span>
							</div>
						</fieldset>
					</form>

					<div className={styles.messageWarning}> Error boy</div>
					<div className={styles.messageSuccess}>
						<i className="fa fa-check"></i>Your message was sent, thank you!
						<br />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
