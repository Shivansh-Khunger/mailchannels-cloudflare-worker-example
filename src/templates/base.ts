import { socialLinks } from '../constants';

function getBaseContent() {
	return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>Coder Introduction</title>
		<style type="text/css">
			body,
			#bodyTable {
				margin: 0;
				padding: 0;
				width: 100% !important;
				height: 100vh; /* Full viewport height */
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #1a1a1a;
			}
			.ReadMsgBody {
				width: 100%;
			}
			.ExternalClass {
				width: 100%;
			}
			body {
				-webkit-text-size-adjust: none;
				-ms-text-size-adjust: none;
			}
			table {
				border-collapse: collapse;
			}
			body,
			table,
			td,
			p,
			a {
				font-family: 'Courier New', monospace;
				color: #e0e0e0;
			}
			.container {
				max-width: 600px;
				background-color: #2a2a2a;
				border: 1px solid #3a3a3a;
				border-radius: 15px; /* Rounded corners */
				overflow: hidden; /* Ensure content respects border radius */
			}
			.header {
				border-bottom: 2px solid #4a4a4a;
			}
			.greeting {
				font-size: 24px;
				font-weight: bold;
				color: #4da6ff;
			}
			.section-title {
				font-size: 18px;
				font-weight: bold;
				color: #4da6ff;
			}
			.quote {
				font-style: italic;
				border-left: 3px solid #4da6ff;
				padding-left: 20px;
			}
			.social-links a {
				color: #4da6ff;
				text-decoration: none;
			}
		</style>
	</head>
	<body>
		<table border="0" cellpadding="0" cellspacing="0" width="100%" id="bodyTable">
			<tr>
				<td align="center" valign="top">
					<table border="0" cellpadding="0" cellspacing="0" width="600" class="container">
						<tr>
							<td align="center" valign="top" class="header" style="padding: 20px">
								<h1 class="greeting">Hello, fellow &lt;coder&gt;!</h1>
							</td>
						</tr>
						<tr>
							<td align="left" valign="top" style="padding: 0 20px">
								<table border="0" cellpadding="0" cellspacing="0" width="100%">
									<tr>
										<td class="section-title" style="padding-top: 20px; padding-bottom: 10px">// Introduction</td>
									</tr>
									<tr>
										<td>
											I'm Shivansh Khunger, a passionate developer with a love for all things Cloud. I'm excited to connect with you and
											share my journey in the world of coding.
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td align="left" valign="top" style="padding: 0 20px">
								<table border="0" cellpadding="0" cellspacing="0" width="100%">
									<tr>
										<td class="section-title" style="padding-top: 20px; padding-bottom: 10px">/* A bit about me */</td>
									</tr>
									<tr>
										<td>
											I began my coding journey with web development and eventually developed a passion for cloud technologies and their
											integral role in supporting modern innovations, including today's buzzword, AI.
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td align="left" valign="top" style="padding: 20px">
								<table border="0" cellpadding="15" cellspacing="0" width="100%" class="quote">
									<tr>
										<td>"The best way to get started is to quit talking and begin doing."</td>
									</tr>
									<tr>
										<td style="padding-top: 10px">- Walt Disney</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td align="center" valign="top" style="padding: 0 20px 20px">
								<table border="0" cellpadding="0" cellspacing="0" width="100%">
									<tr>
										<td class="section-title" style="padding-bottom: 10px">// Let's connect!</td>
									</tr>
									<tr>
										<td style="padding-bottom: 20px">
											If you'd like to connect with me further, here are my social links. Hope to see you in my DMs soon! 😉
										</td>
									</tr>
									<tr>
										<td align="center" class="social-links">
											<a href="${socialLinks.github}" style="margin: 0 10px" target="_blank">GitHub</a>
											<a href="${socialLinks.linkedIn}" style="margin: 0 10px" target="_blank">LinkedIn</a>
											<a href="${socialLinks.twitter}" style="margin: 0 10px" target="_blank">Twitter</a>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
</html>

    `;
}

export default getBaseContent;
