
package com_abhay.abhay.webservices;

import com.dassault_systemes.platform.restServices.ModelerBase;
/**
 * Modeler class for report generator widget
 * @since 2018x.5
 */
import javax.ws.rs.ApplicationPath;

@ApplicationPath("/AbhayServices")
public class AbhayModeler extends ModelerBase {
	public Class<?>[] getServices() {
		return new Class[] { AbhayServices.class };
	}
}
