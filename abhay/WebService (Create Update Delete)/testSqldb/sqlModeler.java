package com.testSqldb;

import com.dassault_systemes.platform.restServices.ModelerBase;
/**
 * Modeler class for report generator widget
 * @since 2018x.5
 */
import javax.ws.rs.ApplicationPath;

@ApplicationPath("/hsqldbServices")
public class sqlModeler extends ModelerBase {
	public Class<?>[] getServices() {
		return new Class[] { sqlServices.class };
	}
}