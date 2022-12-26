package com.hsql.demo.abhay.webservices;

import com.dassault_systemes.platform.restServices.ModelerBase;
/**
 * Modeler class for report generator widget
 * @since 2018x.5
 */
import javax.ws.rs.ApplicationPath;

@ApplicationPath("/TestSqlServices")
public class TestSqlModeler extends ModelerBase {
	public Class<?>[] getServices() {
		return new Class[] { TestSqlServices.class };
	}
}