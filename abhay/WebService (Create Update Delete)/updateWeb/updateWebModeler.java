package com.updateWeb;

import com.dassault_systemes.platform.restServices.ModelerBase;
/**
 * Modeler class for report generator widget
 * @since 2018x.5
 */
import javax.ws.rs.ApplicationPath;

@ApplicationPath("/updateService")
public class updateWebModeler extends ModelerBase {
	public Class<?>[] getServices() {
		return new Class[] {updateSev1.class };
	}
}
