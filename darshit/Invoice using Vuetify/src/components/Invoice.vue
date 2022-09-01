<template>
    <v-container>
        <h1 class="text-center mt-5"> Invoice</h1>
        <v-row>
            <v-col cols="12 " md="6">
                <h4>
                    Company Name
                </h4>
                <p>
                    Street Address<br />
                    City <br />
                    Phone <br />
                </p>
                <h6 class="light-blue py-1 mt-9 pl-2 mr-18">BILL TO</h6>
                <p>
                    Name:<br />
                    Company Name:<br />
                    Street Address:<br />
                    City:<br />
                    Phone: <br />
                    Email Address:<br />
                </p>
            </v-col>
            <v-col cols="12 " md="6">
                <h2>
                    Invoice
                </h2>
                <h6 class="mt-5">
                    <v-layout row wrap>
                        <v-flex xs5 class="light-blue py-1">
                            <span>INVOICE</span><br />
                        </v-flex>
                        <v-flex xs5 class="light-blue py-1">
                            <span>DATE</span><br />
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs5 >
                            <span>001</span><br />
                        </v-flex>
                        <v-flex xs5 >
                            <span>23-08-2022</span><br />
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="mt-9">
                        <v-flex xs5 class="light-blue py-1">
                            <span>CUSTOMER ID</span><br />
                        </v-flex>
                        <v-flex xs5 class="light-blue py-1">
                            <span>TERMS</span><br />
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs5>
                            <span>C-001</span><br />
                        </v-flex>
                        <v-flex xs5>
                            <span>Due Before Payment</span><br />
                        </v-flex>
                    </v-layout>
                </h6>
            </v-col>
        </v-row>
    </v-container>
</template>