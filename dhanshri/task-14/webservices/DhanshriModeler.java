
package com.dhanshri.dhanshri.webservices;
import javax.ws.rs.ApplicationPath;

import com.dassault_systemes.platform.restServices.ModelerBase;

@ApplicationPath("/dhanshri")
public class DhanshriModeler extends ModelerBase {
	public Class<?>[] getServices() {
		return new Class[] { DhanshriServices.class };
	}
}
